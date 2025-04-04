import type React from 'react';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import './globals.css';

export const metadata: Metadata = {
  title: 'Terrano - The ERP for modern businesses',
  description:
    'The most advanced ERP for modern businesses. Completely free. Powered by AI.',
  metadataBase: new URL('https://terrano.ai'),
  openGraph: {
    title: 'Terrano - The ERP for modern businesses',
    description:
      'The most advanced ERP for modern businesses. Completely free. Powered by AI.',
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
      'The most advanced ERP for modern businesses. Completely free. Powered by AI.',
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
      <GoogleAnalytics gaId={'G-GLD4MP5ZN8'} />
    </html>
  );
}
