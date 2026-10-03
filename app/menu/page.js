import {PageHead, MenuCardsShowcase, MenuGrid, OnlineDeliveryStrip} from '../components';

export const metadata = {
  title: 'Our Menu',
  description: 'Explore the complete CookiePookie menu of soft baked cookies, Belgian waffles, mini pancakes, cold coffees, shakes and drinks.'
};

export default function Menu(){
  return (
    <section className="wrap inner-page-wrap">
      <PageHead eyebrow="OUR MENU" title="Something sweet. And then some.">
        Cookies, waffles, coffee and little moments of joy.
      </PageHead>
      
      <MenuCardsShowcase/>

      <OnlineDeliveryStrip/>

      <MenuGrid/>
    </section>
  );
}
