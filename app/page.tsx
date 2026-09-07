'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';
import type { Lang, CartItem } from '@/lib/types';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import Reviews from '@/components/Reviews';
import OrderSection from '@/components/OrderSection';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<Lang>('fr');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [loading, setLoading] = useState(true);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const t = translations[lang];

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Language / direction
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Navbar scroll + active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = '';
      document.querySelectorAll('section[id]').forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 200) {
          current = s.getAttribute('id') || '';
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToCart = (id: string, itemName: string, price: number) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id, name: itemName, price, qty: 1 }];
    });
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1000);
  };

  const changeQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = cart.reduce((sum, i) => sum + i.qty, 0);

  const sendOrder = () => {
    if (cart.length === 0) return;
    const customer = name.trim() || 'Client';
    const addr = address.trim() || 'À préciser';
    let orderTotal = 0;
    const itemsText = cart
      .map((item) => {
        orderTotal += item.price * item.qty;
        return `- ${item.name} x${item.qty} = ${item.price * item.qty} DHS`;
      })
      .join('\n');
    const message = `🍔 *Commande MIYO* 🍔\n\n👤 *Nom:* ${customer}\n📍 *Adresse:* ${addr}\n\n📋 *Articles:*\n${itemsText}\n\n💰 *Total:* ${orderTotal} DHS\n\nMerci !`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <Loader hidden={!loading} />
      <Navbar
        t={t}
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
        active={active}
      />
      <Hero t={t} />
      <About t={t} />
      <MenuSection t={t} addedId={addedId} addToCart={addToCart} />
      <Reviews t={t} />
      <OrderSection t={t} />
      <Cart
        open={cartOpen}
        onToggle={() => setCartOpen(!cartOpen)}
        cart={cart}
        changeQty={changeQty}
        total={total}
        count={count}
        t={t}
        name={name}
        setName={setName}
        address={address}
        setAddress={setAddress}
        sendOrder={sendOrder}
      />
      <Footer t={t} />
    </>
  );
}
