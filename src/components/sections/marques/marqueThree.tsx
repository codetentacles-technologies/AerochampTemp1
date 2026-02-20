import { Fragment } from "react";

const marqueeItems = [
    'Solar Pane',
    'Water Heating',
    'Financing',
    'Hydro Power',
    'Solar Pane',
    'Water Heating',
    'Financing',
    'Hydro Power',
    'Solar Pane',
    'IT Solution',
    'Water Heating',
    'Hydro Power',
];
const MarqueThree = () => {
    return (
        <div className="marque-section-2 section-padding pt-0">
            <div className="container-fluid">
                <div className="marquee-wrapper style-2 text-slider">
                    <div className="marquee-inner to-left">
                        <ul className="marqee-list d-flex">
                            <li className="marquee-item style-2">
                                {marqueeItems.map((item, index) => (
                                    <Fragment key={index}>
                                        <span className="text-slider">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="54" viewBox="0 0 50 54" fill="none">
                                                <path d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z" fill="#cc3366" />
                                            </svg>
                                        </span>
                                        <span className="text-slider text-style">{item}</span>
                                    </Fragment>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MarqueThree