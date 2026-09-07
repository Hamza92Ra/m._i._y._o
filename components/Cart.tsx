'use client';

import type { CartItem } from '@/lib/types';

interface Props {
  open: boolean;
  onToggle: () => void;
  cart: CartItem[];
  changeQty: (id: string, delta: number) => void;
  total: number;
  count: number;
  t: Record<string, string>;
  name: string;
  setName: (v: string) => void;
  address: string;
  setAddress: (v: string) => void;
  sendOrder: () => void;
}

export default function Cart({ open, onToggle, cart, changeQty, total, count, t, name, setName, address, setAddress, sendOrder }: Props) {
  return (
    <>
      <button className="cart-fab" onClick={onToggle}>
        <i className="fas fa-shopping-bag"></i>
        <span className="cart-count" style={{ display: count > 0 ? 'flex' : 'none' }}>{count}</span>
      </button>

      <div
        className={open ? 'cart-modal open' : 'cart-modal'}
        onClick={(e) => { if (e.target === e.currentTarget) onToggle(); }}
      >
        <div className="cart-content">
          <div className="cart-header">
            <h3>{t.cart_title}</h3>
            <button className="cart-close" onClick={onToggle}><i className="fas fa-times"></i></button>
          </div>
          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="cart-empty">
                <i className="fas fa-shopping-basket"></i>
                <p>{t.cart_empty}</p>
              </div>
            ) : (
              cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span className="cart-item-price">{item.price} DHS</span>
                  </div>
                  <div className="cart-item-qty">
                    <button className="qty-btn" onClick={() => changeQty(item.id, -1)}><i className="fas fa-minus"></i></button>
                    <span>{item.qty}</span>
                    <button className="qty-btn" onClick={() => changeQty(item.id, 1)}><i className="fas fa-plus"></i></button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="cart-footer">
            <div className="cart-total">
              <span>{t.cart_total}</span>
              <span className="cart-total-price">{total} DHS</span>
            </div>
            <input
              type="text"
              className="cart-input"
              placeholder={t.placeholder_name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="cart-input"
              placeholder={t.placeholder_address}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button className="btn btn-primary cart-order-btn" onClick={sendOrder} disabled={cart.length === 0}>
              <i className="fab fa-whatsapp"></i>
              <span>{t.btn_send}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
