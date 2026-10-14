import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
