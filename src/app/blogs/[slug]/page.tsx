import BlogDetails from "@/components/frontend/blog/blog-details";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";

// -------- DYNAMIC METADATA ----------
export async function generateMetadata({ params }: any) {
    const resolvedParams = await params;
    const blog = blogs.find((post) => post.slug === resolvedParams.slug);

    if (!blog) {
        return { title: "Blog Not Found" };
    }

    return {
        title: `${blog.title} | Apna IT Solutions`,
        description: blog.short,
    };
}

export default async function BlogDetailsPage({ params }: any) {
    const resolvedParams = await params;
    const blog = blogs.find((post) => post.slug === resolvedParams.slug);

    if (!blog) return notFound();

    return (
        <main className="flex w-full flex-col items-center justify-between pt-5 bg-white dark:bg-black sm:items-start space-y-5">
            {/* Hero Section */}
            <div className="relative text-white flex w-full max-w-full flex-col items-center justify-center bg-neutral-950 py-20 sm:py-25 px-2 sm:px-16">
                <h1 className="text-4xl font-bold">Blog</h1>
                <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-center">
                    {blog.short}
                </p>
                <BackgroundBeams />
            </div>
            <section className="w-full pt-5 py-10 px-2 sm:px-16">
                <div className="max-w-4xl mx-auto px-4">
                    <BlogDetails blog={blog} />
                </div>
            </section>
        </main>
    );
}