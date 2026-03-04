import "./CV.css";

export default function CV() {
  return (
    <main className="cv-page">
      <div className="orb orb-1" />

      {/* Action bar */}
      <div className="cv-topbar">
        <h1 className="cv-page-title">
          My <span className="gradient-text">Curriculum Vitae</span>
        </h1>
        <a
          className="btn btn-primary"
          href="/cv.pdf"
          download="Horm_Sophorn_CV.pdf"
        >
          ⬇️ Download CV (PDF)
        </a>
      </div>

      <div className="cv-doc glass">
        {/* Header */}
        <header className="cv-header">
          <div className="cv-avatar">HS</div>
          <div className="cv-header-info">
            <h1 className="cv-name">HORM SOPHORN</h1>
            <p className="cv-headline">Full-Stack Developer &amp; Computer Instructor</p>
            <div className="cv-contacts">
              <span><a href="tel:097 4303 668">📞 097 4303 668</a></span>
              <span><a href="mailto:natophorn@gmail.com">✉️ natophorn@gmail.com</a></span>
              <span>📍 Sangkat Tonle Bassac, Khan Chamkarmon, Phnom Penh</span>
            </div>
          </div>
        </header>

        <div className="cv-body">
          {/* Left Column */}
          <aside className="cv-left">
            {/* Personal Info */}
            <section className="cv-section">
              <h2 className="cv-section-title">Personal Info</h2>
              <div className="cv-info-list">
                {[
                  ["Gender",        "Male"],
                  ["Nationality",   "Khmer"],
                  ["Birthplace",    "Kampong Thom Province"],
                  ["Date of Birth", "March 22nd, 2006"],
                  ["Marital",       "Single"],
                  ["Health",        "Good"],
                ].map(([k, v]) => (
                  <div key={k} className="cv-info-item">
                    <span className="cv-info-key">{k}</span>
                    <span className="cv-info-val">{v}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="cv-section">
              <h2 className="cv-section-title">Languages</h2>
              <ul className="cv-list">
                <li>Khmer — <strong>Native</strong></li>
                <li>English — <strong>Very Good</strong></li>
              </ul>
            </section>

            {/* Soft Skills */}
            <section className="cv-section">
              <h2 className="cv-section-title">Soft Skills</h2>
              <ul className="cv-list">
                <li>✔ Responsible</li>
                <li>✔ Teamwork</li>
                <li>✔ Time Management</li>
                <li>✔ Leadership</li>
              </ul>
            </section>

            {/* Technical Skills */}
            <section className="cv-section">
              <h2 className="cv-section-title">Technical Skills</h2>
              <div className="cv-skill-group">
                <p className="cv-skill-label">Programming Languages</p>
                <p className="cv-skill-items">C++, C#, PHP, JavaScript, Dart, Java</p>
              </div>
              <div className="cv-skill-group">
                <p className="cv-skill-label">Development</p>
                <p className="cv-skill-items">React.js, Laravel, Spring Boot, Flutter, RESTful API, jQuery</p>
              </div>
              <div className="cv-skill-group">
                <p className="cv-skill-label">Database Management</p>
                <p className="cv-skill-items">MySQL, Oracle, SQL Server, PostgreSQL</p>
              </div>
              <div className="cv-skill-group">
                <p className="cv-skill-label">Tools &amp; Version Control</p>
                <p className="cv-skill-items">Git, GitHub, VS Code, IntelliJ IDEA</p>
              </div>
              <div className="cv-skill-group">
                <p className="cv-skill-label">Other Skills</p>
                <p className="cv-skill-items">2FA, Report Generation, DB Optimization, UI/UX Design</p>
              </div>
            </section>
          </aside>

          {/* Right Column */}
          <div className="cv-right">
            {/* Profile */}
            <section className="cv-section">
              <h2 className="cv-section-title">Profile</h2>
              <p className="cv-para">
                Motivated Full-Stack Developer and Computer Instructor with expertise in modern web
                technologies. Skilled in building scalable applications, solving complex problems,
                and delivering clear technical guidance. Passionate about innovation and continuous growth.
              </p>
            </section>

            {/* Education */}
            <section className="cv-section">
              <h2 className="cv-section-title">Education</h2>
              <div className="cv-timeline">
                {[
                  { period: "2017 – 2019",    desc: "Studied at Beong Secondary School" },
                  { period: "2021 – 2023",    desc: "Studied at Baray High School" },
                  { period: "2023 – 2024",    desc: "Finished Intensive Computer Course" },
                  { period: "2024 – Present", desc: "Junior Student, Software Engineering — Faculty of IT, BELTEI International University" },
                ].map(({ period, desc }) => (
                  <div key={period} className="cv-tl-item">
                    <div className="cv-tl-dot" />
                    <div>
                      <span className="cv-tl-period">{period}</span>
                      <p className="cv-tl-desc">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="cv-section">
              <h2 className="cv-section-title">Work Experience</h2>
              <div className="cv-timeline">
                {[
                  { period: "1 Year",   role: "Full-Stack Developer",   place: "Wintech Software Development" },
                  { period: "3 Months", role: "Computer Instructor",    place: "BELTEI International University" },
                  { period: "3 Months", role: "Served English Teacher", place: "HIL English Language Center" },
                ].map(({ period, role, place }) => (
                  <div key={role} className="cv-tl-item">
                    <div className="cv-tl-dot" />
                    <div>
                      <span className="cv-tl-period">{period}</span>
                      <p className="cv-tl-desc"><strong>{role}</strong> — {place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="cv-section">
              <h2 className="cv-section-title">Project Experiences</h2>
              <div className="cv-projects">
                {[
                  { name: "C++ Bank System",              tech: "C++",                           note: "Lead Team to Success" },
                  { name: "Portfolio (Front-End)",         tech: "HTML, CSS, JavaScript",          note: "" },
                  { name: "Adventure (Front-End)",         tech: "React.js",                       note: "" },
                  { name: "Clothes Store",                 tech: "PHP + MySQL",                    note: "" },
                  { name: "Expense System",                tech: "Laravel + MySQL",                note: "" },
                  { name: "Skincare E-Commerce",           tech: "React + Laravel + MySQL",        note: "RESTful API" },
                  { name: "Stock & Inventory Management",  tech: "C# + MySQL",                     note: "" },
                  { name: "Smart City Management",         tech: "C# + SQL Server",                note: "" },
                  { name: "Hospital Website",              tech: "Laravel + jQuery + MySQL",       note: "2FA" },
                  { name: "Online Learning Website",       tech: "Laravel + MySQL",                note: "" },
                  { name: "POS System",                    tech: "Spring Boot + Oracle",           note: "" },
                  { name: "UMS Management System",         tech: "Multi-module enterprise system", note: "Inventory, Library, Student" },
                  { name: "Online Learning Application",   tech: "Flutter + RESTful API",          note: "Mobile" },
                ].map(({ name, tech, note }) => (
                  <div key={name} className="cv-proj-item">
                    <div className="cv-proj-dot" />
                    <div>
                      <span className="cv-proj-name">{name}</span>
                      <span className="cv-proj-tech"> — {tech}{note ? ` (${note})` : ""}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
