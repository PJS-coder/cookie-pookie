import './globals.css';
import ScrollReset from './scroll-reset';
import {Header,Footer,Motion} from './components';
export const metadata = {
  title: {
    default: 'CookiePookie — A little bite. A lot of happy.',
    template: '%s | CookiePookie'
  },
  description: 'Soft baked cookies, Belgian waffles, coffee and more. Explore CookiePookie’s menu, visit our four Delhi stores, or become a franchise partner.',
  icons: {
    icon: '/assets/favicon.png',
    apple: '/assets/favicon.png',
  }
};
export default function Layout({children}){return <html lang="en"><body><ScrollReset/><Header/><main id="main">{children}</main><Footer/><Motion/></body></html>}
