'use client';

import { useEffect } from 'react';

export default function Hero({ t }: { t: Record<string, string> }) {
  useEffect(() => {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 15 + 's';
      p.style.animationDuration = 10 + Math.random() * 10 + 's';
      container.appendChild(p);
    }
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-particles" id="particles"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fas fa-star"></i>
          <span dangerouslySetInnerHTML={{ __html: t.hero_badge }}></span>
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: t.hero_title }}></h1>
        <p>{t.hero_subtitle}</p>
        <div className="hero-buttons">
          <a href="#menu" className="btn btn-primary">
            <i className="fas fa-utensils"></i>
            <span>{t.btn_menu}</span>
          </a>
          <a href="#order" className="btn btn-outline">
            <i className="fab fa-whatsapp"></i>
            <span>{t.btn_order}</span>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">16+</span>
            <span className="stat-label">{t.stat_reviews}</span>
          </div>
          <div className="stat">
            <span className="stat-value">4.3</span>
            <span className="stat-label">{t.stat_rating}</span>
          </div>
          <div className="stat">
            <span className="stat-value">23:30</span>
            <span className="stat-label">{t.stat_hours}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
