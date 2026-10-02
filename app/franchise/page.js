import {FranchiseForm} from '../components';
import {Store, Compass, IndianRupee, TrendingUp, Calendar} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Become a Franchise Partner',
  description: 'Join CookiePookie as a franchise partner. Bring our signature cookies, Belgian waffles, and desserts to your city.'
};

const franchiseTerms = [
  {
    icon: Store,
    title: 'Expansion Format',
    value: 'Kiosk/Store'
  },
  {
    icon: Compass,
    title: 'Area Required',
    value: '100-400 Sq. Ft'
  },
  {
    icon: IndianRupee,
    title: 'Total Investment',
    value: 'INR 15-25 Lakhs'
  },
  {
    icon: IndianRupee,
    title: 'Franchise Fee',
    value: 'INR 5-6 Lakhs'
  },
  {
    icon: TrendingUp,
    title: 'Gross Margins',
    value: '50% (Approx)'
  },
  {
    icon: Calendar,
    title: 'Average ROI',
    value: '24 Months'
  }
];

export default function Franchise(){
  return (
    <>
      <section className="hero franchise-hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">BECOME A COOKIEPOOKIE FRANCHISE</div>
            <h1>Let’s make<br/>life a little<br/><em>sweeter.</em></h1>
            <p>Join a growing dessert brand and bring the CookiePookie experience to your neighbourhood.</p>
            <a href="#enquire" className="btn">Become a partner</a>
          </div>
          <div className="hero-photo">
            <img src="/assets/1.webp" alt="Cookie Pookie store exterior and mascot" fetchPriority="high"/>
            <div className="photo-tag">
              <span>THE NEXT CHAPTER</span>
              <strong>Could start with you.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap reveal">
        <div className="eyebrow">GROW WITH COOKIEPOOKIE</div>
        <div className="section-top">
          <h2>Become a partner.</h2>
          <p>A modern dessert brand built on innovation, quality and consistency — with four stores in Delhi and a vision to reach more dessert lovers.</p>
        </div>
        <p className="franchise-intro">
          From signature cookies and Belgian waffles to coffee and refreshing drinks, CookiePookie brings everyday indulgence together in one destination. We’re looking forward to conversations with people who share our passion for exceptional taste and memorable experiences.
        </p>
        
        {/* Franchise Terms & Metrics Grid */}
        <div className="franchise-metrics-grid">
          {franchiseTerms.map((term, index) => {
            const IconComponent = term.icon;
            return (
              <div className="franchise-metric-card" key={index}>
                <div className="metric-icon-circle">
                  <IconComponent size={24} strokeWidth={2}/>
                </div>
                <div className="metric-info">
                  <h3>{term.title}</h3>
                  <span>{term.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pink-section">
        <div className="wrap reveal">
          <div className="eyebrow">WHY COOKIEPOOKIE?</div>
          <h2>A shared appetite<br/>for something great.</h2>
          <div className="values">
            <div className="value">
              <h3>A menu for every mood</h3>
              <p>Cookies, waffles, pancakes, coffee, shakes and more — a wide world of everyday treats.</p>
            </div>
            <div className="value">
              <h3>Quality at the centre</h3>
              <p>Exceptional taste, consistency and memorable experiences guide the brand as it grows.</p>
            </div>
            <div className="value">
              <h3>Always inventing</h3>
              <p>New flavours, formats and experiences keep the CookiePookie story moving forward.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap reveal">
        <div className="eyebrow">LET’S EXPLORE YOUR OPPORTUNITY</div>
        <h2>From first conversation<br/>to your next chapter.</h2>
        <p style={{marginTop: 20}}>Talk to our team about the partnership and support available for your location.</p>
        <div className="support">
          {[
            ['01', 'Site selection', 'Discuss your preferred city, catchment and potential location.'],
            ['02', 'Store setup', 'Explore the store format, design and setup requirements.'],
            ['03', 'Marketing', 'Discuss launch plans and brand marketing opportunities.'],
            ['04', 'Training', 'Learn about preparation, service and operating standards.'],
            ['05', 'Ongoing support', 'Understand the support and responsibilities within the partnership.']
          ].map(([n, t, d]) => (
            <article key={n}>
              <div className="eyebrow">{n}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="enquire" className="pink-section">
        <div className="wrap form-layout">
          <div>
            <div className="eyebrow">YOUR COOKIEPOOKIE JOURNEY STARTS HERE</div>
            <h2>Let’s bring<br/>the happy<br/>to your city.</h2>
            <p>Share your details and preferred location to start a franchise conversation with our team.</p>
            <p>Prefer a call?<br/><a className="contact-number" href="tel:+919355683343">+91 93556 83343</a></p>
            <img className="enquiry-image" loading="lazy" src="/assets/3.webp" alt="Cookie Pookie store location and mascot"/>
          </div>
          <FranchiseForm/>
        </div>
      </section>
    </>
  );
}
