import { SuCallMessage, SuEmail, SuLocation } from "@/lib/icons";
import { Link } from "react-router-dom";

const contactInfo = [
    {
        icon: <SuCallMessage />,
        label: "Call Us 7/24",
        value: "+91 93217 73847",
        link: "tel:+919321773847",
    },
    {
        icon: <SuEmail />,
        label: "Make a Quote",
        value: "marketing@aerochamp.net",
        link: "mailto:marketing@aerochamp.net",
    },
    {
        icon: <SuLocation />,
        label: "Location",
        value: "Navi Mumbai, INDIA",
    },
];

const quickLinks = [
    { text: "About Us", link: "/" },
    { text: "Civil Aviation", link: "/" },
    { text: "Defence Aviation", link: "/" },
    { text: "Certifications", link: "/" },
    { text: "Contact Us", link: "/" },
];

const services = [
    { text: "Aircraft Interiors", link: "/" },
    { text: "Maintenance Support", link: "/" },
    { text: "Design & Manufacturing", link: "/" },
    { text: "Reverse Engineering", link: "/" },
    { text: "Exterior Painting", link: "/" },
];

const recentPosts = [
    {
        image: "/NewImgs/virginia-duran-blog_-amazing-aircraft-interior-design-bmw-2.jpg",
        date: "10 Aug, 2023",
        title: "Boosting the growth of MRO Industry",
        link: "/",
    },
    {
        image: "/NewImgs/engineering-video-poster-BKYZAJR2.jpg",
        date: "15 Jun, 2023",
        title: "MRO Calling #Atmanirbhar India",
        link: "/",
    },
];

const Footer = () => {
    return (
        <footer className="footer-section footer-bg">
            <div className="container">
                <div className="contact-info-area">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className="contact-info-items wow slideUp"
                            data-delay={`${0.3 + index * 0.2}`}
                        >
                            <div className="icon">{info.icon}</div>
                            <div className="content">
                                <p>{info.label}</p>
                                <h3>
                                    {info.link ? (
                                        <Link to={info.link}>{info.value}</Link>
                                    ) : (
                                        info.value
                                    )}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-widgets-wrapper">
                <div className="shape-1">
                    <img src="/img/footer-shape-1.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".3"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link to="/">
                                        <img src="/NewImgs/logo-1.png" alt="logo-img" style={{ maxWidth: '180px' }} />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        AeroChamp is a leading aviation company specializing in design, manufacturing, and maintenance support for civil and defence aircraft.
                                    </p>
                                    <div className="social-icon d-flex align-items-center">
                                        <Link to="/">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to="/">
                                            <i className="fa-brands fa-x-twitter" />
                                        </Link>
                                        <Link to="/">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </Link>
                                        <Link to="/">
                                            <i className="fa-brands fa-youtube" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    {quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Services</h3>
                                </div>
                                <ul className="list-area">
                                    {services.map((service, index) => (
                                        <li key={index}>
                                            <Link to={service.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {service.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".7"
                        >
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Recent Posts</h3>
                                </div>
                                <div className="recent-post-area">
                                    {recentPosts.map((post, index) => (
                                        <div
                                            key={index}
                                            className={`recent-post-items ${index === recentPosts.length - 1 ? "mb-0" : ""
                                                }`}
                                        >
                                            <div className="thumb">
                                                <img src={post.image} alt="post-img" />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days me-2" />
                                                        {post.date}
                                                    </li>
                                                </ul>
                                                <h6>
                                                    <Link to={post.link}>{post.title}</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style-2">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow slideLeft color-2" data-delay=".3">
                            © All Copyright 2026 by <Link to="/">AeroChamp</Link> {" "}
                        </p>

                        <ul className="footer-menu wow slideRight" data-delay=".5">
                            <li>
                                <Link to="/">Terms &amp; Condition</Link>
                            </li>
                            <li>
                                <Link to="/">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to="#" id="scrollUp" className="scroll-icon">
                    <i className="fa fa-arrow-up" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;