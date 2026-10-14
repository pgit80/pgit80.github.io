import { Link, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../data/profile.js";

// To add or remove a nav item, edit this list. `id` must match a section id.
const sections = [
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "documents", label: "Certificates" },
  { id: "resume", label: "Resume" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function go(id) {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView();
    } else {
      // From the blog: go home, then Home scrolls to the section.
      navigate("/", { state: { scrollTo: id } });
    }
  }

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <button className="brand" onClick={() => go("about")}>
          {profile.name}
        </button>
        <nav aria-label="Main">
          <ul className="links">
            {sections.map((s) => (
              <li key={s.id}>
                <button className="navlink" onClick={() => go(s.id)}>
                  {s.label}
                </button>
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                className={"navlink" + (pathname.startsWith("/blog") ? " active" : "")}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
