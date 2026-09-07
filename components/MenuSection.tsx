'use client';

import { categories } from '@/lib/menu';
import type { MenuItem } from '@/lib/types';

interface Props {
  t: Record<string, string>;
  addedId: string | null;
  addToCart: (id: string, name: string, price: number) => void;
}

export default function MenuSection({ t, addedId, addToCart }: Props) {
  const renderCard = (item: MenuItem) => {
    const itemName = item.nameKey ? t[item.nameKey] : (item.name ?? '');
    const added = addedId === item.id;
    return (
      <div className={item.special ? 'menu-card special-card' : 'menu-card'} key={item.id} data-id={item.id}>
        <div className="menu-card-image">
          {item.special ? (
            <i className="fas fa-box-open" style={{ color: 'white' }}></i>
          ) : (
            item.emoji
          )}
        </div>
        {item.badge && <div className="menu-card-badge">{t.badge_popular}</div>}
        <div className="menu-card-body">
          <div className="menu-card-title">
            <span>{itemName}</span>
          </div>
          <p className="menu-card-desc">{t[item.descKey]}</p>
          {item.special && (
            <div className="special-details">
              <span className="special-tag"><i className="fas fa-burger"></i> <span>{t.lunch_burger}</span></span>
              <span className="special-tag"><i className="fas fa-bread-slice"></i> <span>{t.lunch_sandwich}</span></span>
              <span className="special-tag"><i className="fas fa-cookie-bite"></i> <span>{t.lunch_fries}</span></span>
              <span className="special-tag"><i className="fas fa-glass-water"></i> <span>{t.lunch_drink}</span></span>
            </div>
          )}
          <div className="menu-card-footer" style={item.special ? { marginTop: '1.5rem' } : undefined}>
            <div className="menu-price">{item.price} <span>DHS</span></div>
            <button
              className={added ? 'add-btn added' : 'add-btn'}
              onClick={() => addToCart(item.id, itemName, item.price)}
            >
              <i className={added ? 'fas fa-check' : 'fas fa-plus'}></i>
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
