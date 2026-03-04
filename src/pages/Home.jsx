import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const ROLES = ["Full-Stack Developer", "Computer Instructor", "Problem Solver", "UI/UX Enthusiast"];

export default function Home() {
  const roleRef = useRef(null);

  useEffect(() => {
    let i = 0, j = 0, deleting = false, timeout;
    const tick = () => {
      const current = ROLES[i % ROLES.length];
      if (!deleting) {
        if (j <= current.length) {
          if (roleRef.current) roleRef.current.textContent = current.slice(0, j++);
          timeout = setTimeout(tick, 70);
        } else {
          deleting = true;
          timeout = setTimeout(tick, 2000);
        }
      } else {
        if (j >= 0) {
          if (roleRef.current) roleRef.current.textContent = current.slice(0, j--);
          timeout = setTimeout(tick, 38);
        } else {
          deleting = false; i++;
          timeout = setTimeout(tick, 320);
        }
      }
    };
    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="home">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <section className="bento-hero">

        {/* INTRO card — name + role + CTA */}
        <div className="bento-card bento-intro">
          <div className="hero-badge">
            <span className="badge-dot" /> open to opportunities
          </div>
          <h1 className="bento-name">
            <span className="bento-hi">Hi, I'm</span>
            <span>Horm <span className="gradient-text">Sophorn</span></span>
          </h1>
          <p className="bento-role">
            <span ref={roleRef} className="role-text" />
            <span className="cursor-blink">|</span>
          </p>
          <div className="bento-cta">
            <Link to="/projects" className="btn btn-primary">View Work 🚀</Link>
            <a href="/cv.pdf" download="Horm_Sophorn_CV.pdf" className="btn btn-outline">Download CV 📄</a>
          </div>
        </div>

        {/* PHOTO card */}
        <div className="bento-card bento-photo">
          <div className="photo-grid-bg" />
          <div className="photo-ring photo-ring-1" />
          <div className="photo-ring photo-ring-2" />
          <img src="/1.png" alt="Horm Sophorn" className="bento-img" />
          <span className="bento-photo-badge">Full-Stack Dev 💻</span>
          <span className="fp-sticker fp-s1">⚡</span>
          <span className="fp-sticker fp-s2">🔥</span>
          <span className="fp-sticker fp-s3">&lt;dev/&gt;</span>
        </div>

        {/* BIO card */}
        <div className="bento-card bento-bio">
          <span className="bio-quote">"</span>
          <span className="bento-eyebrow">👤 About me</span>
          <p className="bento-bio-text">
            Developer &amp; Instructor building scalable apps
            and teaching modern tech in Cambodia 🇰🇭
          </p>
        </div>

        {/* STAT cards */}
        <div className="bento-card bento-stat" style={{"--sc":"var(--blue)"}}>  
          <span className="bento-stat-n">12+</span>
          <span className="bento-stat-l">Projects</span>
        </div>
        <div className="bento-card bento-stat" style={{"--sc":"var(--cyan)"}}>
          <span className="bento-stat-n">3</span>
          <span className="bento-stat-l">Years Exp.</span>
        </div>
        <div className="bento-card bento-stat" style={{"--sc":"var(--indigo)"}}>
          <span className="bento-stat-n">5+</span>
          <span className="bento-stat-l">Tech Stacks</span>
        </div>

        {/* LOCATION card */}
        <div className="bento-card bento-location">
          <span className="bento-loc-pin">📍</span>
          <div>
            <p className="bento-loc-city">Phnom Penh</p>
            <p className="bento-loc-country">Cambodia 🇰🇭</p>
          </div>
        </div>

        {/* STATUS card */}
        <div className="bento-card bento-status">
          <span className="bento-status-dot" />
          <span>Available for freelance &amp; collaborations</span>
          <span className="status-spark">✦</span>
          <span className="status-spark s2">✦</span>
        </div>

      </section>

      {/* ===== TECH STACK SCROLL ===== */}
      <section className="techstack">
        <div className="techstack-header">
          <span className="techstack-eyebrow">⚡ My Arsenal</span>
          <h2 className="techstack-title">Technologies I <span className="gradient-text">Work With</span></h2>
        </div>

        {/* Row 1 — scrolls left */}
        {(() => {
          const row1 = [
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",          name: "React.js",    color: "#61DAFB" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",      name: "Laravel",     color: "#FF2D20" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",        name: "Spring Boot", color: "#6DB33F" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",      name: "Flutter",     color: "#54C5F8" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",name: "JavaScript",  color: "#F7DF1E" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",              name: "PHP",         color: "#8892BF" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",        name: "C#",          color: "#9B59B6" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",  name: "C++",         color: "#00599C" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",            name: "Dart",        color: "#0175C2" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",            name: "Java",        color: "#ED8B00" },
          ];
          const Pills = ({ hidden }) => row1.map((t, i) => (
            <div key={i} className="ts-pill" style={{ "--tc": t.color }} aria-hidden={hidden}>
              <img src={t.icon} alt={t.name} className="ts-icon" />
              <span className="ts-name">{t.name}</span>
            </div>
          ));
          return (
            <div className="ts-row ts-row--left">
              <div className="ts-slider">
                <div className="ts-track"><Pills /></div>
                <div className="ts-track" aria-hidden="true"><Pills hidden="true" /></div>
              </div>
            </div>
          );
        })()}

        {/* Row 2 — scrolls right */}
        {(() => {
          const row2 = [
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",           name: "MySQL",       color: "#4479A1" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",         name: "Oracle",      color: "#F80000" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", name: "SQL Server", color: "#CC2927" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", name: "PostgreSQL",  color: "#336791" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",            name: "HTML5",       color: "#E34F26" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",              name: "CSS3",        color: "#1572B6" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",   name: "Bootstrap",   color: "#7952B3" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",          name: "jQuery",      color: "#0769AD" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",                name: "Git",         color: "#F05032" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",          name: "GitHub",      color: "#9ca3af" },
          ];
          const Pills = ({ hidden }) => row2.map((t, i) => (
            <div key={i} className="ts-pill" style={{ "--tc": t.color }} aria-hidden={hidden}>
              <img src={t.icon} alt={t.name} className="ts-icon" />
              <span className="ts-name">{t.name}</span>
            </div>
          ));
          return (
            <div className="ts-row ts-row--right">
              <div className="ts-slider">
                <div className="ts-track"><Pills /></div>
                <div className="ts-track" aria-hidden="true"><Pills hidden="true" /></div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Featured */}
      <section className="featured">
        <div className="section-label">
          <span className="tag tag-blue">latest work</span>
        </div>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="feat-grid">
          {[
            {
              title: "UMS Management System",
              desc: "Developed and maintained Inventory, Library and Student modules. Generated reports, optimized queries and resolved performance bugs.",
              tags: ["Multi-module", "Reports", "DB Optimization"],
              color: "var(--blue)",
              emoji: "🏫",
            },
            {
              title: "Hospital Website",
              desc: "Full hospital web system with 2-factor authentication, jQuery dynamic UI and complete patient management.",
              tags: ["Laravel", "jQuery", "2FA", "MySQL"],
              color: "var(--cyan)",
              emoji: "🏥",
            },
            {
              title: "Online Learning App",
              desc: "Cross-platform learning application built with Flutter consuming a RESTful API backend.",
              tags: ["Flutter", "RESTful API", "Mobile"],
              color: "var(--indigo)",
              emoji: "📚",
            },
          ].map(({ title, desc, tags, color, emoji }) => (
            <div key={title} className="feat-card glass" style={{ "--accent": color }}>
              <div className="feat-emoji">{emoji}</div>
              <h3 className="feat-title">{title}</h3>
              <p className="feat-desc">{desc}</p>
              <div className="feat-tags">
                {tags.map(t => <span key={t} className="tag tag-cyan">{t}</span>)}
              </div>
              <div className="feat-line" />
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/projects" className="btn btn-outline">View All Projects →</Link>
        </div>
      </section>
    </main>
  );
}
