import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Swathi G. — Product Portfolio | Senior Product Manager",
  description:
    "Senior Product Manager | B2B & B2C Platform Leader | AI-Driven Solutions | SaaS | FinTech | Retail Supply Chain | Strategic Growth. Explore case studies from 7-Eleven, TaxAct, Walmart, and more.",
  generator: "v0.app",
  openGraph: {
    title: "Swathi G. — Product Portfolio",
    description:
      "Senior Product Manager specializing in Payments, Platforms, AI, and Enterprise Products. Proven track record delivering measurable outcomes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swathi G. — Product Portfolio",
    description: "Senior Product Manager | B2B & B2C Platform Leader | AI-Driven Solutions",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
