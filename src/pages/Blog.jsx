import { Link } from "react-router-dom";
import { posts } from "../data/posts.js";

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function Blog() {
  return (
    <div className="wrap page">
      <h1>Blog</h1>
      <p className="lead">What I am learning and thinking about.</p>

      {posts.length === 0 && <p>No posts yet. Add one in src/data/posts.js.</p>}

      <ul className="postlist">
        {posts.map((p) => (
          <li key={p.slug}>
            {p.link ? (
              <a href={p.link} target="_blank" rel="noreferrer">
                <h2>{p.title}</h2>
                <p className="meta">
                  {formatDate(p.date)}, opens on {p.source || "another site"}
                </p>
                <p>{p.summary}</p>
              </a>
            ) : (
              <Link to={`/blog/${p.slug}`}>
                <h2>{p.title}</h2>
                <p className="meta">{formatDate(p.date)}</p>
                <p>{p.summary}</p>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
