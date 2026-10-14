import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts.js";
import { formatDate } from "./Blog.jsx";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug && p.content);

  if (!post) {
    return (
      <div className="wrap page">
        <h1>Post not found</h1>
        <p>
          <Link to="/blog">Back to all posts</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="wrap page">
      <p>
        <Link to="/blog">Back to all posts</Link>
      </p>
      <article className="post">
        <h1>{post.title}</h1>
        <p className="meta">{formatDate(post.date)}</p>
        {post.content.map((block, i) => {
          if (typeof block === "string") return <p key={i}>{block}</p>;
          if (block.heading) return <h2 key={i}>{block.heading}</h2>;
          if (block.code)
            return (
              <pre key={i}>
                <code>{block.code}</code>
              </pre>
            );
          return null;
        })}
      </article>
    </div>
  );
}
