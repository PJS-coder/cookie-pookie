import {PageHead, ContactForm, InstagramIcon, FacebookIcon, WhatsAppIcon, MailIcon} from '../components';
import {Phone, MapPin, Clock, MessageSquare, ArrowRight} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with CookiePookie. Reach out via email at Hello@cookiepookieindia.com, phone at +91 93556 83343, or visit our Delhi stores in Ashok Vihar, Shankar Road, Pitampura, and Shalimar Bagh.'
};

export default function Contact(){
  return (
    <>
      <section className="wrap inner-page-wrap">
        <PageHead eyebrow="SAY HELLO" title="We’d love to connect.">
          Whether you have a question about our desserts, bulk catering orders, store feedback, or just want to say hi — we’re always here for you.
        </PageHead>

        {/* Contact Info & Message Form Grid */}
        <div className="contact-layout-grid">
          
          {/* Left: Contact Detail Cards */}
          <div className="contact-cards-stack">
            
            {/* Email Card */}
            <div className="contact-info-card">
              <div className="contact-icon-bubble">
                <MailIcon size={22}/>
              </div>
              <div className="contact-card-content">
                <h3>Email Us</h3>
                <p>For general inquiries, catering, or feedback:</p>
                <a href="mailto:Hello@cookiepookieindia.com" style={{fontWeight: 700, color: '#a8354b', marginTop: 4, display: 'inline-block'}}>
                  Hello@cookiepookieindia.com
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="contact-info-card">
              <div className="contact-icon-bubble">
                <Phone size={22}/>
              </div>
              <div className="contact-card-content">
                <h3>Call & WhatsApp</h3>
                <p>Direct line for instant store & order assistance:</p>
                <div style={{marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 12}}>
                  <a href="tel:+919355683343" style={{fontWeight: 700, color: '#a8354b'}}>
                    +91 93556 83343
                  </a>
                  <a href="https://wa.me/919355683343" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: 4, color: '#27ae60', fontWeight: 700}}>
                    <WhatsAppIcon size={16}/> WhatsApp Chat ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="contact-info-card">
              <div className="contact-icon-bubble">
                <MapPin size={22}/>
              </div>
              <div className="contact-card-content">
                <h3>Registered Office</h3>
                <p>
                  Shop No. 18–19, Shaheed Udham Singh Marg, Block AL, Poorbi Shalimar Bagh, Delhi – 110088
                </p>
                <div style={{marginTop: 8, fontSize: 13, color: '#8c736c', display: 'flex', alignItems: 'center', gap: 6}}>
                  <Clock size={14}/> Open 7 days a week · 11am – 1am
                </div>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="contact-info-card">
              <div className="contact-icon-bubble">
                <MessageSquare size={22}/>
              </div>
              <div className="contact-card-content">
                <h3>Follow Our Sweet Journey</h3>
                <p>Stay updated with our latest creations, offers, and store launches:</p>
                <div className="contact-social-row">
                  <a 
                    href="https://www.instagram.com/cookiepookiecookie?stkn=aHpkcGRxOWRqaWUx&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    title="Instagram @cookiepookiecookie"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={18}/>
                  </a>
                  <a 
                    href="https://www.facebook.com/cookiepookiecookie" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    title="Facebook @cookiepookiecookie"
                    aria-label="Facebook"
                  >
                    <FacebookIcon size={18}/>
                  </a>
                  <a 
                    href="https://wa.me/919355683343" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    title="WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon size={18}/>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-container">
            <ContactForm/>
          </div>

        </div>
      </section>

      {/* Franchise Callout */}
      <section className="pink-section" style={{marginTop: 60}}>
        <div className="wrap center reveal">
          <div className="eyebrow">EXPANSION OPPORTUNITY</div>
          <h2>Interested in opening a CookiePookie?</h2>
          <p style={{margin: '18px auto', maxWidth: 620}}>
            Join our high-growth dessert brand with 65% gross margins and high ROI. Explore our turnkey franchise model.
          </p>
          <Link className="btn pink" href="/franchise/" style={{display: 'inline-flex', alignItems: 'center', gap: 8}}>
            <span>Explore Franchisee Model</span>
            <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </>
  );
}
