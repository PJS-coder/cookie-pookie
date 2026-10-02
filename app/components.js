'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState,useEffect} from 'react';
import {Menu,X,MapPin,Phone,Clock,Pause,Play,BookOpen,Maximize2} from 'lucide-react';
import {products,stores} from './data';

export function BrandLogo(){
  return (
    <span className="brand-logo">
      <img src="/assets/cookiepookie-logo.png" alt="CookiePookie" width="2168" height="725"/>
    </span>
  );
}

export function Marquee(){
  const [paused,setPaused]=useState(false);
  const words=['SOFT BAKED COOKIES','BELGIAN WAFFLES','COFFEE & MORE','HAPPINESS, SERVED'];
  return (
    <div className={'ribbon moving-ribbon '+(paused?'is-paused':'')}>
      <div className="marquee-window">
        <div className="marquee-track">
          {[0,1].map(copy=>(
            <div className="marquee-group" key={copy} aria-hidden={copy===1?true:undefined}>
              {words.map(word=>(
                <span className="marquee-item" key={word}>
                  {word}<span aria-hidden="true">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className="marquee-toggle" onClick={()=>setPaused(!paused)} aria-label={paused?'Play scrolling banner':'Pause scrolling banner'}>
        {paused?<Play size={14}/>:<Pause size={14}/>}
      </button>
    </div>
  );
}

export function Header(){
  const path=usePathname();
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);

  useEffect(()=>setOpen(false),[path]);

  useEffect(()=>{
    const update=()=>setScrolled(window.scrollY>30);
    update();
    window.addEventListener('scroll',update,{passive:true});
    return()=>window.removeEventListener('scroll',update);
  },[]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className={'site-header '+(path==='/'?'home-header':'inner-header')+(scrolled?' is-scrolled':'')+(open?' menu-open':'')}>
        <div className="nav">
          <Link href="/" aria-label="CookiePookie home">
            <BrandLogo/>
          </Link>
          <button className="mobile-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>
            {open?<X size={22}/>:<Menu size={22}/>}
          </button>
          <nav id="navigation" className={open?'open':''}>
            {[
              ['/','Home'],
              ['/menu/','Our menu'],
              ['/story/','Our story'],
              ['/stores/','Our stores'],
              ['/franchise/','Become a partner']
            ].map(([url,text],i)=>(
              <Link
                aria-current={(path.replace(/\/$/,'')===url.replace(/\/$/,''))?'page':undefined}
                className={(i===4?'partner-link ':'')+(path.replace(/\/$/,'')===url.replace(/\/$/,'')?'active':'')}
                key={url}
                href={url}
              >
                {text}
              </Link>
            ))}
          </nav>
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
          <p style={{marginTop:16}}>Creating the next generation<br/>of dessert experiences.</p>
        </div>
        <div>
          <h3>A little more to explore</h3>
          <nav>
            <Link href="/menu/">Our menu</Link>
            <Link href="/story/">Our story</Link>
            <Link href="/stores/">Our stores</Link>
            <Link href="/franchise/">Franchise enquiries</Link>
          </nav>
        </div>
        <div>
          <h3>Say hello</h3>
          <a href="tel:+919355683343">+91 93556 83343</a>
          <p style={{marginTop:16}}><strong>Registered office</strong><br/>{stores[3][1]}</p>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} CookiePookie. All rights reserved. &nbsp; Made for your happy moments.
      </div>
    </footer>
  );
}

export function Motion(){
  const path=usePathname();
  useEffect(()=>{
    const elements=document.querySelectorAll('.reveal');
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),{threshold:0.06});
    elements.forEach(e=>{
      e.classList.add('motion-ready');
      observer.observe(e);
    });
    return()=>observer.disconnect();
  },[path]);
  return null;
}

export function PageHead({eyebrow,title,children}){
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

export function Product({item}){
  const [cat,name,price,description,img]=item;
  return (
    <article className="product">
      {img && (
        <div className="picture">
          <img loading="lazy" src={'/assets/'+img+'.webp'} alt={name}/>
        </div>
      )}
      <div className="info">
        <div className="label">
          <h3>{name}</h3>
          <span className="price">₹{price.replace(' / ',' / ₹')}</span>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
}

export function MenuGrid(){
  const [category,setCategory]=useState('Waffles');
  const cats=[...new Set(products.map(p=>p[0]))];

  useEffect(()=>{
    const selectHash=()=>{
      try{
        const value=decodeURIComponent(window.location.hash.slice(1));
        if(products.some(p=>p[0]===value))setCategory(value);
      }catch{}
    };
    selectHash();
    window.addEventListener('hashchange',selectHash);
    return()=>window.removeEventListener('hashchange',selectHash);
  },[]);

  return (
    <>
      <div className="filters" aria-label="Menu categories">
        {cats.map(cat=>(
          <button
            key={cat}
            className={'filter '+(category===cat?'active':'')}
            aria-pressed={category===cat}
            onClick={()=>{
              setCategory(cat);
              window.history.replaceState(null,'','#'+encodeURIComponent(cat));
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-summary">
        <h2>{category==='Waffles'?'Belgian waffles':category==='Cookies'?'Soft baked cookies':category==='Pancakes'?'Mini pancakes':category}</h2>
        <span>{category==='Waffles'?'Prices for single / double':category==='Pancakes'?'8 little bites of joy':'Find your next favourite'}</span>
      </div>

      <div className="grid menu-grid" key={category}>
        {products.filter(p=>p[0]===category).map(p=>(
          <Product item={p} key={p[1]}/>
        ))}
      </div>

      <div className="menu-notes">
        {category==='Cookies'&&<p>Add-ons: chocolate drizzle ₹50 · vanilla ice cream ₹60. Packaged cookies: approx. 58g each.</p>}
        {(category==='Waffles'||category==='Pancakes')&&<p>Add-ons: Gems or banana ₹20 · brownie ₹40.</p>}
        {category==='Coffee'&&<p>Add-ons: vanilla, caramel or hazelnut ₹40.</p>}
        <p>Prices inclusive of applicable taxes. Items may contain nuts. Please tell our team about any allergies.</p>
      </div>
    </>
  );
}

export function StoreCards(){
  return (
    <div className="store-grid">
      {stores.map(([name,address],i)=>(
        <article className="store reveal" key={name}>
          <div className="number">0{i+1} / NEW DELHI</div>
          <h3>{name}</h3>
          <p>{address}</p>
          <div className="hours"><Clock size={16}/> Every day · 11am – 1am</div>
          <div className="actions">
            <a className="btn" href={'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Cookie Pookie '+address)} target="_blank" rel="noreferrer">
              <MapPin size={16}/>Get directions
            </a>
            <a className="btn outline" href="tel:+919355683343">
              <Phone size={16}/>Call store
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FranchiseForm(){
  const [prepared,setPrepared]=useState('');
  return (
    <form className="form" onSubmit={e=>{
      e.preventDefault();
      const f=new FormData(e.currentTarget);
      const msg=`Hi CookiePookie! I would like to enquire about a franchise.\nName: ${f.get('first')} ${f.get('last')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')}\nPreferred location: ${f.get('location')}\nMessage: ${f.get('message')||'Please share the franchise details.'}`;
      setPrepared('https://wa.me/919355683343?text='+encodeURIComponent(msg));
    }}>
      <h3>Let’s start a conversation.</h3>
      <p className="note">Tell us a little about yourself and where you’d like to grow.</p>
      <div className="fields">
        <label className="field">First name<input name="first" autoComplete="given-name" required maxLength={80}/></label>
        <label className="field">Last name<input name="last" autoComplete="family-name" required maxLength={80}/></label>
        <label className="field full">Email address<input type="email" name="email" autoComplete="email" required maxLength={150}/></label>
        <label className="field full">Phone number<input type="tel" name="phone" autoComplete="tel" pattern="[+0-9 ()-]{10,18}" required title="Enter a valid phone number with 10 to 18 characters"/></label>
        <label className="field full">Preferred city / location<input name="location" required placeholder="Where would you like to open?" maxLength={200}/></label>
        <label className="field full">Anything else you’d like to share? (optional)<textarea name="message" maxLength={1000}/></label>
      </div>
      <button className="btn" style={{marginTop:22}} type="submit">Prepare my enquiry</button>
      <small>Your details stay in this page until you choose to send them through WhatsApp.</small>
      {prepared && (
        <div className="form-result" role="status">
          <strong>Your enquiry is ready.</strong>
          <p>Open WhatsApp to review your message, then send it to the CookiePookie team.</p>
          <a className="btn pink" href={prepared} target="_blank" rel="noreferrer">Continue to WhatsApp</a>
        </div>
      )}
    </form>
  );
}
