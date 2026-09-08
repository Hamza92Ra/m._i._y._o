'use client';

export default function About({ t }: { t: Record<string, string> }) {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-visual animate">
          <div className="about-visual-frame">
            <div className="about-visual-glow"></div>
            <div className="about-visual-inner">
              <img
                src="/images/about-burger.png"
                alt="MIYO Burger"
                className="about-burger-img"
              />
            </div>
            <div className="about-logo-badge">
              <img src="/images/miyo-logo.png" alt="MIYO" />
            </div>
            <div className="about-sparkle about-sparkle-1"><i className="fas fa-star"></i></div>
            <div className="about-sparkle about-sparkle-2"><i className="fas fa-star"></i></div>
            <div className="about-sparkle about-sparkle-3"><i className="fas fa-fire"></i></div>
          </div>
        </div>
        <div className="about-content animate">
          <span className="section-tag">{t.about_tag}</span>
          <h2>{t.about_title}</h2>
          <p>{t.about_p1}</p>
          <p>{t.about_p2}</p>
          <div className="features-list">
            <div className="feature-item">
              <i className="fas fa-leaf"></i>
              <span>{t.feat_fresh}</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-fire-burner"></i>
              <span>{t.feat_cooked}</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-motorcycle"></i>
              <span>{t.feat_delivery}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}