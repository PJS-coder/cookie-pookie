import {PageHead, StoreCards} from '../components';

export const metadata = {
  title: 'Our Stores',
  description: 'Visit CookiePookie stores across New Delhi in Ashok Vihar, Shankar Road, and Pitampura (Open daily 11am to 1am), plus Shalimar Bagh coming soon!'
};

export default function Stores(){
  return (
    <>
      <section className="wrap inner-page-wrap">
        <PageHead eyebrow="COME OVER. STAY FOR DESSERT." title="A little closer to happy.">
          Find CookiePookie across Delhi. Ashok Vihar, Shankar Road, and Pitampura welcome you daily from 11am to 1am, with Shalimar Bagh coming soon!
        </PageHead>
        
        <div style={{marginTop: 40}}>
          <StoreCards/>
        </div>
      </section>

      <section className="pink-section" style={{marginTop: 60}}>
        <div className="wrap center">
          <div className="eyebrow">SOMETHING ON YOUR MIND?</div>
          <h2>We’d love to hear from you.</h2>
          <p style={{margin: '22px 0'}}>For store enquiries, bulk party orders, or feedback, say hello to our team.</p>
          <a className="btn" href="tel:+919355683343">Call +91 93556 83343</a>
        </div>
      </section>
    </>
  );
}

