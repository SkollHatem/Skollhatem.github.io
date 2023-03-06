// Type imports
import type { ManifestOptions } from "vite-plugin-pwa";

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  baseURL: "https://example.com", // Change this to your production URL.
  description:
    "Astro PWA Starter is an opionated Astro starter for building robust static websites.", // Change this to be your website's description.
  type: "website",
  image: {
    url: "https://picsum.photos/1200/630", // Change this to your website's thumbnail.
    alt: "OpenGraph thumbnail description.", // Change this to your website's thumbnail description.
    width: 1200,
    height: 630,
  },
  siteName: "Astro PWA Starter", // Change this to your website's name,
  twitter: {
    card: "summary_large_image",
  },
};

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: "Emmanuel Villegas", // Change this to your website's name.
  short_name: "Emmanuel Villegas", // Change this to your website's short name.
  description:
    "Astro PWA Starter is an opionated Astro starter for building robust static websites.", // Change this to your websites description.
  theme_color: "#ffffff", // Change this to your primary color.
  background_color: "#ffffff", // Change this to your background color.
  display: "standalone",
  icons: [
    {
      src: "/favicons/android-icon-36x36.png",
      sizes: "36x36",
      type: "image/png",
      density: "0.75",
    },
    {
      src: "/favicons/android-icon-48x48.png",
      sizes: "48x48",
      type: "image/png",
      density: "1.0",
    },
    {
      src: "/favicons/android-icon-72x72.png",
      sizes: "72x72",
      type: "image/png",
      density: "1.5",
    },
    {
      src: "/favicons/android-icon-96x96.png",
      sizes: "96x96",
      type: "image/png",
      density: "2.0",
    },
    {
      src: "/favicons/android-icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
      density: "3.0",
    },
    {
      src: "/favicons/android-icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
      density: "4.0",
    },
  ],
};
