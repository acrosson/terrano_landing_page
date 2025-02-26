import type React from "react"
import type { Metadata } from "next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Terrano - Cut your bank's efficiency ratio in half!",
  description:
    "Enterprise-grade AI Agents built specifically for banks and credit unions. Free up human capital by automating repetitive tasks and consolidating fragmented data.",
  metadataBase: new URL("https://terrano.ai"),
  openGraph: {
    title: "Terrano - Cut your bank's efficiency ratio in half!",
    description:
      "Enterprise-grade AI Agents built specifically for banks and credit unions. Free up human capital by automating repetitive tasks and consolidating fragmented data.",
    type: "website",
  },
  twitter: {
    title: "Terrano - Cut your bank's efficiency ratio in half!",
    description:
      "Enterprise-grade AI Agents built specifically for banks and credit unions. Free up human capital by automating repetitive tasks and consolidating fragmented data.",
    card: "summary_large_image",
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

