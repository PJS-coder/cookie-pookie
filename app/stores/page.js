import {PageHead, StoreCards} from '../components';

export const metadata = {
  title: 'Our Stores',
  description: 'Visit CookiePookie stores across New Delhi in Ashok Vihar, Shankar Road, Pitampura, and Shalimar Bagh. Open daily 11am to 1am.'
};

export default function Stores(){
  return (
    <>
      <section className="wrap inner-page-wrap">
        <PageHead eyebrow="COME OVER. STAY FOR DESSERT." title="A little closer to happy.">
          Find CookiePookie across Delhi. All four stores welcome you every day, from 11am to 1am.
        </PageHead>
        
        <div style={{marginTop: 40}}>
          <StoreCards/>
        </div>
      </section>

      <section className="pink-section">
        <div className="wrap center">
          <div className="eyebrow">SOMETHING ON YOUR MIND?</div>
          <h2>We’d love to hear from you.</h2>
          <p style={{margin: '22px 0'}}>For store enquiries or feedback, say hello to our team.</p>
          <a className="btn" href="tel:+919355683343">Call +91 93556 83343</a>
        </div>
      </section>
    </>
  );
}
