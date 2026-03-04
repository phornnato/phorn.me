import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/",         label: "home",     num: "01" },
  { to: "/about",    label: "about",    num: "02" },
  { to: "/projects", label: "projects", num: "03" },
  { to: "/cv",       label: "cv",       num: "04" },
  { to: "/contact",  label: "contact",  num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <NavLink to="/" className="navbar-logo">
        <span className="logo-bracket">&lt;</span>
        <span className="logo-text">Sophorn</span>
        <span className="logo-bracket">/&gt;</span>
      </NavLink>

      {/* Desktop nav */}
      <nav className="navbar-links">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            {label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-primary nav-cta">hire me 🚀</Link>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div className={`mobile-overlay${open ? " open" : ""}`} aria-hidden={!open}>
        {/* top bar inside overlay */}
        <div className="mob-top">
          <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Sophorn</span>
            <span className="logo-bracket">/&gt;</span>
          </NavLink>
          <button className="mob-close" onClick={() => setOpen(false)} aria-label="close menu">
            <span /><span />
          </button>
        </div>

        {/* numbered links */}
        <nav className="mob-nav">
          {links.map(({ to, label, num }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) => `mob-link${isActive ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              <span className="mob-num">{num}</span>
              <span className="mob-label">{label}</span>
              <span className="mob-arrow">→</span>
            </NavLink>
          ))}
        </nav>

        {/* bottom bar */}
        <div className="mob-bottom">
          <div className="mob-status">
            <span className="mob-status-dot" />
            <span>open to work</span>
          </div>
          <Link to="/contact" className="btn btn-primary mob-cta" onClick={() => setOpen(false)}>
            hire me 🚀
          </Link>
        </div>
      </div>

      {/* Hamburger */}
      <button
        className={`hamburger${open ? " open" : ""}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "close menu" : "open menu"}
      >
        <span /><span /><span />
      </button>
    </header>
  );
}
