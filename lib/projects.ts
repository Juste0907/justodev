export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    link: string;
    image?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "sophielaurent",
        title: "Sophie Laurent",
        description: "Portfolio de design et photographie.",
        category: "Portfolio",
        tags: ["React", "Design", "Photography"],
        link: "https://sophielaurent.netlify.app",
        featured: true,
    },
    {
        id: "sythia",
        title: "Sythia",
        description: "Plateforme digitale moderne.",
        category: "Web App",
        tags: ["Next.js", "UI/UX"],
        link: "https://sythia.netlify.app",
        featured: true,
    },
    {
        id: "sophialaurent",
        title: "Sophia Laurent",
        description: "Site vitrine personnel.",
        category: "Personal-Branding",
        tags: ["Web Design"],
        link: "https://sophialaurent.netlify.app",
        featured: false,
    },
    {
        id: "lumieree-studio",
        title: "Lumieree Studio",
        description: "Studio de création digitale.",
        category: "Agency",
        tags: ["Creative", "Studio"],
        link: "https://lumieree-studio.netlify.app",
        featured: true,
    },
];
