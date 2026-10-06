import {FranchiseForm, WhatsAppIcon, MailIcon, InstagramIcon, FacebookIcon} from '../components';
import {
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  TrendingUp,
  PackageCheck,
  Leaf,
  Store,
  GraduationCap,
  Megaphone,
  Flame,
  ShoppingBag
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Franchisee Business Opportunities',
  description: 'Join CookiePookie as a franchisee. Benefit from 65% gross margins, low capex, fast ROI (18-24 months), and turnkey store setup across Delhi NCR and India.'
};

const kpiItems = [
  {
    title: 'Expected Capex',
    value: '₹15 - ₹20 Lacs',
    sub: 'Low Initial Setup'
  },
  {
    title: 'Area Required',
    value: '100 - 300 Sq. Ft',
    sub: 'Kiosk / High Street'
  },
  {
    title: 'ROI Timeline',
    value: '18 - 24 Months',
    sub: 'Fast Payback Period'
  },
  {
    title: 'Gross Margin',
    value: '65%',
    sub: 'High Unit Economics',
    isHighlight: true
  },
  {
    title: 'Store ROI',
    value: 'High Return',
    sub: 'Quick Break-even'
  }
];

const resilientPoints = [
  {
    icon: TrendingUp,
    tag: '⚡ 18–24 Mo Payback',
    title: 'High ROI & Fast Break-Even',
    desc: 'Low initial capital expenditure, optimized kitchen layout, and quick gestation period allow franchise outlets to break even rapidly and recover capital in 18 to 24 months.'
  },
  {
    icon: PackageCheck,
    tag: '📦 Chef-Less Ops',
    title: 'Standardized Supply & Zero Wastage',
    desc: 'Our central facility supplies standardized premixes and packaging directly to store doorsteps, eliminating reliance on master chefs and reducing food wastage to near zero.'
  },
  {
    icon: Leaf,
    tag: '🌱 100% Pure Veg',
    title: '100% Eggless Pure Vegetarian Menu',
    desc: 'Universal appeal across families, students, and corporate catchments with signature soft baked cookies, Belgian waffles, mini pancakes, thick shakes, and artisanal coffee.'
  },
  {
    icon: Store,
    tag: '📐 Turnkey Setup',
    title: 'Turnkey Site Selection & 3D Store Setup',
    desc: 'Comprehensive guidance from catchment footfall evaluation and lease negotiation to architectural 3D interior drawings and commercial equipment installation.'
  },
  {
    icon: GraduationCap,
    tag: '☕ Hands-on SOPs',
    title: 'Staff & Barista Training Program',
    desc: 'Extensive on-site training covering kitchen SOPs, baking consistency, beverage craft, cloud POS management, hygiene standards, and customer delight protocols.'
  },
  {
    icon: Megaphone,
    tag: '📣 Brand Power',
    title: 'Continuous Marketing & Aggregators',
    desc: 'High-impact grand opening campaigns, food influencer collaborations, targeted social media ads, and optimized store visibility on Zomato & Swiggy.'
  },
  {
    icon: Flame,
    tag: '✨ Organic Walk-Ins',
    title: 'Live Baking Aroma & Sensory Pull',
    desc: 'Fresh on-site baking of warm cookies and waffles creates an enticing aroma that draws in high organic walk-in footfall throughout the day and late night.'
  },
  {
    icon: ShoppingBag,
    tag: '💳 4 Revenue Channels',
    title: 'Omnichannel Revenue Streams',
    desc: 'Triple your revenue potential with strong in-store dine-in footfall, fast takeaway counter sales, party bulk orders, and high-volume online deliveries.'
  }
];

const investmentTableData = [
  { component: 'Total Investment Required', amount: 'INR 15 to 22 Lakhs (approx.)' },
  { component: 'Franchise Fee', amount: 'INR 5 Lakhs + GST' },
  { component: 'Ongoing Royalty', amount: '4%' },
  { component: 'Agreement Tenure', amount: '5 Years (Renewable)' },
  { component: 'Store Formats Available', amount: 'Kiosk / High Street Café / Mall Food Court' }
];

const onboardingSteps = [
  {
    num: '01',
    title: 'Enquire',
    desc: 'Fill out the franchise enquiry form. Our expansion team will get in touch within 24 hours to discuss your preferred city and location.'
  },
  {
    num: '02',
    title: 'Discuss & Finalise',
    desc: 'Connect for a detailed consultation to evaluate catchment feasibility, unit economics, format requirements, and finalize the franchise agreement.'
  },
  {
    num: '03',
    title: 'Setup & Training',
    desc: 'Complete turnkey store execution including 3D design, equipment installation, raw material stocking, and extensive hands-on staff & barista training.'
  },
  {
    num: '04',
    title: 'Grand Launch',
    desc: 'Grand opening with marketing campaigns, food influencer visits, Zomato/Swiggy delivery onboarding, and continuous operational guidance.'
  }
];

export default function Franchise(){
  return (
    <div className="franchise-page-root">
      
      {/* Hero Section: Left content (new rich layout), Right full top-to-bottom image */}
      <section className="hero franchise-hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>
              Let’s make<br />
              life a little<br />
              <em>sweeter.</em>
            </h1>

            <div className="hero-feature-pills">
              <span className="hero-pill">⚡ Low Capex</span>
              <span className="hero-pill">📈 Payback 18–24 Mos</span>
              <span className="hero-pill highlight">✨ 65% Gross Margin</span>
              <span className="hero-pill">🎯 Fast Breakeven</span>
            </div>

            <p>
              Join a growing dessert brand with 65% gross margins, high returns, and bring the CookiePookie experience to your neighbourhood.
            </p>

            <div className="franchise-hero-actions">
              <a href="#enquire" className="btn pink" style={{display: 'inline-flex', alignItems: 'center', gap: 8}}>
                <span>Apply for Franchise</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/919355683343?text=Hi%20CookiePookie!%20Please%20share%20the%20Franchisee%20Deck%20and%20Business%20Model."
                target="_blank"
                rel="noopener noreferrer"
                className="btn outline"
                style={{display: 'inline-flex', alignItems: 'center', gap: 8}}
              >
                <WhatsAppIcon size={16} />
                <span>Talk to Franchise Team ↗</span>
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/assets/1.webp" alt="Cookie Pookie store exterior and mascot" fetchPriority="high" />
            <div className="photo-tag">
              <span>THE NEXT CHAPTER</span>
              <strong>Could start with you.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 5 KPI / Why Opportunity Stands Out */}
      <section className="wrap franchise-standout-section reveal">
        <div>
          <span className="standout-badge-pill-pink">HIGH ROI BUSINESS MODEL</span>
          <h2 className="franchise-pink-title">Why This Franchise Business Opportunity Stands Out</h2>
          <p className="franchise-section-intro">
            CookiePookie is engineered for sustainable profitability with high sales density, simple chef-less operations, and strong customer retention.
          </p>
        </div>

        <div className="kpi-cards-grid-pink">
          {kpiItems.map((kpi, idx) => (
            <div className={`kpi-card-pink ${kpi.isHighlight ? 'kpi-highlighted' : ''}`} key={idx}>
              <div className="kpi-card-pink-top">
                {kpi.title}
              </div>
              <div className="kpi-card-pink-bottom">
                <span className="kpi-card-pink-value">{kpi.value}</span>
                <span className="kpi-card-pink-sub">{kpi.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Makes Our Model Resilient & Scalable - Clean Normal Text Design */}
      <section className="franchise-resilient-section-pink">
        <div className="wrap reveal">
          <div className="center">
            <span className="standout-badge-pill-pink">HIGH EFFICIENCY & SCALABILITY</span>
            <h2 className="franchise-pink-title">
              What Makes Our Franchise Business Model<br/>Resilient & Scalable
            </h2>
            <p className="franchise-section-intro">
              Every element of the CookiePookie store format has been engineered to maximize return on investment while eliminating operational friction.
            </p>
          </div>

          <div className="resilient-normal-text-grid">
            {resilientPoints.map((pt, idx) => (
              <div className="resilient-text-item" key={idx}>
                <div className="resilient-text-num">{idx + 1}.</div>
                <div className="resilient-text-body">
                  <h3 className="resilient-text-title">{pt.title}</h3>
                  <p className="resilient-text-desc">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="resilient-action-row">
            <a href="#enquire" className="btn pink" style={{display: 'inline-flex', alignItems: 'center', gap: 8}}>
              <span>Become a Franchisee</span>
              <ArrowRight size={16} />
            </a>
            <a 
              href="https://wa.me/919355683343?text=Hi%20CookiePookie!%20Please%20share%20the%20Franchisee%20Deck%20and%20Business%20Model."
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn outline"
              style={{display: 'inline-flex', alignItems: 'center', gap: 8}}
            >
              <WhatsAppIcon size={16} />
              <span>Talk to Franchise Team ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Investment Breakdown Table */}
      <section className="wrap franchise-investment-section-pink reveal">
        <div>
          <div className="eyebrow">TRANSPARENT FINANCIALS</div>
          <h2 className="franchise-pink-title">Investment Breakdown</h2>
          <p className="franchise-section-intro">
            Clear, transparent commercial structure with complete turnkey support.
          </p>
        </div>

        <div className="investment-table-pink">
          <table>
            <thead>
              <tr>
                <th>Cost Component</th>
                <th>Amount & Terms</th>
              </tr>
            </thead>
            <tbody>
              {investmentTableData.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.component}</strong></td>
                  <td>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <small style={{display: 'block', marginTop: 14, color: '#765d54', textAlign: 'center'}}>
          *Total investment may vary based on exact carpet area, site condition, electrical load, and city catchment.
        </small>
      </section>

      {/* How to Get Started - 4 Simple Steps */}
      <section className="franchise-steps-section-pink">
        <div className="wrap reveal">
          <div className="center">
            <div className="eyebrow">SIMPLE ONBOARDING JOURNEY</div>
            <h2 className="franchise-pink-title">How to Get Started: 4 Simple Steps</h2>
            <p className="franchise-section-intro">
              We make the journey from initial enquiry to opening day fast, structured, and completely hassle-free.
            </p>
          </div>

          <div className="steps-cards-grid-pink">
            {onboardingSteps.map((s, idx) => (
              <div className="step-card-pink" key={idx}>
                <div className="step-number-tag-pink">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="center" style={{marginTop: 36}}>
            <a href="#enquire" className="btn pink">Apply for Franchise</a>
          </div>
        </div>
      </section>

      {/* Dark Brand Credibility & Support Pillars */}
      <section className="franchise-dark-banner">
        <div className="wrap reveal">
          <div>
            <div className="eyebrow" style={{color: '#ff9aa2'}}>PROVEN TRACK RECORD</div>
            <h2 style={{color: '#ffffff'}}>Why CookiePookie</h2>
          </div>

          <div className="dark-stats-row">
            <div className="dark-stat-col">
              <span className="dark-stat-big-num">4+</span>
              <span className="dark-stat-caption">Bustling Delhi Outlets</span>
            </div>
            <div className="dark-stat-col">
              <span className="dark-stat-big-num">100k+</span>
              <span className="dark-stat-caption">Happy Orders Served</span>
            </div>
            <div className="dark-stat-col">
              <span className="dark-stat-big-num">65%</span>
              <span className="dark-stat-caption">High Gross Margin</span>
            </div>
            <div className="dark-stat-col">
              <span className="dark-stat-big-num">50+</span>
              <span className="dark-stat-caption">Signature Menu SKUs</span>
            </div>
          </div>

          <div className="dark-pillars-row">
            <div className="dark-pillar-box">
              <h4>Site Selection</h4>
              <p>Thorough catchment analysis, high-footfall demographic profiling, and rental negotiation guidance.</p>
            </div>
            <div className="dark-pillar-box">
              <h4>Turnkey Setup</h4>
              <p>Complete 3D layout, kitchen workflow design, commercial equipment sourcing, and branding fit-outs.</p>
            </div>
            <div className="dark-pillar-box">
              <h4>Marketing Support</h4>
              <p>Aggressive local launch campaigns, food influencer collaborations, and optimized Zomato/Swiggy setup.</p>
            </div>
            <div className="dark-pillar-box">
              <h4>Training & SOPs</h4>
              <p>Comprehensive barista training, baking recipes, inventory management, and customer delight standards.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Franchise Enquiry Form Section */}
      <section id="enquire" className="franchise-enquiry-section">
        <div className="wrap form-layout reveal">
          <div>
            <div className="eyebrow">TAKE THE NEXT STEP</div>
            <h2 className="franchise-pink-title">
              Let’s bring CookiePookie<br/>to your city.
            </h2>
            <p style={{marginTop: 16, color: '#573e36', lineHeight: 1.6, fontSize: 16}}>
              Fill out the franchisee application form and our franchise expansion team will connect with you to discuss feasibility and opportunities.
            </p>

            <div className="franchise-sidebar-card" style={{marginTop: 24}}>
              <h3>Direct Contact Information</h3>
              
              <div className="franchise-quick-item">
                <div className="franchise-quick-icon">
                  <Phone size={18}/>
                </div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <a href="tel:+919355683343">+91 93556 83343</a>
                </div>
              </div>

              <div className="franchise-quick-item">
                <div className="franchise-quick-icon">
                  <MailIcon size={18}/>
                </div>
                <div>
                  <strong>Official Franchise Email</strong>
                  <a href="mailto:Hello@cookiepookieindia.com">Hello@cookiepookieindia.com</a>
                </div>
              </div>

              <div className="franchise-quick-item">
                <div className="franchise-quick-icon">
                  <MapPin size={18}/>
                </div>
                <div>
                  <strong>Registered Office</strong>
                  <p>Shop No. 18–19, Shaheed Udham Singh Marg, Block AL, Poorbi Shalimar Bagh, Delhi – 110088</p>
                </div>
              </div>
            </div>

            <div style={{marginTop: 20}}>
              <img 
                className="enquiry-image" 
                loading="lazy" 
                src="/assets/store-1.png" 
                alt="CookiePookie store aesthetic"
                style={{borderRadius: 16, width: '100%', height: 210, objectFit: 'cover'}}
              />
            </div>
          </div>

          <FranchiseForm/>
        </div>
      </section>

    </div>
  );
}
