import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../data/profile.js";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "coding", label: "MyCodes" },
  { id: "documents", label: "Certificates" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function go(id) {
    setOpen(false);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView();
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  }

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <button className="brand" onClick={() => go("about")}>
          {profile.name}
        </button>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="main-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav aria-label="Main" className={"menu" + (open ? " open" : "")}>
          <ul className="links" id="main-links">
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
                onClick={() => setOpen(false)}
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