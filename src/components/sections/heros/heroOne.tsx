import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import 'swiper/css';
import { Link } from "react-router-dom";

interface SlideType {
  id: number;
  image: string;
  title: string;
  heading: string;
  description: string;
  link: string;
}
const slidesData: SlideType[] = [
  {
    id: 1,
    image: '/NewImgs/interior.jpg',
    title: 'WELCOME TO AEROCHAMP',
    heading: 'Global Reach with <br /> Local Presence in <br /> Civil & Defence Aviation',
    description: 'Specializing in aircraft interiors, maintenance support, and design & manufacturing for more than 30 countries.',
    link: '/',
  },
  {
    id: 2,
    image: '/NewImgs/hero-aerospace.jpg',
    title: 'EXPERTS IN AIRCRAFT INTERIORS',
    heading: 'Design & Manufacturing <br /> of Civil and Defence <br /> Aircraft Parts',
    description: 'We offer professional expertise in Civil and Defence aviation, specializing in aircraft interiors and maintenance cost optimization.',
    link: '/',
  },
];


const HeroOne = () => {
  return (
    <section className="hero-section hero-1" style={{ backgroundColor: '#16171a' }}>
      <div className="array-button">
        <button className="array-prev"><i className="fa fa-arrow-left" /></button>
        <button className="array-next"><i className="fa fa-arrow-right" /></button>
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={2000}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".array-prev",
          prevEl: ".array-next",
        }}
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {(({ isActive }) => <Card slide={slide} isActive={isActive} />)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  )
}

export default HeroOne

const Card = ({ slide, isActive }: { slide: SlideType; isActive: boolean }) => {
  return (
    <div className="hero-slide-container" style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden', minHeight: '700px' }}>
      <motion.div
        className="hero-image bg-cover"
        style={{
          backgroundImage: `url(${slide.image})`,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1.15 }}
        animate={{ scale: isActive ? 1 : 1.15 }}
        transition={{
          duration: 7,
          ease: 'easeOut',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="hero-content">
              <motion.h6
                initial={{ x: '50px', opacity: 0 }}
                animate={{ x: isActive ? '0' : '50px', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .8,
                  delay: 0.3,
                  ease: 'easeOut',
                }}
              >
                {slide.title}
              </motion.h6>
              <motion.h1
                initial={{ y: '30px', opacity: 0 }}
                animate={{ y: isActive ? '0' : '30px', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .8,
                  delay: 0.5,
                  ease: 'easeOut',
                }}
                dangerouslySetInnerHTML={{ __html: slide.heading }}></motion.h1>
              <motion.p
                initial={{ y: '20px', opacity: 0 }}
                animate={{ y: isActive ? '0' : '20px', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .8,
                  delay: 0.7,
                  ease: 'easeOut',
                }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ y: '20px', opacity: 0 }}
                animate={{ y: isActive ? '0' : '20px', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .8,
                  delay: 0.9,
                  ease: 'easeOut',
                }}
                className="hero-button"
              >
                <Link to={slide.link} className="theme-btn theme-color-2">
                  <span>Learn More <i className="fas fa-chevron-right" /></span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}