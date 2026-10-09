'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState, useEffect} from 'react';
import {Menu, X, MapPin, Phone, Clock, Pause, Play, BookOpen, Maximize2, ChevronLeft, ChevronRight} from 'lucide-react';
import {products, stores} from './data';

export const ZOMATO_ORDER_URL = 'https://www.zomato.com/ncr/cookie-pookie-rohini-new-delhi/order';

export function BrandLogo(){
  return (
    <span className="brand-logo">
      <img src="/assets/cookiepookie-logo.png" alt="CookiePookie" width="2168" height="725"/>
    </span>
  );
}

export function Marquee(){
  const [paused, setPaused] = useState(false);
  const words = ['SOFT BAKED COOKIES', 'BELGIAN WAFFLES', 'COFFEE & MORE', 'HAPPINESS, SERVED'];
  return (
    <div className={'ribbon moving-ribbon ' + (paused ? 'is-paused' : '')}>
      <div className="marquee-window">
        <div className="marquee-track">
          {[0, 1].map(copy => (
            <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {words.map(word => (
                <span className="marquee-item" key={word}>
                  {word}<span aria-hidden="true">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className="marquee-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? 'Play scrolling banner' : 'Pause scrolling banner'}>
        {paused ? <Play size={14}/> : <Pause size={14}/>}
      </button>
    </div>
  );
}

export function InstagramIcon({size = 18, className = ""}){
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: 0}}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export function FacebookIcon({size = 18, className = ""}){
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{flexShrink: 0}}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function MailIcon({size = 18, className = ""}){
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: 0}}>
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

export function WhatsAppIcon({size = 18, className = ""}){
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{flexShrink: 0}}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .8.8.3 1.6.2 2.2.1.7-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l4.9-1.3c1.5.9 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3.3.9.9-3.2-.2-.4c-.9-1.4-1.4-3-1.4-4.7 0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.8-8.2 8.8z"/>
    </svg>
  );
}

export function ZomatoLogo({size = 18, className = ""}){
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{flexShrink: 0}}>
      <rect width="24" height="24" rx="5.5" fill="#E23744"/>
      <path d="M6 7.2H18L8.8 16.8H18" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function DeliveryBoyIcon({size = 19, className = ""}){
  return (
    <svg 
      className={`delivery-scooter-icon ${className}`} 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.9" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      aria-hidden="true" 
      style={{flexShrink: 0}}
    >
      {/* Rider Helmet / Head */}
      <circle cx="14.5" cy="5.5" r="2.1" fill="currentColor" stroke="none" />
      {/* Helmet Visor */}
      <path d="M16 4.8h1.2" strokeWidth="1.6" />
      {/* Rider Body & Arm reaching to handlebar */}
      <path d="M14 7.5l-2.2 4 3 .4 2.2-3.6" />
      {/* Delivery Box / Backpack on Rider Back */}
      <rect x="7" y="6.8" width="4.5" height="5.2" rx="1.2" fill="currentColor" stroke="none" />
      {/* Scooter Step-through Frame & Steering Column */}
      <path d="M5.5 17h7.8l2.7-4.8h2" />
      {/* Handlebar */}
      <path d="M17.5 9.8h2" strokeWidth="2" />
      {/* Front Wheel */}
      <circle cx="18" cy="17" r="2.4" strokeWidth="1.9" fill="none" />
      {/* Rear Wheel */}
      <circle cx="5.5" cy="17" r="2.4" strokeWidth="1.9" fill="none" />
      {/* Speed / Motion lines */}
      <path d="M2 10.5h2.2M1 13.5h2" strokeWidth="1.5" opacity="0.8" />
    </svg>
  );
}

export function SwiggyLogo({size = 18, className = ""}){
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{flexShrink: 0}}>
      <rect width="24" height="24" rx="5.5" fill="#FC8019"/>
      <path d="M12.6 5.5C10.3 5.5 8.6 7 8.6 9C8.6 11.6 11.6 12.4 12.1 13C12.6 13.6 12.4 14.5 11.6 14.7C10.8 14.9 10 14.3 10 14.3L8.6 16C8.6 16 9.8 17.2 11.7 17.2C14.1 17.2 15.8 15.7 15.8 13.7C15.8 11 12.7 10.2 12.2 9.6C11.8 9.1 12.1 8.2 12.8 8C13.5 7.8 14.3 8.4 14.3 8.4L15.7 6.7C15.7 6.7 14.5 5.5 12.6 5.5Z" fill="#FFFFFF"/>
    </svg>
  );
}

export const storeGalleryItems = [
  {
    id: 'store-1',
    type: 'image',
    src: '/assets/store-1.png',
    title: 'Shankar Road Store',
    caption: 'Modern store entrance with warm pastel interiors and live dessert counter.',
    tag: 'Shankar Road'
  },
  {
    id: 'store-2',
    type: 'image',
    src: '/assets/store-2.jpeg',
    title: 'Illuminated Storefront & Counter',
    caption: 'Signature neon aesthetics welcoming dessert lovers every day from 11am to 1am.',
    tag: 'Storefront Vibe'
  },
  {
    id: 'store-3',
    type: 'video',
    src: '/assets/store-3.mp4',
    title: 'Live Store Experience & Ambience',
    caption: 'Step inside to experience the fresh baking buzz, comforting aroma, and cheerful energy.',
    tag: 'Video Tour'
  },
  {
    id: 'store-4',
    type: 'image',
    src: '/assets/store-4.jpeg',
    title: 'Shankar Road Dine-In & Seating',
    caption: 'Chic dessert space crafted for catching up with friends and family over sweet cravings.',
    tag: 'Shankar Road'
  },
  {
    id: 'store-6',
    type: 'image',
    src: '/assets/store-6.jpeg',
    title: 'Fresh Waffle & Cookie Station',
    caption: 'Open kitchen setup where Belgian waffles and soft cookies are prepared fresh to order.',
    tag: 'Live Baking'
  },
  {
    id: 'store-7',
    type: 'image',
    src: '/assets/store-7.jpeg',
    title: 'Aesthetic Warm Interiors',
    caption: 'Insta-worthy pastel tones and stylish pendant lighting creating a cheerful vibe.',
    tag: 'Ambiance'
  },
  {
    id: 'store-8',
    type: 'image',
    src: '/assets/store-8.jpeg',
    title: 'Delhi Neighbourhood Favourite',
    caption: 'Serving happiness across 4 busy Delhi locations with prompt takeout and delivery.',
    tag: 'Delhi Stores'
  }
];

export function StoreGalleryShowcase({compact = false, title = "Step Inside CookiePookie", eyebrow = "OUR STORES & EXPERIENCES"}){
  const [activeItem, setActiveItem] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? storeGalleryItems 
    : filter === 'photos' 
    ? storeGalleryItems.filter(i => i.type === 'image') 
    : storeGalleryItems.filter(i => i.type === 'video');

  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveItem(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeItem]);

  return (
    <div className="store-gallery-showcase">
      <div className="section-top">
        <div>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h2>{title}</h2>
        </div>
        <div className="gallery-filter-tabs">
          <button 
            className={'gallery-tab ' + (filter === 'all' ? 'active' : '')} 
            onClick={() => setFilter('all')}
          >
            All ({storeGalleryItems.length})
          </button>
          <button 
            className={'gallery-tab ' + (filter === 'photos' ? 'active' : '')} 
            onClick={() => setFilter('photos')}
          >
            Photos (6)
          </button>
          <button 
            className={'gallery-tab ' + (filter === 'video' ? 'active' : '')} 
            onClick={() => setFilter('video')}
          >
            Video Tour (1)
          </button>
        </div>
      </div>

      <div className="gallery-grid">
        {filteredItems.map((item, idx) => (
          <div 
            key={item.id} 
            className={`gallery-card ${item.type === 'video' ? 'is-video-card' : ''} ${idx === 0 ? 'card-featured' : ''}`}
            onClick={() => setActiveItem(item)}
          >
            <div className="gallery-media-wrap">
              {item.type === 'video' ? (
                <div className="gallery-video-preview">
                  <video 
                    src={item.src} 
                    muted 
                    loop 
                    playsInline 
                    autoPlay
                    aria-label={item.title}
                  />
                  <div className="video-play-badge">
                    <Play size={18} fill="currentColor"/>
                    <span>Watch Video</span>
                  </div>
                </div>
              ) : (
                <img 
                  loading="lazy" 
                  src={item.src} 
                  alt={item.title} 
                />
              )}
              <div className="gallery-overlay">
                <span className="gallery-tag">{item.tag}</span>
                <div className="gallery-card-info">
                  <h4>{item.title}</h4>
                  <p>{item.caption}</p>
                </div>
                <div className="gallery-zoom-btn" aria-label="View large">
                  <Maximize2 size={16}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeItem && (
        <div className="gallery-modal-backdrop" onClick={() => setActiveItem(null)}>
          <div className="gallery-modal-dialog" onClick={e => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setActiveItem(null)} aria-label="Close modal">
              <X size={22}/>
            </button>
            <div className="gallery-modal-content">
              {activeItem.type === 'video' ? (
                <video 
                  src={activeItem.src} 
                  controls 
                  autoPlay 
                  playsInline
                  className="gallery-modal-media"
                />
              ) : (
                <img 
                  src={activeItem.src} 
                  alt={activeItem.title} 
                  className="gallery-modal-media"
                />
              )}
              <div className="gallery-modal-footer">
                <div>
                  <span className="modal-badge">{activeItem.tag}</span>
                  <h3>{activeItem.title}</h3>
                  <p>{activeItem.caption}</p>
                </div>
                <Link href="/stores/" className="btn outline" onClick={() => setActiveItem(null)}>
                  <MapPin size={15}/> Visit our stores
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function StoreAutoCarousel({
  title = "Our Delhi Stores in Motion",
  eyebrow = "TAKE A LOOK INSIDE",
  interval = 2000
}){
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // All store images
  const slides = [
    {
      src: '/assets/Ashok-vihar1.jpeg',
      name: 'Ashok Vihar Flagship Store',
      tag: 'Ashok Vihar',
      address: 'B-2/25, Pocket B2, Phase 2, Ashok Vihar, New Delhi',
      status: 'Open Daily · 11am – 1am',
      isComingSoon: false
    },
    {
      src: '/assets/store-1.png',
      name: 'Shankar Road Storefront & Counter',
      tag: 'Shankar Road',
      address: '2/58 Shankar Road, Old Rajinder Nagar, New Delhi',
      status: 'Open Daily · 11am – 1am',
      isComingSoon: false
    },
    {
      src: '/assets/Pitampura1.JPG',
      name: 'Pitampura Dine-In Space',
      tag: 'Pitampura',
      address: '1, Shiva Enclave, Road No. 44, Pitampura, New Delhi',
      status: 'Open Daily · 11am – 1am',
      isComingSoon: false
    },
    {
      src: '/assets/store-6.jpeg',
      name: 'Shalimar Bagh Location',
      tag: 'Shalimar Bagh',
      address: 'Shop No. 18–19, Block AL, Poorbi Shalimar Bagh, Delhi',
      status: 'Coming Soon',
      isComingSoon: true
    },
    {
      src: '/assets/store-7.jpeg',
      name: 'Aesthetic Warm Interiors',
      tag: 'Store Ambience',
      address: 'Cozy seating & Instagrammable pastel dessert vibes',
      status: 'Visit Us',
      isComingSoon: false
    },
    {
      src: '/assets/store-8.jpeg',
      name: 'Live Waffle & Cookie Station',
      tag: 'Live Baking',
      address: 'Warm Belgian waffles & soft baked cookies made fresh to order',
      status: 'Fresh Daily',
      isComingSoon: false
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, interval, slides.length]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div 
      className="store-auto-carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="section-top" style={{marginBottom: 20}}>
        <div>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h2>{title}</h2>
        </div>
        <div className="carousel-controls-header">
          <button 
            className="carousel-arrow-btn" 
            onClick={handlePrev} 
            aria-label="Previous store image"
          >
            <ChevronLeft size={18}/>
          </button>
          <span className="carousel-counter">
            0{currentIndex + 1} / 0{slides.length}
          </span>
          <button 
            className="carousel-arrow-btn" 
            onClick={handleNext} 
            aria-label="Next store image"
          >
            <ChevronRight size={18}/>
          </button>
        </div>
      </div>

      <div className="store-carousel-stage">
        <div 
          className="store-carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="store-carousel-slide" key={i}>
              <div className="store-carousel-media-box">
                <img 
                  src={slide.src} 
                  alt={slide.name} 
                  className="store-carousel-img" 
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="store-carousel-overlay">
                  <div className="carousel-tag-pill">
                    {slide.isComingSoon ? (
                      <span className="badge-coming-soon">✨ Coming Soon</span>
                    ) : (
                      <span className="badge-open">
                        <span className="store-live-dot" /> {slide.status}
                      </span>
                    )}
                  </div>
                  <div className="carousel-info-box">
                    <span className="carousel-location-tag">{slide.tag}</span>
                    <h3>{slide.name}</h3>
                    <p>{slide.address}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous & Next overlay buttons */}
        <button 
          className="carousel-side-nav side-prev" 
          onClick={handlePrev} 
          aria-label="Previous image"
        >
          <ChevronLeft size={22}/>
        </button>
        <button 
          className="carousel-side-nav side-next" 
          onClick={handleNext} 
          aria-label="Next image"
        >
          <ChevronRight size={22}/>
        </button>

        {/* Progress Dots Bar */}
        <div className="carousel-dots-bar">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className="carousel-dot-fill" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StoreImageMarquee({
  title = "Step inside our dessert haven.",
  eyebrow = "INSIDE COOKIEPOOKIE",
  subtitle = "Experience the warm aromas, aesthetic store vibes, and live dessert counters across Delhi."
}){
  // Complete list for desktop and row 1
  const allItems = [...storeGalleryItems, ...storeGalleryItems];
  // Staggered list for mobile row 2
  const row2Items = [
    storeGalleryItems[4],
    storeGalleryItems[5],
    storeGalleryItems[6],
    storeGalleryItems[0],
    storeGalleryItems[1],
    storeGalleryItems[2],
    storeGalleryItems[3]
  ];
  const marquee2 = [...row2Items, ...row2Items];

  return (
    <div className="store-image-marquee-section">
      <div className="wrap">
        <div className="section-top">
          <div>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            <h2>{title}</h2>
          </div>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>

      <div className="store-image-marquee-wrap">
        {/* Row 1: Visible on Desktop & Mobile (Scrolling Left) */}
        <div className="store-image-marquee-track track-left marquee-row-1">
          {allItems.map((item, idx) => (
            <div key={`r1-${item.id}-${idx}`} className="store-marquee-card">
              {item.type === 'video' ? (
                <video 
                  src={item.src} 
                  muted 
                  loop 
                  playsInline 
                  autoPlay
                  className="store-marquee-media"
                  aria-label="CookiePookie store interior"
                />
              ) : (
                <img 
                  loading="lazy" 
                  src={item.src} 
                  alt="CookiePookie store aesthetic" 
                  className="store-marquee-media"
                />
              )}
            </div>
          ))}
        </div>

        {/* Row 2: Visible only on Mobile (Scrolling Right) */}
        <div className="store-image-marquee-track track-right marquee-row-2" style={{marginTop: 18}}>
          {marquee2.map((item, idx) => (
            <div key={`r2-${item.id}-${idx}`} className="store-marquee-card">
              {item.type === 'video' ? (
                <video 
                  src={item.src} 
                  muted 
                  loop 
                  playsInline 
                  autoPlay
                  className="store-marquee-media"
                  aria-label="CookiePookie store interior"
                />
              ) : (
                <img 
                  loading="lazy" 
                  src={item.src} 
                  alt="CookiePookie store aesthetic" 
                  className="store-marquee-media"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header(){
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener('scroll', update, {passive: true});
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className={'site-header ' + (path === '/' ? 'home-header' : 'inner-header') + (scrolled ? ' is-scrolled' : '') + (open ? ' menu-open' : '')}>
        <div className="nav">
          <div className="nav-bar">
            <Link href="/" aria-label="CookiePookie home" className="nav-brand-link" onClick={() => setOpen(false)}>
              <BrandLogo/>
            </Link>

            {/* Mobile Top Bar Actions: Order Now + Hamburger/Close */}
            <div className="mobile-header-actions">
              <a
                href={ZOMATO_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-order-btn mobile-header-btn"
                aria-label="Order Now on Zomato"
              >
                <span>Order Now</span>
                <DeliveryBoyIcon size={17} />
              </a>

              <button
                className="mobile-toggle"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="navigation"
                onClick={() => setOpen(!open)}
              >
                {open ? <X size={22}/> : <Menu size={22}/>}
              </button>
            </div>
          </div>

          {/* Desktop Right Nav (links + order now) & Mobile Drawer (links) */}
          <div className={`nav-menu-group ${open ? 'open' : ''}`}>
            <nav id="navigation">
              {[
                ['/', 'Home'],
                ['/menu/', 'Our menu'],
                ['/story/', 'Our story'],
                ['/stores/', 'Our stores'],
                ['/franchise/', 'Franchise'],
                ['/contact/', 'Contact']
              ].map(([url, text], i) => (
                <Link
                  aria-current={(path.replace(/\/$/, '') === url.replace(/\/$/, '')) ? 'page' : undefined}
                  className={(i === 4 ? 'partner-link ' : i === 5 ? 'contact-link ' : '') + (path.replace(/\/$/, '') === url.replace(/\/$/, '') ? 'active' : '')}
                  key={url}
                  href={url}
                  onClick={() => setOpen(false)}
                >
                  {text}
                </Link>
              ))}
            </nav>

            {/* Desktop-only Order Now button */}
            <a
              href={ZOMATO_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-order-btn desktop-order-btn"
              aria-label="Order Now on Zomato"
            >
              <span>Order Now</span>
              <DeliveryBoyIcon size={18} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export function Footer(){
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link href="/"><BrandLogo/></Link>
          <p style={{marginTop: 16}}>Creating the next generation<br/>of dessert experiences.</p>
          <div className="footer-socials" style={{marginTop: 20, display: 'flex', gap: 12}}>
            <a 
              href="https://www.instagram.com/cookiepookiecookie?stkn=aHpkcGRxOWRqaWUx&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              aria-label="CookiePookie Instagram"
              title="Follow CookiePookie on Instagram"
            >
              <InstagramIcon size={18}/>
            </a>
            <a 
              href="https://www.facebook.com/cookiepookiecookie" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              aria-label="CookiePookie Facebook"
              title="Follow CookiePookie on Facebook"
            >
              <FacebookIcon size={18}/>
            </a>
            <a 
              href="https://wa.me/919355683343" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              aria-label="CookiePookie WhatsApp"
              title="Chat with us on WhatsApp"
            >
              <WhatsAppIcon size={18}/>
            </a>
          </div>
        </div>
        <div>
          <h3>A little more to explore</h3>
          <nav>
            <Link href="/menu/">Our menu</Link>
            <Link href="/story/">Our story</Link>
            <Link href="/stores/">Our stores</Link>
            <Link href="/franchise/">Franchise opportunity</Link>
            <Link href="/contact/">Contact us</Link>
          </nav>
        </div>
        <div>
          <h3>Say hello</h3>
          <p style={{marginBottom: 10}}>
            <a href="mailto:Hello@cookiepookieindia.com" className="footer-contact-link" style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600}}>
              <MailIcon size={16}/> Hello@cookiepookieindia.com
            </a>
          </p>
          <p style={{marginBottom: 10}}>
            <a href="tel:+919355683343" className="footer-contact-link" style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600}}>
              <Phone size={16}/> +91 93556 83343
            </a>
          </p>
          <p style={{marginTop: 16, lineHeight: 1.6}}>
            <strong>Registered Office</strong><br/>
            Shop No. 18–19, Shaheed Udham Singh Marg, Block AL, Poorbi Shalimar Bagh, Delhi – 110088<br/>
            <span style={{fontSize: 13, color: '#795b53'}}>
              <strong>Timings:</strong> 10:00 AM to 6:00 PM<br/>
              <strong>Days:</strong> Monday to Saturday
            </span>
          </p>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} CookiePookie. All rights reserved. &nbsp; Made for your happy moments.
      </div>
    </footer>
  );
}

export function Motion(){
  const path = usePathname();
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }), {threshold: 0.06});
    elements.forEach(e => {
      e.classList.add('motion-ready');
      observer.observe(e);
    });
    return () => observer.disconnect();
  }, [path]);
  return null;
}

export function PageHead({eyebrow, title, children}){
  return (
    <div className="page-header-clean">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1>{title}</h1>
      {children && <p className="page-header-sub">{children}</p>}
    </div>
  );
}

export function MenuCardsShowcase(){
  const [activeMenu, setActiveMenu] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const menus = [
    {
      id: 1,
      name: 'Cookies & Cakes Menu',
      badge: 'Soft Baked Cookies · Cakes · Treats',
      src: '/assets/menu-1.png',
      alt: 'Cookie Pookie Official Soft Baked Cookie & Cakes Menu'
    },
    {
      id: 2,
      name: 'Waffles & Drinks Menu',
      badge: 'Belgian Waffles · Coffee · Shakes · Drinks',
      src: '/assets/menu-2.png',
      alt: 'Cookie Pookie Official Belgian Waffles, Shakes & Coffee Menu'
    }
  ];

  const openMenu = (id) => {
    setActiveMenu(id);
    setModalOpen(true);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setModalOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [modalOpen]);

  const current = menus.find(m => m.id === activeMenu) || menus[0];

  return (
    <div className="menu-cards-compact-bar">
      <div className="menu-compact-info">
        <span className="menu-compact-tag"><BookOpen size={15}/> OFFICIAL MENUS</span>
        <p>Want to see the complete printed menu cards?</p>
      </div>
      <div className="menu-compact-actions">
        <button className="btn outline menu-btn-sm" onClick={() => openMenu(1)}>
          <Maximize2 size={14}/> View Cookies & Cakes Card
        </button>
        <button className="btn outline menu-btn-sm" onClick={() => openMenu(2)}>
          <Maximize2 size={14}/> View Waffles & Drinks Card
        </button>
      </div>

      {modalOpen && (
        <div className="menu-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="menu-modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="menu-modal-header">
              <div className="menu-modal-nav">
                {menus.map(m => (
                  <button
                    key={m.id}
                    className={'menu-modal-tab ' + (activeMenu === m.id ? 'active' : '')}
                    onClick={() => setActiveMenu(m.id)}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
              <button className="menu-modal-close" onClick={() => setModalOpen(false)} aria-label="Close menu viewer">
                <X size={20}/>
              </button>
            </div>
            <div className="menu-modal-body">
              <img src={current.src} alt={current.alt} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function OnlineDeliveryStrip(){
  return (
    <div className="online-delivery-strip">
      <div className="delivery-strip-content">
        <div className="delivery-strip-title">
          <span className="live-dot" aria-hidden="true"></span>
          <strong>Order Online Delivery</strong>
          <span className="strip-sub">Craving CookiePookie? Get your favourite desserts delivered right to your door!</span>
        </div>
        <div className="delivery-strip-links">
          <a
            href={ZOMATO_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="strip-btn zomato"
            aria-label="Order CookiePookie on Zomato"
          >
            <ZomatoLogo size={18} />
            <span>Order on Zomato</span>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <div className="strip-btn swiggy" title="Swiggy delivery coming soon">
            <SwiggyLogo size={18} />
            <span>Swiggy</span>
            <span className="strip-badge">Coming soon...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Product({item}){
  const [cat, name, price, description, img] = item;
  return (
    <article className="product">
      {img && (
        <a
          href={ZOMATO_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="picture-link"
          aria-label={`Order ${name} on Zomato`}
        >
          <div className="picture">
            <img loading="lazy" src={'/assets/' + img + '.webp'} alt={name}/>
            <span className="picture-order-badge">
              <ZomatoLogo size={14}/>
              <span>Order on Zomato</span>
            </span>
          </div>
        </a>
      )}
      <div className="info">
        <div className="label">
          <h3>
            <a
              href={ZOMATO_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="product-title-link"
              title={`Order ${name} on Zomato`}
            >
              {name}
            </a>
          </h3>
          <span className="price">₹{price.replace(' / ', ' / ₹')}</span>
        </div>
        <p>{description}</p>
        
        <div className="product-order-footer">
          <a
            href={ZOMATO_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="product-order-btn"
            aria-label={`Order ${name} on Zomato`}
          >
            <ZomatoLogo size={16}/>
            <span>Order on Zomato</span>
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
          <span className="swiggy-soon-text">Swiggy delivery coming soon</span>
        </div>
      </div>
    </article>
  );
}

export function MenuGrid(){
  const [category, setCategory] = useState('Waffles');
  const cats = [...new Set(products.map(p => p[0]))];

  useEffect(() => {
    const selectHash = () => {
      try {
        const value = decodeURIComponent(window.location.hash.slice(1));
        if(products.some(p => p[0] === value)) setCategory(value);
      } catch {}
    };
    selectHash();
    window.addEventListener('hashchange', selectHash);
    return () => window.removeEventListener('hashchange', selectHash);
  }, []);

  return (
    <>
      <div className="filters" aria-label="Menu categories">
        {cats.map(cat => (
          <button
            key={cat}
            className={'filter ' + (category === cat ? 'active' : '')}
            aria-pressed={category === cat}
            onClick={() => {
              setCategory(cat);
              window.history.replaceState(null, '', '#' + encodeURIComponent(cat));
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-summary">
        <h2>{category === 'Waffles' ? 'Belgian waffles' : category === 'Cookies' ? 'Soft baked cookies' : category === 'Pancakes' ? 'Mini pancakes' : category}</h2>
        <span>{category === 'Waffles' ? 'Prices for single / double' : category === 'Pancakes' ? '8 little bites of joy' : 'Find your next favourite'}</span>
      </div>

      <div className="grid menu-grid" key={category}>
        {products.filter(p => p[0] === category).map(p => (
          <Product item={p} key={p[1]}/>
        ))}
      </div>

      <div className="menu-notes">
        {category === 'Cookies' && <p>Add-ons: chocolate drizzle ₹50 · vanilla ice cream ₹60. Packaged cookies: approx. 58g each.</p>}
        {(category === 'Waffles' || category === 'Pancakes') && <p>Add-ons: Gems or banana ₹20 · brownie ₹40.</p>}
        {category === 'Coffee' && <p>Add-ons: vanilla, caramel or hazelnut ₹40.</p>}
        <p>Prices inclusive of applicable taxes. Items may contain nuts. Please tell our team about any allergies.</p>
      </div>
    </>
  );
}

function StoreCardCarousel({ storeName, storeImages, isComingSoon }){
  const images = Array.isArray(storeImages) && storeImages.length > 0
    ? storeImages
    : typeof storeImages === 'string'
    ? [storeImages]
    : ['/assets/store-1.png'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 second auto-scroll

    return () => clearInterval(timer);
  }, [isPaused, images.length]);

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="store-card-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div 
        className="store-card-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div className="store-card-slide" key={idx}>
            <img 
              src={src} 
              alt={`${storeName} photo ${idx + 1}`} 
              className="store-card-img" 
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Coming Soon Overlay Badge (if applicable) */}
      {isComingSoon && (
        <div className="store-status-overlay">
          <span className="store-badge badge-coming-soon">✨ Coming Soon</span>
        </div>
      )}

      {/* Manual Arrow Controls on hover (only if multiple images) */}
      {images.length > 1 && (
        <>
          <button 
            className="store-card-nav-btn prev" 
            onClick={handlePrev} 
            aria-label="Previous image"
          >
            <ChevronLeft size={16}/>
          </button>
          <button 
            className="store-card-nav-btn next" 
            onClick={handleNext} 
            aria-label="Next image"
          >
            <ChevronRight size={16}/>
          </button>

          {/* Mini Dot Indicators */}
          <div className="store-card-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`store-mini-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`View photo ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function StoreCards(){
  return (
    <div className="store-grid">
      {stores.map(([name, address, images, hours, isComingSoon, mapUrl], i) => (
        <article className={`store reveal ${isComingSoon ? 'store-coming-soon' : ''}`} key={name}>
          <StoreCardCarousel 
            storeName={name} 
            storeImages={images} 
            isComingSoon={isComingSoon} 
          />
          <div className="store-card-content">
            <div className="number">0{i+1} / NEW DELHI</div>
            <h3>{name}</h3>
            <p>{address}</p>
            <div className="hours">
              <Clock size={16}/> {isComingSoon ? 'Opening Soon in Shalimar Bagh' : (hours || 'Every day · 11am – 1am')}
            </div>
            <div className="actions">
              <a className="btn" href={mapUrl || ('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Cookie Pookie ' + address))} target="_blank" rel="noreferrer">
                <MapPin size={16}/>Get directions
              </a>
              {!isComingSoon ? (
                <a className="btn outline" href="tel:+919355683343">
                  <Phone size={16}/>Call store
                </a>
              ) : (
                <span className="btn outline coming-soon-tag">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FranchiseFAQAccordion(){
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Is prior experience in the food & beverage (F&B) industry required?',
      a: 'No prior F&B experience is required! CookiePookie provides complete end-to-end turnkey support, including recipe SOPs, standardized premixes, staff & barista training, operational guidelines, and continuous store assistance.'
    },
    {
      q: 'What is the gross margin and expected ROI timeline?',
      a: 'CookiePookie offers an industry-leading 65% Gross Margin with low raw material wastage. Franchise stores typically achieve operational break-even within 1 to 2 months and a full capital payback period of 12 to 18 months.'
    },
    {
      q: 'What are the space and location requirements for opening a store?',
      a: 'We require 150 to 400 sq. ft. of carpet area with a minimum 10-12 ft frontage. Prime high-street locations, major market corridors, food hubs, and popular shopping mall food courts with high footfall are ideal.'
    },
    {
      q: 'What turnkey support does CookiePookie provide for a franchise?',
      a: 'We assist with complete site feasibility analysis, 3D architectural store layout, commercial equipment sourcing, doorstep ingredient supply chain, staff hiring & hands-on training, cloud POS setup, and high-impact digital marketing & aggregator onboarding (Zomato / Swiggy).'
    },
    {
      q: 'How long does it take from agreement signing to store launch?',
      a: 'From signing the agreement and site handover, the entire setup and launch typically takes 25 to 35 days, including interior fit-outs, equipment commissioning, and mock-run training.'
    },
    {
      q: 'Why is CookiePookie’s dessert franchise model resilient & scalable?',
      a: 'Our 100% vegetarian menu (cookies, waffles, mini pancakes, shakes, coffee) appeals universally across age groups. Live on-site baking generates irresistible aroma and organic walk-ins, while compact kitchen footprints ensure minimal rental overheads.'
    }
  ];

  return (
    <div className="faq-accordion-wrap">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button 
              className="faq-question-btn" 
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
            >
              <span>{faq.q}</span>
              <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div className="faq-answer-pane">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function FranchiseForm(){
  const [submitted, setSubmitted] = useState(false);
  const [lastUrl, setLastUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hi CookiePookie! I would like to apply for a Franchise opportunity.\n\n👤 Name: ${f.get('first')} ${f.get('last')}\n📧 Email: ${f.get('email')}\n📞 Phone: ${f.get('phone')}\n📍 Preferred Location: ${f.get('location')}\n💰 Investment Budget: ${f.get('budget') || '₹15 - ₹25 Lakhs'}\n💬 Message: ${f.get('message') || 'Please share the franchise deck & business details.'}`;
    const url = 'https://wa.me/919355683343?text=' + encodeURIComponent(msg);
    setLastUrl(url);
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="form franchise-styled-form" onSubmit={handleSubmit}>
      <div className="form-header-badge">FRANCHISE APPLICATION</div>
      <h3>Franchise Enquiry</h3>
      <p className="note">Take the first step toward owning a profitable CookiePookie outlet.</p>
      
      <div className="fields">
        <label className="field">First name<input name="first" autoComplete="given-name" required maxLength={80} placeholder="Your first name"/></label>
        <label className="field">Last name<input name="last" autoComplete="family-name" required maxLength={80} placeholder="Your last name"/></label>
        <label className="field full">Email address<input type="email" name="email" autoComplete="email" required maxLength={150} placeholder="you@example.com"/></label>
        <label className="field full">Phone number<input type="tel" name="phone" autoComplete="tel" pattern="[+0-9 ()-]{10,18}" required placeholder="+91 98765 43210" title="Enter a valid phone number with 10 to 18 characters"/></label>
        <label className="field full">Preferred city / location<input name="location" required placeholder="e.g. South Delhi, Gurgaon, Noida, Jaipur..." maxLength={200}/></label>
        <label className="field full">
          Investment Budget
          <select name="budget" defaultValue="15-20">
            <option value="15-20">₹15 Lakhs – ₹20 Lakhs</option>
            <option value="20-25">₹20 Lakhs – ₹25 Lakhs</option>
            <option value="25+">₹25 Lakhs+ (Multi-Unit / City Master)</option>
          </select>
        </label>
        <label className="field full">Tell us about your background or queries (optional)<textarea name="message" maxLength={1000} placeholder="Any specific location, timeline or experience..."/></label>
      </div>

      <button className="btn pink" style={{marginTop: 22, width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8}} type="submit">
        <WhatsAppIcon size={18}/>
        <span>Submit Franchise Enquiry</span>
        <span aria-hidden="true">↗</span>
      </button>

      <small style={{display: 'block', marginTop: 10, color: '#765d54', textAlign: 'center'}}>Submitting opens WhatsApp directly with your application details ready to send.</small>
      
      {submitted && (
        <div className="form-result" role="status" style={{marginTop: 16}}>
          <strong>Opening WhatsApp...</strong>
          <p>If WhatsApp did not open automatically, <a href={lastUrl} target="_blank" rel="noreferrer" style={{color: '#a84255', fontWeight: 700}}>click here to send message</a>.</p>
        </div>
      )}
    </form>
  );
}

export function ContactForm(){
  const [submitted, setSubmitted] = useState(false);
  const [lastUrl, setLastUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hi CookiePookie Team!\n\n👤 Name: ${f.get('name')}\n📧 Email: ${f.get('email')}\n📞 Phone: ${f.get('phone')}\n🏷️ Subject: ${f.get('subject')}\n💬 Message: ${f.get('message')}`;
    const url = 'https://wa.me/919355683343?text=' + encodeURIComponent(msg);
    setLastUrl(url);
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Send us a message</h3>
      <p className="note">Have a question, feedback, catering inquiry or want to say hello? Fill out the form below.</p>
      
      <div className="fields">
        <label className="field full">Your name<input name="name" required maxLength={100} placeholder="Full name"/></label>
        <label className="field">Email address<input type="email" name="email" required maxLength={150} placeholder="you@example.com"/></label>
        <label className="field">Phone number<input type="tel" name="phone" pattern="[+0-9 ()-]{10,18}" required placeholder="+91 98765 43210"/></label>
        <label className="field full">
          Inquiry Type
          <select name="subject" defaultValue="General Inquiry">
            <option value="General Inquiry">General Inquiry / Feedback</option>
            <option value="Party & Catering">Party & Event Bulk Orders</option>
            <option value="Franchise Inquiry">Franchise Opportunity</option>
            <option value="Customer Support">Customer Support</option>
          </select>
        </label>
        <label className="field full">Message<textarea name="message" required maxLength={1000} placeholder="Write your message here..." rows={4}/></label>
      </div>

      <button className="btn pink" style={{marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 8}} type="submit">
        <WhatsAppIcon size={18}/>
        <span>Send Message via WhatsApp</span>
        <span aria-hidden="true">↗</span>
      </button>

      {submitted && (
        <div className="form-result" role="status" style={{marginTop: 16}}>
          <strong>Message generated!</strong>
          <p>If WhatsApp did not open automatically, <a href={lastUrl} target="_blank" rel="noreferrer" style={{color: '#a84255', fontWeight: 700}}>click here to send message</a>.</p>
        </div>
      )}
    </form>
  );
}
