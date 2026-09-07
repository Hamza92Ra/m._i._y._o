export default function Reviews({ t }: { t: Record<string, string> }) {
  const reviews = [
    { initials: 'AY', name: 'Ayoub Y.', meta: 'Glovo · Il y a 2 semaines', stars: 5, textKey: 'review1' },
    { initials: 'SM', name: 'Sarah M.', meta: 'Sur place · Il y a 1 mois', stars: 4.5, textKey: 'review2' },
    { initials: 'KB', name: 'Karim B.', meta: 'Glovo · Il y a 3 semaines', stars: 5, textKey: 'review3' },
  ];

  return (
    <section className="reviews" id="reviews">
      <div className="section-header animate">
        <span className="section-tag">{t.reviews_tag}</span>
        <h2 className="section-title">{t.reviews_title}</h2>
        <p className="section-subtitle">{t.reviews_subtitle}</p>
      </div>
      <div className="reviews-grid">
        {reviews.map((r) => (
          <div className="review-card animate" key={r.initials}>
            <div className="review-header">
              <div className="reviewer">
                <div className="reviewer-avatar">{r.initials}</div>
                <div>
                  <div className="reviewer-name">{r.name}</div>
                  <div className="reviewer-meta">{r.meta}</div>
                </div>
              </div>
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <i
                    key={s}
                    className={s <= Math.floor(r.stars) ? 'fas fa-star' : 'fas fa-star-half-alt'}
                  ></i>
                ))}
              </div>
            </div>
            <p className="review-text">{t[r.textKey]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
