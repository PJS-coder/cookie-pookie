'use client';
import { useState } from 'react';
import { Award, ZoomIn, X } from 'lucide-react';

export default function AwardSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="wrap award-clean-section reveal" id="awards">
      <div className="award-clean-grid">
        {/* Certificate Image Frame */}
        <div className="award-clean-media">
          <div 
            className="award-clean-frame"
            onClick={() => setLightboxOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxOpen(true); }}
            aria-label="Click to enlarge award certificate"
          >
            <img
              src="/assets/certificate.jpeg"
              alt="Cookie Pookie Wins Iconic Cookies and Desserts Delhi 2026 - Certificate"
              className="award-clean-img"
              loading="lazy"
            />
            <div className="award-clean-zoom-hint">
              <ZoomIn size={16} />
              <span>Click to enlarge</span>
            </div>
          </div>
        </div>

        {/* Award Content */}
        <div className="award-clean-content">
          <div className="eyebrow">HONOURS &amp; RECOGNITION</div>
          
          <h2 className="award-clean-title">
            Cookie Pookie Wins Iconic Cookies &amp; Desserts – Delhi 2026
          </h2>

          <p className="award-clean-subtitle">
            Recognised for Excellence in Cookies &amp; Desserts
          </p>

          <div className="award-clean-paragraphs">
            <p>
              Cookie Pookie is proud to announce that we have been honoured with the prestigious <strong>“Iconic Cookies and Desserts – Delhi 2026”</strong> award at the Times of India F&amp;B Conclave.
            </p>
            <p>
              This recognition celebrates our passion for creating indulgent treats, delivering memorable dessert experiences, and continuously innovating in the world of cookies and desserts. From our signature cookies to our much-loved waffles and other delightful creations, Cookie Pookie strives to bring quality, creativity, and happiness to every bite.
            </p>
            <p>
              This milestone reflects the trust and love of our customers, the dedication of our team, and our vision to build a leading dessert brand that continues to grow and delight dessert lovers across India.
            </p>
            <p>
              We extend our heartfelt gratitude to our customers, partners, and team members for being an integral part of our journey.
            </p>
          </div>

          <div className="award-clean-quote">
            <p>
              <strong>This award is not just a milestone; it is a motivation to dream bigger, innovate further, and make every Cookie Pookie experience truly iconic.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Simple Image Lightbox */}
      {lightboxOpen && (
        <div 
          className="certificate-lightbox"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-backdrop" />
          <button 
            className="lightbox-close-btn"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <div className="lightbox-clean-container" onClick={(e) => e.stopPropagation()}>
            <img
              src="/assets/certificate.jpeg"
              alt="Cookie Pookie Award Certificate"
              className="lightbox-clean-img"
            />
          </div>
        </div>
      )}
    </section>
  );
}
