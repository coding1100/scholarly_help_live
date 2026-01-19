import { GoogleTagManager } from "@next/third-parties/google";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Metadata } from "next";
import ClientScripts from "./components/ClientScripts";

// Optimize font loading - only load weights actually used
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], // Only load needed weights
  preload: true,
});

export const metadata: Metadata = {
  title: "Scholarly Help - Academic Writing Services For You",
  description: "Professional academic writing services tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS prefetch for third-party resources */}
        <link rel="dns-prefetch" href="https://accounts.google.com" />
        <link rel="dns-prefetch" href="https://cdn.livechatinc.com" />
      </head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        {children}
        
        {/* Defer Google Sign-In script - load after page */}
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="lazyOnload"
        />
        
        {/* GTM - already optimized by Next.js */}
        <GoogleTagManager gtmId="GTM-5ZHV46X" />
        
        {/* Schema.org - use afterInteractive instead of beforeInteractive */}
        <Script
          id="schema-org-main"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "http://schema.org/",
              "@type": "product",
              "name": "scholarlyhelp",
              "image": "./img/logonew.svg",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "15395"
              }
            }`,
          }}
          key="product-jsonld"
        />
        
        {/* Client-side scripts that need pathname */}
        <ClientScripts />
      </body>
    </html>
  );
}
