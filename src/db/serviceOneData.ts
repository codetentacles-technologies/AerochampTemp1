export interface ServiceDataType {
    id: number | string;
    title: string;
    description: string;
    icon: string;
    link: string;
    delay: string;
    active?: boolean;
    image?: string;
}

export const serviceOneData: ServiceDataType[] = [
    {
        id: 1,
        title: "Aircraft Interiors",
        description: "Our design professionals and master craftsman provide the ultimate in aircraft interiors customization.",
        icon: "/img/service/icon/s-icon-1.svg",
        link: "/",
        delay: '.3'
    },
    {
        id: 2,
        title: "Maintenance Cost Optimization",
        description: "With a strong network of repair shops, we support our customers with cost effective solutions.",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/",
        delay: '.5',
        active: true
    },
    {
        id: 3,
        title: "Design & Manufacturing",
        description: "AeroChamp designs, develops, manufactures, validates and certifies mechanical and electronic components.",
        icon: "/img/service/icon/s-icon-3.svg",
        link: "/",
        delay: '.7'
    },
    {
        id: 4,
        title: "Aircraft Interior Disinfection",
        description: "Specialized disinfection and sanitization procedures for aircraft maintenance and ground staff.",
        icon: "/img/service/icon/s-icon-4.svg",
        link: "/",
        delay: '.9'
    },
    {
        id: 5,
        title: "Maintenance Support",
        description: "We suggest alternate parts and develop repair schemes for non-critical components.",
        icon: "/img/service/icon/s-icon-10.svg",
        link: "/",
        delay: '.3'
    },
    {
        id: 6,
        title: "Reverse Engineering",
        description: "Reverse engineering and Indigenisation of complex parts for civil and defence aviation.",
        icon: "/img/service/icon/s-icon-11.svg",
        link: "/",
        delay: '.5'
    },
    {
        id: 7,
        title: "Aircraft Exterior Painting",
        description: "Our expert team members handle aircraft exterior painting with precision and care.",
        icon: "/img/service/icon/s-icon-1.svg",
        link: "/",
        delay: '.7'
    },
    {
        id: 8,
        title: "Component Certification",
        description: "Capability to validate and certify components through our DOA and DER services.",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/",
        delay: '.9'
    }
];

