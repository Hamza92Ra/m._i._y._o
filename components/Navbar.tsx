'use client';

import type { Lang } from '@/lib/types';

interface Props {
  t: Record<string, string>;
  lang: Lang;
  setLang: (l: Lang) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrolled: boolean;
  active: string;
}

const LINKS = [
  { href: '#home', key: 'nav_home', id: 'home' },
  { href: '#about', key: 'nav_about', id: 'about' },
  { href: '#menu', key: 'nav_menu', id: 'menu' },
  { href: '#reviews', key: 'nav_reviews', id: 'reviews' },
  { href: '#order', key: 'nav_order', id: 'order' },
];

export default function Navbar({ t, lang, setLang, menuOpen, setMenuOpen, scrolled, active }: Props) {
  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <a href="#home" className="brand"><i className="fas fa-fire"></i> MIYO</a>
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'} id="navLinks">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                className={active === l.id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {t[l.key]}
              </a>
            </li>
          ))}
          <li>
            <div className="lang-switcher">
              {(['fr', 'en', 'ar'] as Lang[]).map((l) => (
                <button
                  key={l}
                  className={lang === l ? 'lang-btn active' : 'lang-btn'}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </li>
        </ul>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
