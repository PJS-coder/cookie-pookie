# CookiePookie

A frontend-only Next.js website, using React and CSS transitions. No backend or database is required.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The static site is exported to `out/` and can be hosted on any static web host.

## Pages

Home, menu, story, stores, franchise. Product information and prices are in `app/data.js`; photography is in `public/assets/`. The hero includes slideshow controls, pause-on-hover/focus, and reduced-motion support.

The franchise enquiry form prepares a WhatsApp message. Nothing is sent automatically, and no form data is saved by the website. Investment, fee, space and return figures require confirmation from the business; no competitor financial claims are used.

Images and brand assets supplied by the client. Some products have no matching supplied photograph and are shown as text cards. Waffle cakes are marked coming soon, following the supplied menu.
