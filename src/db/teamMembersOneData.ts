export interface TeamMemberDataType {
    id: number;
    role: string;
    name: string;
    description: string;
    image: string;
    socialLinks: {
        icon: string;
        link: string;
    }[];
    delay: string;
}

export const teamMembersOneData: TeamMemberDataType[] = [
    {
        id: 1,
        role: "Founder & CEO",
        name: "Dr. Praveen Srivastava",
        description: "Leading AeroChamp with extensive experience in business aviation across Middle East and Asia.",
        image: "/img/team/hover-1.png",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: 'https://www.facebook.com/aerochamp'
            },
            {
                icon: 'fab fa-linkedin-in',
                link: 'https://www.linkedin.com/company/aerochamp-aviation-intl-pvt-ltd'
            },
        ],
        delay: ".3"
    },
    {
        id: 2,
        role: "Director - Engineering",
        name: "Manish Bhiwandkar",
        description: "Overseeing engineering excellence and technical innovation at AeroChamp.",
        image: "/img/team/hover-1.png",
        socialLinks: [

            {
                icon: 'fab fa-linkedin-in',
                link: 'https://www.linkedin.com/company/aerochamp-aviation-intl-pvt-ltd'
            },
        ],
        delay: ".5"
    },
    {
        id: 3,
        role: "Director - Operations",
        name: "Vishal Jadhav",
        description: "Managing global operations and ensuring seamless project delivery.",
        image: "/img/team/hover-1.png",
        socialLinks: [
            {
                icon: 'fab fa-linkedin-in',
                link: 'https://www.linkedin.com/company/aerochamp-aviation-intl-pvt-ltd'
            },
        ],
        delay: ".7"
    },
    {
        id: 4,
        role: "Director - Finance",
        name: "Nitin Sawant",
        description: "Driving financial strategy and sustainable growth for the organization.",
        image: "/img/team/hover-1.png",
        socialLinks: [
            {
                icon: 'fab fa-linkedin-in',
                link: 'https://www.linkedin.com/company/aerochamp-aviation-intl-pvt-ltd'
            },
        ],
        delay: ".9"
    }
];
