import { Container } from "@/components/ui/Container";
import { getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="pt-32 pb-20 min-h-screen">
            <Container>
                <Link href="/blog" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
                </Link>

                <header className="mb-12 max-w-3xl mx-auto text-center">
                    <div className="flex justify-center gap-2 mb-4">
                        {post.frontmatter.tags?.map((tag) => (
                            <span key={tag} className="text-xs font-semibold tracking-wider text-brand-500 uppercase border border-brand-500/20 px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">
                        {post.frontmatter.title}
                    </h1>
                    <time className="text-neutral-500">{post.frontmatter.date}</time>
                </header>

                <div className="prose prose-invert prose-lg mx-auto prose-headings:font-medium prose-a:text-brand-500 hover:prose-a:text-brand-400">
                    <MDXRemote source={post.content} />
                </div>
            </Container>
        </article>
    );
}
