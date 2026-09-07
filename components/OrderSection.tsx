export default function OrderSection({ t }: { t: Record<string, string> }) {
  return (
    <section className="order-section" id="order">
      <div className="section-header animate">
        <span className="section-tag">{t.order_tag}</span>
        <h2 className="section-title">{t.order_title}</h2>
        <p className="section-subtitle">{t.order_subtitle}</p>
      </div>
      <div className="order-box animate">
        <h3>{t.order_box_title}</h3>
        <p>{t.order_box_desc}</p>
        <a href="https://wa.me/212675399243" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
          <span>{t.btn_whatsapp}</span>
        </a>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-location-dot"></i>
            <span>Rabat, Maroc</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-clock"></i>
            <span>{t.hours}</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-motorcycle"></i>
            <span>Glovo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
