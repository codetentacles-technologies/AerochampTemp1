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
    <section className="hero-section hero-1">
      <div className="array-button">
        <button className="array-prev"><i className="fa fa-arrow-left" /></button>
        <button className="array-next"><i className="fa fa-arrow-right" /></button>
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        effect="fade"
        speed={3000}
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
    >
      <div className="hero-image bg-cover" style={{ backgroundImage: `url(${slide.image})` }} />
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="hero-content">
              <motion.h6
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.3,
                  ease: 'linear',
                }}
              >
                {slide.title}
              </motion.h6>
              <motion.h1
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.5,
                  ease: 'linear',
                }}
                dangerouslySetInnerHTML={{ __html: slide.heading }}></motion.h1>
              <motion.p
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.7,
                  ease: 'linear',
                }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.9,
                  ease: 'linear',
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
    </motion.div>
  )
}