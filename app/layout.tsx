import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { DisclaimerDialog } from "@/components/disclaimer/DisclaimerDialog";
import { DisclaimerProvider, SiteShell } from "@/components/disclaimer/DisclaimerProvider";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { app, site } from "@/content/site";
import { revealReadyScript } from "@/lib/reveal-script";
import { buildStructuredData, jsonLdString } from "@/lib/structured-data";
import "./globals.css";

// Self-hosted fallback for SF Pro (Apple devices use SF Pro from the system).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "legal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
    // Image comes from app/opengraph-image.jpg
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    // Image comes from app/twitter-image.jpg
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    // Phone numbers are linked explicitly; stop iOS from auto-linking other digits (e.g. the stats).
    telephone: false,
  },
  appleWebApp: {
    title: site.shortName,
  },
  // Safari's Smart App Banner for the Legacy Lawyers app, once the App Store id is set in content/site.ts.
  ...(app.appStoreId ? { itunes: { appId: app.appStoreId } } : {}),
  // TODO: after verifying the domain in Google Search Console, add: verification: { google: "<token>" },
};

export const viewport: Viewport = {
  themeColor: "#161617",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.language}
      data-scroll-behavior="smooth"
      className={inter.variable}
      // The inline script below adds a class to <html> before React loads.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealReadyScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(buildStructuredData()) }}
        />
        <DisclaimerProvider>
          {/* First in the document so keyboard and screen-reader users meet it first, and it shows first without JavaScript. */}
          <DisclaimerDialog />
          <SiteShell>{children}</SiteShell>
        </DisclaimerProvider>
        <RevealObserver />
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              "<style>#disclaimer{position:static!important;background:none!important;padding:16px!important;backdrop-filter:none!important}#disclaimer button{display:none}body{overflow:auto!important}</style>",
          }}
        />
      </body>
    </html>
  );
}
