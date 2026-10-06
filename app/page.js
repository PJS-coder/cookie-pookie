import Link from 'next/link';
import Hero from './hero';
import DessertStack from './dessert-stack';
import {Product, Marquee, StoreImageMarquee} from './components';
import {products} from './data';

export default function Home(){
  return (
    <>
      <Hero/>
      <Marquee/>
      <DessertStack/>

      {/* Sweet Picks / Favourites */}
      <section id="favourites" className="wrap reveal">
        <div className="section-top">
          <div>
            <div className="eyebrow">THE COOKIEPOOKIE EDIT</div>
            <h2>Start with these sweet picks.</h2>
          </div>
          <Link className="btn outline" href="/menu/">View the full menu</Link>
        </div>
        <div className="grid featured-picks">
          {[products[7], products[16], products[18], products[22], products[30], products[5]].map(p => (
            <Product key={p[1]} item={p}/>
          ))}
        </div>
      </section>

      {/* Story Teaser */}
      <section className="pink-section">
        <div className="wrap split reveal">
          <img loading="lazy" src="/assets/2.webp" alt="Cookie Pookie dessert store entrance"/>
          <div>
            <div className="eyebrow">SMALL MOMENTS. SWEET MEMORIES.</div>
            <h2>More than dessert.<br/>A feeling you<br/>come back for.</h2>
            <p>Cookie Pookie was born from a simple belief: great desserts have the power to create lasting memories.</p>
            <p>From signature cookies to indulgent waffles, we’re always dreaming up something new — with exceptional taste and quality at the heart of every creation.</p>
            <Link className="btn" href="/story/">Get to know us</Link>
          </div>
        </div>
      </section>

      {/* Store Pictures & Experiences Image Marquee */}
      <section className="reveal">
        <StoreImageMarquee 
          eyebrow="INSIDE COOKIEPOOKIE" 
          title="Step inside our dessert haven."
          subtitle="Experience the warm aromas, aesthetic store vibes, and live dessert counters across Delhi."
        />
      </section>

      {/* Delhi Neighbourhood Stores */}
      <section className="wrap reveal">
        <div className="section-top">
          <div>
            <div className="eyebrow">YOUR NEXT SWEET STOP</div>
            <h2>Delhi, we’re in<br/>your neighbourhood.</h2>
          </div>
          <p>Four little destinations for big cravings. Drop in for your afternoon pick-me-up or your late-night dessert fix.</p>
        </div>
        <div className="home-stores">
          {['Ashok Vihar', 'Shankar Road', 'Pitampura', 'Shalimar Bagh'].map((s, i) => (
            <Link href="/stores/" key={s}>
              <span>0{i+1}</span>
              <h3>{s}</h3>
              <span>11am – 1am</span>
            </Link>
          ))}
        </div>
        <div className="center" style={{marginTop: 35}}>
          <Link className="btn outline" href="/stores/">Explore our stores</Link>
        </div>
      </section>

      {/* Franchise Call To Action */}
      <section className="wrap" style={{paddingTop: 0}}>
        <div className="cta reveal">
          <div>
            <div className="eyebrow">LET’S GROW SOMETHING SWEET</div>
            <h2>Your city. Our desserts.<br/>A new chapter, together.</h2>
            <p>Be part of the next CookiePookie success story with 65% gross margins and high ROI.</p>
          </div>
          <Link className="btn pink" href="/franchise/">Become a franchisee</Link>
        </div>
      </section>
    </>
  );
}

