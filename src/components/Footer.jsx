import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-logo">
          <span style={{ color: "var(--blue2)" }}>&lt;</span>
          <strong>Sophorn</strong>
          <span style={{ color: "var(--blue2)" }}>/&gt;</span>
        </p>
        <p className="footer-copy">
          Crafted with <span className="heart">♥</span> by Horm Sophorn — {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a href="https://t.me/natophorn" target="_blank" rel="noreferrer">telegram</a>
          <a href="mailto:natophorn@gmail.com">email</a>
          <a href="/cv">cv</a>
        </div>
      </div>
    </footer>
  );
}
