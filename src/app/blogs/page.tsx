import BlogCard from "@/components/frontend/blog/blog-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { blogs } from "@/data/blogs";

export const metadata = {
    title: "Blogs | Apna IT Solutions",
    description: "We provide IT services like Web Development, App Development, UI/UX, Cloud Deployment & Automation.",
};

export default function BlogPage() {
  return (
    <main className="flex w-full flex-col items-center justify-between pt-5 bg-white dark:bg-black sm:items-start space-y-5">
      {/* Hero Section */}
      <div className="relative text-white flex w-full max-w-full flex-col items-center justify-center bg-neutral-950 py-20 sm:py-25 px-2 sm:px-16">
        <h1 className="text-4xl font-bold">Our Blogs</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-center">
          We deliver modern digital solutions that help your business grow.
        </p>
        <BackgroundBeams />
      </div>
      <section className="w-full pt-5 py-10 px-2 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  );
}