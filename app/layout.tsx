import type React from "react"
import type { Metadata } from "next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Terrano - Double revenue without doubling headcount",
  description:
    "Enterprise-grade AI Agents built specifically for banks and credit unions. Supercharge your team with AI Agents. Free up capacity by automating repetitive tasks",
  metadataBase: new URL("https://terrano.ai"),
  openGraph: {
    title: "Terrano - Double revenue without doubling headcount",
    description:
      "Enterprise-grade AI Agents built specifically for banks and credit unions. Supercharge your team with AI Agents. Free up capacity by automating repetitive tasks",
    type: "website",
    images: [
      {
        url: '/images/og_image_min.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Terrano - Double revenue without doubling headcount",
    description:
      "Enterprise-grade AI Agents built specifically for banks and credit unions. Supercharge your team with AI Agents. Free up capacity by automating repetitive tasks",
    card: "summary_large_image",
    images: ['/images/og_image_min.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

