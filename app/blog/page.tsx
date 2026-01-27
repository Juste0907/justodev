import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getAllPosts } from "@/lib/blog";

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-4">Blog</h1>
                    <p className="text-neutral-400">Reflexions sur le design et le developpement.</p>
                </div>

                <div className="grid gap-8 max-w-3xl mx-auto">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="group block bg-neutral-900/50 p-8 rounded-3xl border border-white/5 hover:border-brand-500/30 transition-colors">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-sm text-brand-500 font-medium">{post.frontmatter.date}</span>
                                    {post.frontmatter.tags && (
                                        <div className="flex gap-2">
                                            {post.frontmatter.tags.map(tag => (
                                                <span key={tag} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-full text-neutral-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <h2 className="text-2xl font-medium text-white mb-2 group-hover:text-brand-500 transition-colors">{post.frontmatter.title}</h2>
                                <p className="text-neutral-400">{post.frontmatter.description}</p>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center text-neutral-500 py-12">
                            Aucun article pour le moment.
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}
