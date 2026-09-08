'use client';

import { categories } from '@/lib/menu';
import type { MenuItem } from '@/lib/types';

interface Props {
  t: Record<string, string>;
  addedId: string | null;
  addToCart: (id: string, itemName: string, price: number) => void;
}

export default function MenuSection({ t, addedId, addToCart }: Props) {
  const renderCard = (item: MenuItem) => {
    const itemName = item.nameKey ? t[item.nameKey] : (item.name ?? '');
    const itemDesc = item.descKey ? t[item.descKey] : '';
    const added = addedId === item.id;

    return (
      <div className="menu-card" key={item.id}>
        <div className="menu-card-image">
          {item.special ? (
            <i className="fas fa-box-open" style={{ color: 'white', fontSize: '3rem' }}></i>
          ) : item.image ? (
            <img
              src={item.image}
              alt={itemName}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
            />
          ) : (
            <span style={{ fontSize: '3rem' }}>{item.emoji}</span>
          )}
          {item.badge && <span className="menu-badge">{t.badge_popular}</span>}
        </div>
        <div className="menu-card-content">
          <h4 className="menu-card-title">{itemName}</h4>
          {itemDesc && <p className="menu-card-desc">{itemDesc}</p>}
          <div className="menu-card-footer">
            <span className="menu-card-price">{item.price} DHS</span>
            <button
              className={`btn btn-primary add-to-cart-btn ${added ? 'added' : ''}`}
              onClick={() => addToCart(item.id, itemName, item.price)}
            >
              <i className={added ? 'fas fa-check' : 'fas fa-plus'}></i>
              <span>{added ? 'Ajouté' : 'Ajouter'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="menu">
      <div className="section-header animate">
        <span className="section-tag">{t.menu_tag}</span>
        <h2 className="section-title">{t.menu_title}</h2>
        <p className="section-subtitle">{t.menu_subtitle}</p>
      </div>

      {categories.map((cat) => (
        <div className="menu-category animate" key={cat.id}>
          <div className="category-header">
            <div className="category-icon"><i className={cat.icon}></i></div>
            <h3 className="category-title">{t[cat.titleKey]}</h3>
          </div>
          <div className="menu-grid">{cat.items.map(renderCard)}</div>
        </div>
      ))}

      <div className="formules-bar animate">
        <span className="formules-title">{t.formules_title}</span>
        <div className="formule-item">
          <i className="fas fa-check-circle"></i>
          <span>{t.formule1}</span>
          <span className="formule-price">+15 DHS</span>
        </div>
        <div className="formule-item">
          <i className="fas fa-check-circle"></i>
          <span>{t.formule2}</span>
          <span className="formule-price">+5 DHS</span>
        </div>
        <div className="formule-item">
          <i className="fas fa-check-circle"></i>
          <span>{t.formule3}</span>
          <span className="formule-price">+3 DHS</span>
        </div>
      </div>
    </section>
  );
}