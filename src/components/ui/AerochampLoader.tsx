import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AerochampLoaderProps {
    onComplete?: () => void;
}

const AerochampLoader = ({ onComplete }: AerochampLoaderProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const planeRef = useRef<HTMLDivElement>(null);
    const trackFillRef = useRef<HTMLDivElement>(null);
    const percentRef = useRef<HTMLDivElement>(null);
    const numRef = useRef<HTMLSpanElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        /* ─────────────── measure track width at runtime ─────────────── */
        const trackEl = trackFillRef.current?.parentElement as HTMLElement | null;
        const trackW = trackEl?.offsetWidth ?? 700;
        const planeW = planeRef.current?.offsetWidth ?? 80;
        const travel = trackW - planeW;           // px the plane can actually travel

        /* ─────────────── state proxy ─────────────── */
        const state = { pct: 0 };

        /* ─────────────── GSAP master timeline ─────────────── */
        const tl = gsap.timeline();

        /* Phase 1 – count 0 → 100  (~3.8s, non-linear: slow start, fast mid, slow end) */
        tl.to(state, {
            pct: 100,
            duration: 3.8,
            ease: 'power1.inOut',
            onUpdate() {
                const v = Math.floor(state.pct);

                /* text counter */
                if (numRef.current) numRef.current.textContent = String(v).padStart(2, '0');

                /* progress bar fill */
                if (trackFillRef.current) {
                    trackFillRef.current.style.width = `${state.pct}%`;
                }

                /* plane X position: maps 0→100 onto 0→travel (px) */
                if (planeRef.current) {
                    gsap.set(planeRef.current, { x: (state.pct / 100) * travel });
                }
            },
        }, 0);

        /* Phase 2 – hold at 100% for 0.3s so user sees it */
        /* Phase 3 – plane tilts up & flies off-screen (rotation + y up) */
        tl.to(planeRef.current, {
            rotation: -55,
            y: -window.innerHeight * 0.8,
            x: travel + 120,
            duration: 0.9,
            ease: 'power3.in',
        }, '+=0.35');

        /* Phase 4 – entire overlay slides up */
        tl.to(overlayRef.current, {
            yPercent: -100,
            duration: 0.75,
            ease: 'expo.inOut',
            onComplete() {
                document.body.style.overflow = '';
                if (onComplete) onComplete();
            },
        }, '-=0.25');

        return () => {
            tl.kill();
            document.body.style.overflow = '';
        };
    }, [onComplete]);

    return (
        <div
            ref={overlayRef}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 999999,
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                fontFamily: "'Inter', 'Segoe UI', sans-serif",
            }}
        >

            {/* ═══════════════════════════════════════════
          BACKGROUND CLOUDS
      ═══════════════════════════════════════════ */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                {[
                    { top: '10%', delay: '0s', dur: '14s', opacity: 0.18, scale: 1.4 },
                    { top: '22%', delay: '4s', dur: '10s', opacity: 0.10, scale: 1 },
                    { top: '38%', delay: '7s', dur: '16s', opacity: 0.14, scale: 1.2 },
                    { top: '55%', delay: '2s', dur: '12s', opacity: 0.09, scale: 0.9 },
                    { top: '70%', delay: '9s', dur: '11s', opacity: 0.13, scale: 1.1 },
                ].map((c, i) => (
                    <svg
                        key={i}
                        className="ac-cloud"
                        viewBox="0 0 200 80"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            position: 'absolute',
                            top: c.top,
                            right: '-220px',
                            width: `${200 * c.scale}px`,
                            opacity: c.opacity,
                            animationDuration: c.dur,
                            animationDelay: c.delay,
                        }}
                    >
                        <ellipse cx="100" cy="55" rx="90" ry="25" fill="#b0b8cc" />
                        <ellipse cx="75" cy="42" rx="50" ry="30" fill="#c8d0e0" />
                        <ellipse cx="120" cy="38" rx="45" ry="28" fill="#c8d0e0" />
                        <ellipse cx="100" cy="32" rx="38" ry="26" fill="#d8e0ee" />
                    </svg>
                ))}
            </div>

            {/* ═══════════════════════════════════════════
          CENTRE STAGE
      ═══════════════════════════════════════════ */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    maxWidth: 720,
                    padding: '0 40px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 0,
                }}
            >

                {/* ── Percentage Display ── */}
                <div
                    ref={percentRef}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: 4,
                        marginBottom: 8,
                        lineHeight: 1,
                    }}
                >
                    {/* Big number */}
                    <span
                        ref={numRef}
                        style={{
                            fontSize: 'clamp(72px, 13vw, 130px)',
                            fontWeight: 900,
                            color: 'transparent',
                            WebkitTextStroke: '2.5px #1a1a2e',
                            letterSpacing: '-4px',
                            fontVariantNumeric: 'tabular-nums',
                            userSelect: 'none',
                        }}
                    >
                        00
                    </span>
                    {/* % sign — smaller, filled */}
                    <span
                        style={{
                            fontSize: 'clamp(28px, 5vw, 52px)',
                            fontWeight: 900,
                            color: '#9B4FE0',
                            marginBottom: '14px',
                            userSelect: 'none',
                        }}
                    >
                        %
                    </span>
                </div>

                {/* ── Tagline ── */}
                <p
                    ref={taglineRef}
                    style={{
                        margin: '0 0 28px 4px',
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: '#9B4FE0',
                    }}
                >
                    Preparing for takeoff
                </p>

                {/* ── Runway track + Airplane ── */}
                <div style={{ position: 'relative', width: '100%' }}>
                    {/* Plane — absolutely positioned, starts at left:0 */}
                    <div
                        ref={planeRef}
                        style={{
                            position: 'absolute',
                            bottom: 'calc(100% + 6px)',
                            left: 0,
                            width: 'clamp(64px, 9vw, 88px)',
                            transformOrigin: 'center center',
                            zIndex: 10,
                            willChange: 'transform',
                        }}
                    >
                        <img
                            src="/NewImgs/black-flying-airplane.png"
                            alt="Airplane"
                            style={{ width: '100%', display: 'block' }}
                        />
                        {/* Blinking nav lights */}
                        <div className="ac-light" style={{ right: '30%', bottom: '28%' }} />
                        <div className="ac-light" style={{ right: '52%', bottom: '22%', animationDelay: '400ms' }} />
                    </div>

                    {/* ── Runway track ── */}
                    <div
                        style={{
                            width: '100%',
                            height: 4,
                            background: '#e8e8ee',
                            borderRadius: 4,
                            overflow: 'hidden',
                            position: 'relative',
                        }}
                    >
                        {/* Fill */}
                        <div
                            ref={trackFillRef}
                            style={{
                                position: 'absolute',
                                top: 0, left: 0,
                                height: '100%',
                                width: '0%',
                                background: 'linear-gradient(to right, #9B4FE0, #B340BD, #EE2F5A)',
                                borderRadius: 4,
                                boxShadow: '0 0 12px rgba(155,79,224,0.5)',
                                transition: 'width 0.05s linear',
                            }}
                        />
                    </div>

                    {/* Runway kilometre markers */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                        {['0', '25', '50', '75', '100'].map((t) => (
                            <span key={t} style={{ fontSize: 9, color: '#c0c0d0', letterSpacing: '0.05em' }}>{t}</span>
                        ))}
                    </div>
                </div>

                {/* ── Company name at bottom right ── */}
                <div
                    style={{
                        alignSelf: 'flex-end',
                    }}
                >
                    <img src="/NewImgs/logo-1.png" alt="logo-img" style={{ maxWidth: '160px' }} />

                </div>
            </div>

            {/* ═══════════════════════════════════════════
          GLOBAL KEYFRAMES
      ═══════════════════════════════════════════ */}
            <style>{`
        .ac-light {
          width: 7px;
          height: 7px;
          background: #ff2020;
          border-radius: 50%;
          position: absolute;
          z-index: 10;
          box-shadow: 0 0 8px 2px #ff202099;
          animation: ac-blink 700ms ease-in-out infinite alternate;
        }
        @keyframes ac-blink {
          0%   { opacity: 0.1; transform: scale(0.7); }
          100% { opacity: 1;   transform: scale(1.3); }
        }

        .ac-cloud {
          animation: ac-cloud-move linear infinite;
        }
        @keyframes ac-cloud-move {
          from { right: -220px; }
          to   { right: 105%;  }
        }
      `}</style>
        </div>
    );
};

export default AerochampLoader;
