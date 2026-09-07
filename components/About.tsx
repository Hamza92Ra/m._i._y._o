export default function About({ t }: { t: Record<string, string> }) {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-visual animate">
          <div className="about-visual-main">
            <i className="fas fa-fire" style={{ color: 'white', zIndex: 2, position: 'relative' }}></i>
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
