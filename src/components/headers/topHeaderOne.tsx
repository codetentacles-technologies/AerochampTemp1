import { Link } from "react-router-dom"

const TopHeaderOne = ({ wrapperClass, className }: { wrapperClass?: string, className?: string }) => {
    return (
        <div className={`header-top-section fix ${className}`}>
            <div className="container-fluid">
                <div className={`header-top-wrapper ${wrapperClass}`}>
                    <ul className="contact-list">
                        <li>
                            <i className="far fa-envelope" />
                            <Link to="mailto:marketing@aerochamp.net" className="link">marketing@aerochamp.net</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone-volume" />
                            <Link to="tel:+919321773847">+91 93217 73847</Link>
                        </li>
                    </ul>
                    <div className="top-right">
                        <div className="social-icon d-flex align-items-center">
                            <span>Follow Us:</span>
                            <Link to="https://www.facebook.com/aerochamp"><i className="fab fa-facebook-f" /></Link>
                            <Link to="https://twitter.com/ChampAero"><i className="fa-brands fa-x-twitter" /></Link>
                            <Link to="https://www.linkedin.com/company/aerochamp-aviation-intl-pvt-ltd"><i className="fa-brands fa-linkedin-in" /></Link>
                            <Link to="https://www.youtube.com/channel/UCGPr9VkECEZgemtmUh72_og"><i className="fa-brands fa-youtube" /></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopHeaderOne