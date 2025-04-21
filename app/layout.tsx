import type React from 'react';
import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

import './globals.css';

export const metadata: Metadata = {
  title: 'Terrano - The ERP for modern businesses',
  description:
    'The most advanced ERP for modern businesses. No monthly fees. Powered by AI.',
  metadataBase: new URL('https://terrano.ai'),
  openGraph: {
    title: 'Terrano - The ERP for modern businesses',
    description:
      'The most advanced ERP for modern businesses. No monthly fees. Powered by AI.',
    type: 'website',
    images: [
      {
        url: '/images/og_image_min.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: 'Terrano - The ERP for modern businesses',
    description:
      'The most advanced ERP for modern businesses. No monthly fees. Powered by AI.',
    card: 'summary_large_image',
    images: ['/images/og_image_min.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleTagManager gtmId={'GTM-MTWNMJM8'} />
      <Script
        id="hotjarAnalytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:5364262,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
      <Script
        id="redditPixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','a2_gue9rxvmwf9b');rdt('track', 'PageVisit');
          `,
        }}
      />
    </html>
  );
}
