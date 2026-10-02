import {PageHead} from '../components';
import {story} from '../data';
import Link from 'next/link';

export const metadata = {
  title: 'Our Story',
  description: 'The CookiePookie story — how a passion for great desserts created a growing modern bakery and cafe brand.'
};

export default function Story(){
  return (
    <>
      <section className="wrap inner-page-wrap">
        <PageHead eyebrow="THE COOKIEPOOKIE STORY" title="Made of sweet little moments.">
          A simple belief. A growing dream. A whole lot of dessert.
        </PageHead>
        
        <div className="split reveal" style={{marginTop: 40}}>
          <img src="/assets/1.webp" alt="Cookie Pookie storefront and mascot in New Delhi"/>
          <div>
            <div className="eyebrow">WHERE IT ALL BEGAN</div>
            <h2>Great desserts.<br/>Lasting memories.</h2>
            <p>{story[0]}</p>
            <p>{story[1]}</p>
          </div>
        </div>
      </section>

      <section className="wrap story-text-wrap" style={{paddingTop: 0}}>
        <div className="story">
          {story.slice(2).map(t => (
            <p className="reveal" key={t}>{t}</p>
          ))}
          <h3 className="story-tagline">Cookie Pookie — Creating the next generation of dessert experiences.</h3>
        </div>
      </section>

      <section className="pink-section">
        <div className="wrap reveal">
          <div className="eyebrow">WHAT STAYS AT OUR HEART</div>
          <h2>Every creation. Every store.</h2>
          <div className="values">
            {[
              ['01 / Taste', 'Desserts worth coming back for.'],
              ['02 / Quality', 'An uncompromising commitment to every creation.'],
              ['03 / Innovation', 'New flavours, formats and experiences to discover.']
            ].map(([title, desc]) => (
              <div className="value" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <Link href="/stores/" className="btn" style={{marginTop: 35}}>
            Find your happy place
          </Link>
        </div>
      </section>
    </>
  );
}
