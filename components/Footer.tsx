export default function Footer({ t }: { t: Record<string, string> }) {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <span className="footer-brand"><i className="fas fa-fire"></i> MIYO</span>
          <p className="footer-desc">{t.footer_desc}</p>
          <div className="social-links" style={{ marginTop: '1.5rem' }}>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
        <div>
          <h4 className="footer-title">{t.footer_menu}</h4>
          <ul className="footer-links">
            <li><a href="#menu">{t.nav_mac}</a></li>
            <li><a href="#menu">{t.nav_burgers}</a></li>
            <li><a href="#menu">{t.nav_sandwich}</a></li>
            <li><a href="#menu">{t.nav_lunch}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">{t.footer_links}</h4>
          <ul className="footer-links">
            <li><a href="#home">{t.nav_home}</a></li>
            <li><a href="#about">{t.nav_about}</a></li>
            <li><a href="#reviews">{t.nav_reviews}</a></li>
            <li><a href="#order">{t.nav_order}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">{t.footer_contact}</h4>
          <ul className="footer-links">
            <li><a href="#order">WhatsApp</a></li>
            <li><a href="#">Glovo</a></li>
            <li><span>Rabat, Maroc</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t.footer_copy}</span>
        <span>
          <span dangerouslySetInnerHTML={{ __html: t.footer_made.replace('❤', '<i class="fas fa-heart" style="color: var(--primary);"></i>') }}></span>
        </span>
      </div>
    </footer>
  );
}
