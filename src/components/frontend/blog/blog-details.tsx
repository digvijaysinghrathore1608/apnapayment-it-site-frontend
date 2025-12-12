import ReactMarkdown from "react-markdown";

export default function BlogDetails({ blog }: any) {
  return (
    <div className="">
      <img
        src={blog.banner}
        className="w-full h-72 object-cover rounded-xl"
        alt={blog.title}
      />

      <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>

      <p className="text-gray-400 mt-2">{blog.date}</p>

      <div className="flex gap-3 mt-4 flex-wrap">
        {blog.tags.map((tag: any, i: number) => (
          <span
            key={i}
            className="text-xs bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>

      <article className="prose prose-invert mt-8 px-2">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>
    </div>
  );
}
