import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "UMS Management System",
    desc: "Multi-module university management system: Inventory, Library, and Student modules. Generated reports, optimized database queries and resolved performance bugs.",
    tags: ["Multi-module", "Reports", "DB Optimization"],
    cat: "enterprise",
    emoji: "🏫",
    color: "var(--blue)",
    live: null, repo: null, starred: true,
  },
  {
    title: "Hospital Website (2)",
    desc: "Full hospital web system with 2-Factor Authentication, jQuery dynamic UI and complete patient management built in Laravel.",
    tags: ["Laravel", "jQuery", "2FA", "MySQL"],
    cat: "fullstack",
    emoji: "🏥",
    color: "var(--cyan)",
    live: null, repo: null, starred: true,
  },
  {
    title: "POS System",
    desc: "Point of Sale system with order management, inventory tracking and Oracle database backend powered by Spring Boot.",
    tags: ["Spring Boot", "Oracle", "Java"],
    cat: "enterprise",
    emoji: "🛒",
    color: "var(--indigo)",
    live: null, repo: null, starred: true,
  },
  {
    title: "Online Learning App",
    desc: "Cross-platform mobile learning application built with Flutter consuming a RESTful API backend for courses and progress tracking.",
    tags: ["Flutter", "RESTful API", "Mobile"],
    cat: "mobile",
    emoji: "📚",
    color: "var(--violet)",
    live: null, repo: null, starred: false,
  },
  {
    title: "Online Learning Website",
    desc: "Full-featured web learning platform with course management, user auth, and progress tracking built with Laravel and MySQL.",
    tags: ["Laravel", "MySQL", "PHP"],
    cat: "fullstack",
    emoji: "🎓",
    color: "var(--blue)",
    live: null, repo: null, starred: false,
  },
  {
    title: "Smart City Management",
    desc: "City resource and infrastructure management system built with C# WinForms and SQL Server for enterprise-level data handling.",
    tags: ["C#", "SQL Server", "WinForms"],
    cat: "enterprise",
    emoji: "🏙️",
    color: "var(--cyan)",
    live: null, repo: null, starred: false,
  },
  {
    title: "Stock & Inventory Management",
    desc: "Dual-purpose inventory and stock management desktop application with real-time stock updates and report generation.",
    tags: ["C#", "MySQL", "Desktop"],
    cat: "enterprise",
    emoji: "📦",
    color: "var(--indigo)",
    live: null, repo: null, starred: false,
  },
  {
    title: "Skincare E-Commerce",
    desc: "Full-stack skincare store with React frontend, Laravel REST API backend, and MySQL database with clean product CRUD.",
    tags: ["React", "Laravel", "MySQL", "RESTful API"],
    cat: "fullstack",
    emoji: "💄",
    color: "var(--violet)",
    live: null, repo: null, starred: false,
  },
  {
    title: "Expense Management System",
    desc: "Expense tracking system with category management, reporting dashboard and multi-user support built with Laravel.",
    tags: ["Laravel", "MySQL", "Dashboard"],
    cat: "fullstack",
    emoji: "💰",
    color: "var(--blue)",
    live: null, repo: null, starred: false,
  },
  {
    title: "Clothes Store",
    desc: "E-commerce platform for clothing with product listing, shopping cart, checkout flow and admin panel.",
    tags: ["PHP", "MySQL", "HTML/CSS"],
    cat: "fullstack",
    emoji: "👕",
    color: "var(--cyan)",
    live: null, repo: null, starred: false,
  },
  {
    title: "Adventure (Front-End)",
    desc: "Interactive adventure-themed front-end project showcasing dynamic UI components and React routing.",
    tags: ["React.js", "CSS", "JavaScript"],
    cat: "frontend",
    emoji: "🗺️",
    color: "var(--indigo)",
    live: null, repo: null, starred: false,
  },
  {
    title: "Bank System (C++)",
    desc: "Led a team to build a C++ console-based banking system with account management, transactions, and OOP principles.",
    tags: ["C++", "OOP", "Team Lead"],
    cat: "other",
    emoji: "🏦",
    color: "var(--violet)",
    live: null, repo: null, starred: false,
  },
];

const FILTERS = ["all", "fullstack", "enterprise", "mobile", "frontend", "other"];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? projects
    : projects.filter(p => p.cat === active);

  return (
    <main className="projects-page">
      <div className="orb orb-1" />

      <section className="projects-hero">
        <span className="tag tag-blue">my work</span>
        <h1 className="projects-title">
          Projects I've <span className="gradient-text">Built</span>
        </h1>
        <p className="projects-sub">
          A collection of real-world projects spanning enterprise systems, web apps,
          mobile applications, and desktop software. Every line ships with purpose.
        </p>
      </section>

      <div className="filter-bar">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn${active === f ? " active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <section className="projects-grid-wrap">
        <div className="projects-grid">
          {filtered.map(({ title, desc, tags, emoji, color, live, repo, starred }) => (
            <article
              key={title}
              className="project-card glass"
              style={{ "--accent": color }}
            >
              <div className="pc-top">
                <span className="pc-emoji">{emoji}</span>
                {starred && <span className="pc-star tag tag-blue">⭐ featured</span>}
              </div>
              <div className="pc-line" />
              <h3 className="pc-title">{title}</h3>
              <p className="pc-desc">{desc}</p>
              <div className="pc-tags">
                {tags.map(t => <span key={t} className="skill-pill">{t}</span>)}
              </div>
              {(live || repo) && (
                <div className="pc-actions">
                  {live && <a href={live} target="_blank" rel="noreferrer" className="btn btn-primary pc-btn">Live ↗</a>}
                  {repo && <a href={repo} target="_blank" rel="noreferrer" className="btn btn-outline pc-btn">GitHub</a>}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
