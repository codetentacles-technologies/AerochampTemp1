import SectionTitle from '@/components/ui/sectionTitle';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const achievements = [
    {
        count: 900,
        description: "Happy Customers",
        icon: "/img/achievement-icon/01.svg",
        delay: ".3"
    },
    {
        count: 30,
        description: "Countries Reached",
        icon: "/img/achievement-icon/02.svg",
        delay: ".5"
    },
    {
        count: 24,
        description: "AOG Support",
        icon: "/img/achievement-icon/03.svg",
        delay: ".7"
    },
    {
        count: 100,
        description: "Quality Precision",
        icon: "/img/achievement-icon/04.svg",
        delay: ".9"
    }
];


const AchievementOne = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    return (
        <section className="achievement-section fix section-padding pt-0">
            <div className="container">
                <div className="achievement-wrapper">
                    <SectionTitle className="mb-0">
                        <SectionTitle.SubTitle className='text-white'>
                            Talk to Us
                        </SectionTitle.SubTitle>
                        <SectionTitle.Title className='text-white'>
                            Professional Expertise in <br />Civil & Defence Aviation
                        </SectionTitle.Title>
                    </SectionTitle>

                    <div className="counter-area" >
                        {achievements.map((achievement, index) => (
                            <div
                                className="counter-items wow slideUp"
                                data-delay={achievement.delay}
                                key={index}
                            >
                                <div className="icon">
                                    <img src={achievement.icon} alt="icon-img" />
                                </div>
                                <div className="content" ref={ref}>
                                    {
                                        inView &&
                                        <h2>
                                            <span className="count"><CountUp end={achievement.count} /></span>+
                                        </h2>
                                    }
                                    <p>{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AchievementOne