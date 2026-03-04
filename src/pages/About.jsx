import "./About.css";

const skills = {
  "Programming Languages 💻": ["C++", "C#", "PHP", "JavaScript", "Dart (Flutter)", "Java"],
  "Development 🚀":           ["React.js", "Laravel", "Spring Boot", "Flutter", "RESTful API", "jQuery", "HTML/CSS"],
  "Database Management 🗄️":  ["MySQL", "Oracle", "SQL Server", "PostgreSQL"],
  "Tools & Version Control 🔧": ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
  "Other Skills ✨":           ["2FA Implementation", "Report Generation", "DB Query Optimization", "UI/UX Design"],
};

const education = [
  { year: "2017 – 2019", title: "Secondary School", place: "Beong Secondary School" },
  { year: "2021 – 2023", title: "High School",       place: "Baray High School" },
  { year: "2023 – 2024", title: "Intensive Computer Course", place: "Computer Institute" },
  { year: "2024 – Present", title: "Software Engineering (Junior)", place: "BELTEI International University — Faculty of IT" },
];

const softSkills = ["Responsible", "Teamwork", "Time Management", "Leadership"];

export default function About() {
  return (
    <main className="about-page">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <section className="about-hero">
        <span className="tag tag-blue">about me</span>
        <h1 className="about-title">
          The <span className="gradient-text">Story</span> So Far
        </h1>

        <div className="about-grid">
          {/* Avatar */}
          <div className="avatar-col">
            <div className="avatar-wrap glass">
              <div className="avatar-img">
                <span className="avatar-emoji">🧑‍💻</span>
              </div>
              <div className="avatar-status">
                <span className="badge-dot" />
                Available for Work
              </div>
              <div className="avatar-info">
                <div className="info-row"><span className="info-label">📍</span><span>Phnom Penh, Cambodia</span></div>
                <div className="info-row"><span className="info-label">📞</span><span>097 4303 668</span></div>
                <div className="info-row"><span className="info-label">✉️</span><span>natophorn@gmail.com</span></div>
                <div className="info-row"><span className="info-label">🌐</span><span>Khmer &amp; English</span></div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="bio-col">
            <h2 className="bio-name">
              Hey, I'm <span className="gradient-text">Horm Sophorn</span> 👋
            </h2>
            <p className="bio-text">
              Motivated Full-Stack Developer and Computer Instructor with expertise in
              modern web technologies. I'm skilled in building scalable applications,
              solving complex problems, and delivering clear technical guidance.
            </p>
            <p className="bio-text">
              I hold a strong foundation in both front-end and back-end development —
              from React UIs to Laravel APIs, Spring Boot services, and Flutter mobile apps.
              My focus is always on clean architecture, performance, and real-world impact.
            </p>
            <p className="bio-text">
              Currently a junior Software Engineering student at <strong>BELTEI International University</strong>,
              while simultaneously gaining hands-on industry experience as a Full-Stack Developer
              at <strong>Wintech Software Development</strong>.
            </p>

            {/* Personal Info */}
            <div className="personal-grid">
              {[
                { label: "Gender",       value: "Male" },
                { label: "Nationality",  value: "Khmer" },
                { label: "Birthplace",   value: "Kampong Thom Province" },
                { label: "Date of Birth",value: "March 22nd, 2006" },
                { label: "Marital",      value: "Single" },
                { label: "Health",       value: "Good" },
              ].map(({ label, value }) => (
                <div key={label} className="personal-item glass">
                  <span className="personal-label">{label}</span>
                  <span className="personal-value">{value}</span>
                </div>
              ))}
            </div>

            <div className="bio-cta">
              <a href="/cv" className="btn btn-primary">View Full CV 📄</a>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="soft-skills-section">
        <div className="section-label"><span className="tag tag-cyan">soft skills</span></div>
        <h2 className="section-title about-section-title">What I Bring to the <span className="gradient-text">Table</span></h2>
        <div className="soft-skills-row">
          {softSkills.map(s => (
            <div key={s} className="soft-skill-card glass">
              <span className="soft-check">✔</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="skills-section">
        <div className="section-label"><span className="tag tag-indigo">tech stack</span></div>
        <h2 className="section-title about-section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="skill-group glass">
              <h3 className="skill-cat">{cat}</h3>
              <div className="skill-pills">
                {items.map(skill => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="exp-section">
        <div className="section-label"><span className="tag tag-violet">education</span></div>
        <h2 className="section-title about-section-title">
          Academic <span className="gradient-text">Journey</span>
        </h2>
        <div className="timeline">
          {education.map(({ year, title, place }) => (
            <div key={year} className="timeline-item glass">
              <div className="timeline-year">{year}</div>
              <div className="timeline-content">
                <h4 className="timeline-role">{title}</h4>
                <p className="timeline-desc">{place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="exp-section">
        <div className="section-label"><span className="tag tag-blue">experience</span></div>
        <h2 className="section-title about-section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="timeline">
          {[
            { year: "1 Year",    role: "Full-Stack Developer",   place: "Wintech Software Development",  desc: "Built and maintained enterprise systems including UMS, hospital and POS platforms." },
            { year: "3 Months",  role: "Computer Instructor",    place: "BELTEI International University", desc: "Taught computer fundamentals and programming concepts to university-level students." },
            { year: "3 Months",  role: "English Teacher",        place: "HIL English Language Center",   desc: "Served as an English instructor for students in language programs." },
          ].map(({ year, role, place, desc }) => (
            <div key={role} className="timeline-item glass">
              <div className="timeline-year">{year}</div>
              <div className="timeline-content">
                <h4 className="timeline-role">{role} <span className="timeline-place">@ {place}</span></h4>
                <p className="timeline-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
