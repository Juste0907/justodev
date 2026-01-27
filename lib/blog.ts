import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
    slug: string;
    frontmatter: {
        title: string;
        description: string;
        date: string;
        tags?: string[];
        [key: string]: any;
    };
    content: string;
}

export function getAllPosts(): BlogPost[] {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const folders = fs.readdirSync(postsDirectory);

    const posts = folders.map((folder) => {
        const fullPath = path.join(postsDirectory, folder, "index.mdx");

        // Check if index.mdx exists (in case of other files in folder)
        if (!fs.existsSync(fullPath)) return null;

        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug: folder,
            frontmatter: data as BlogPost["frontmatter"],
            content,
        };
    }).filter((post): post is BlogPost => post !== null);

    // Sort posts by date
    return posts.sort((a, b) => {
        if (a.frontmatter.date < b.frontmatter.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
    const fullPath = path.join(postsDirectory, slug, "index.mdx");

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        frontmatter: data as BlogPost["frontmatter"],
        content,
    };
}
