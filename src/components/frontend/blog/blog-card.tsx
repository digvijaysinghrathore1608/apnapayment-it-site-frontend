import Link from "next/link";

export default function BlogCard({ blog }: any) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="border border-black/10 p-4 rounded-xl"
    >
      <img
        src={blog.banner}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-4">{blog.title}</h2>
      <p className="text-gray-400 mt-2 text-sm">{blog.short}</p>

      <div className="mt-3 flex gap-2 flex-wrap">
        {blog.tags.map((tag: any, i: number) => (
          <span
            key={i}
            className="text-xs bg-blue-600/20 border border-blue-600/30 px-2 py-1 rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
