'use client';

import { useEffect, useState } from 'react';

const IMAGES = [
    { src: '/menu/menu-1.png', alt: 'Mac & Cheese et Desserts' },
    { src: '/menu/menu-2.png', alt: 'Fried & Cheese' },
    { src: '/menu/menu-3.png', alt: 'Burgers' },
    { src: '/menu/menu-4.png', alt: 'Sandwichs' },
    { src: '/menu/menu-5.png', alt: 'Lunch Box' },
    { src: '/menu/menu-6.png', alt: 'Salades' },
];

export default function MenuGallery({ t }: { t: Record<string, string> }) {
    const [current, setCurrent] = useState<number | null>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (current === null) return;
            if (e.key === 'Escape') setCurrent(null);
            if (e.key === 'ArrowRight') setCurrent((current + 1) % IMAGES.length);
            if (e.key === 'ArrowLeft') setCurrent((current - 1 + IMAGES.length) % IMAGES.length);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [current]);

    return (
        <section id="carte">
            <div className="section-header animate">
                <span className="section-tag">{t.gallery_tag}</span>
                <h2 className="section-title">{t.gallery_title}</h2>
                <p className="section-subtitle">{t.gallery_subtitle}</p>
            </div>
            <div className="gallery-grid animate">
                {IMAGES.map((img, i) => (
                    <div className="gallery-item" key={img.src} onClick={() => setCurrent(i)}>
                        <img src={img.src} alt={img.alt} loading="lazy" />
                    </div>
                ))}
            </div>
            {current !== null && (
                <div className="lightbox" onClick={() => setCurrent(null)}>
                    <button className="lightbox-btn lightbox-close" onClick={() => setCurrent(null)}>
                        <i className="fas fa-times"></i>
                    </button>
                    <button
                        className="lightbox-btn lightbox-prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrent((current - 1 + IMAGES.length) % IMAGES.length);
                        }}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <img src={IMAGES[current].src} alt={IMAGES[current].alt} onClick={(e) => e.stopPropagation()} />
                    <button
                        className="lightbox-btn lightbox-next"
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrent((current + 1) % IMAGES.length);
                        }}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            )}
        </section>
    );
}
