import { Fragment } from 'react'
const textSliderData = [
    "Aircraft Interiors",
    "Maintenance Support",
    "Design & Manufacturing",
    "Reverse Engineering",
    "Civil Aviation",
    "Defence Aviation",
    "Component Certification",
    "Aircraft Exteriors",
    "Safety Solutions",
    "Custom Interiors"
];

const MarqueOne = () => {
    return (
        <div className="marque-section">
            <div className="marquee-wrapper text-slider">
                <div className="marquee-inner to-left">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item">
                            {textSliderData.map((text, index) => (
                                <Fragment key={index}>
                                    <span className="text-slider">{text}</span>
                                    <span className="text-slider">
                                        <img src="/img/star.svg" alt="img" />
                                    </span>
                                </Fragment>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default MarqueOne