export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    year: string;
    link: string;
    tags: string[];
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "sophie-laurent",
        title: "Sophie Laurent Architecture",
        description: "Conception d'un portfolio minimaliste pour une architecte d'intérieur. Focus sur la mise en valeur visuelle des projets et une navigation fluide.",
        category: "UI/UX Design",
        image: "/images/projects/project1.jpg",
        year: "2024",
        link: "https://sophielaurent.netlify.app",
        tags: ["UI Design", "Minimalisme", "Portfolio"],
        featured: true
    },
    {
        id: "synthia",
        title: "Synthia AI Platform",
        description: "Interface SaaS pour une plateforme d'intelligence artificielle. Travail approfondi sur la hiérarchie visuelle et l'accessibilité des données complexes.",
        category: "SaaS Product Design",
        image: "/images/projects/project2.jpg",
        year: "2023",
        link: "https://sythia.netlify.app",
        tags: ["SaaS", "Dashboard", "Dark Mode"],
        featured: true
    },
    {
        id: "lumiere-studio",
        title: "Lumière Studio",
        description: "Site e-commerce immersif pour une marque de luminaires haut de gamme. Optimisation du tunnel d'achat et animations scroll-based.",
        category: "E-commerce",
        image: "/images/projects/project3.jpg",
        year: "2023",
        link: "https://lumieree-studio.netlify.app",
        tags: ["E-commerce", "Conversion", "Animation"],
        featured: true
    },
    {
        id: "sophia-laurent",
        title: "Sophia Laurent Photography",
        description: "Galerie digitale interactive pour une photographe de mode. Expérience utilisateur centrée sur l'image et le storytelling visuel.",
        category: "Art Direction",
        image: "/images/projects/project4.jpg",
        year: "2023",
        link: "https://sophialaurent.netlify.app",
        tags: ["Portfolio", "Interaction", "Gallery"],
        featured: false
    }
];
