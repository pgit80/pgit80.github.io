import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Section from "../components/Section.jsx";
import {
  profile,
  experience,
  education,
  codingProfiles,
  documents,
  resume,
  socials,
} from "../data/profile.js";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  // Arrived from the blog page via a navbar link? Scroll to that section.
  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
    navigate(location.pathname, { replace: true, state: {} });
  }, [location, navigate]);

  return (
    <div className="wrap">
      {/* About */}
      <section id="about" className="hero">
        <img
          className="photo"
          src={profile.photo}
          alt={`Photo of ${profile.name}`}
        />
        <div>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="tagline">{profile.tagline}</p>
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Experience */}
      <Section id="experience" title="Work experience">
        <div className="timeline">
          {experience.map((e, i) => (
            <article className="item" key={i}>
              <h3>{e.role}</h3>
              <p className="meta">
                {e.company}, {e.period}
              </p>
              <ul>
                {e.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="timeline">
          {education.map((e, i) => (
            <article className="item" key={i}>
              <h3>{e.degree}</h3>
              <p className="meta">
                {e.school}, {e.period}
              </p>
              {e.details && <p>{e.details}</p>}
            </article>
          ))}
        </div>
      </Section>

      <Section id="coding" title="Coding profiles">
        <ul className="doclist">
          {codingProfiles.map((c, i) => (
            <li key={i}>
              <a href={c.url} target="_blank" rel="noreferrer">
                {c.icon && (
                <i className={c.icon} style={{ marginRight: "8px" }}></i>
              )}
                <strong>{c.label}</strong>
                {c.note && <span>{c.note}</span>}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Google Drive documents */}
      <Section id="documents" title="Certificates and marksheets">
        <ul className="doclist">
          {documents.map((d, i) => (
            <li key={i}>
              <a href={d.url} target="_blank" rel="noreferrer">
                <strong>{d.label}</strong>
                {d.note && <span>{d.note}</span>}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Resume */}
      <Section id="resume" title="Resume">
        <p className="actions">
          <a
            className="btn primary"
            href={resume.url}
            target="_blank"
            rel="noreferrer"
          >
            View resume
          </a>
          <a className="btn" href={resume.url} download>
            Download PDF
          </a>
        </p>
        {resume.embed && (
          <iframe
            className="resume-frame"
            src={resume.url}
            title="Resume"
            loading="lazy"
          />
        )}
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <ul className="contact">
          <li>
            Email:{" "}
            <a href={`mailto:${profile.contact.email}`}>
              {profile.contact.email}
            </a>
          </li>
          <li>Phone: {profile.contact.phone}</li>
          <li>Location: {profile.contact.location}</li>
          {profile.contact.links.map((l) => (
            <li key={l.label}>
              {l.label}:{" "}
              <a href={l.url} target="_blank" rel="noreferrer">
                {l.url.replace(/^https?:\/\/(www\.)?/, "")}
              </a>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="socials" title="Social Links">
        <ul className="doclist">
          {socials.map((s, i) => (
            <li key={i}>
              
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.icon && (
                <i className={s.icon} style={{ marginRight: "8px" }}></i>
              )}
                <strong>{s.label}</strong>
                {s.handle && <span>{s.handle}</span>}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
