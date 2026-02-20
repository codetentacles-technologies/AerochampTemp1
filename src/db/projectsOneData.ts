export interface ProjectDataType {
    id: number;
    image: string;
    category: string;
    title: string;
    link: string;
    delay?: string;
}

export const projectsOneData: ProjectDataType[] = [
    {
        id: 1,
        image: "/NewImgs/service-interiors.jpg",
        category: "Interior Refurbishment",
        title: "Agusta 109S Interior Refurbishment",
        link: "/project-details"
    },
    {
        id: 2,
        image: "/NewImgs/shutterstock_32619811-1024x671.jpg",
        category: "Support Services",
        title: "AeroChamp Onboard Cabin Interior Cleaning Kit",
        link: "/project-details"
    },
    {
        id: 3,
        image: "/NewImgs/hero-aerospace.jpg",
        category: "Maintenance",
        title: "Aircraft Exterior Painting",
        link: "/project-details"
    },
    {
        id: 4,
        image: "/NewImgs/engineering-video-poster-BKYZAJR2.jpg",
        category: "Repair Solutions",
        title: "Insitu Repair of Galley and Cabin",
        link: "/project-details"
    },
    {
        id: 5,
        image: "/NewImgs/virginia-duran-blog_-amazing-aircraft-interior-design-bmw-2.jpg",
        category: "Detailing",
        title: "Exterior Detailing of Lineage 1000",
        link: "/project-details"
    },
];

