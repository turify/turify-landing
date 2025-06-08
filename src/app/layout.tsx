import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turify - Open Source AI Tools",
  description: "Discover Turify's open source AI tools for prompt optimisation and diagram generation. Featuring Turify Prompts and Turify Diagrams - empowering developers with cutting-edge AI development tools.",
  keywords: ["AI tools", "open source", "prompt optimisation", "diagram generation", "GenAI", "development tools"],
  authors: [{ name: "Turify Team" }],
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/favicon/safari-pinned-tab.svg", color: "#5bbad5" }
    ]
  },
  openGraph: {
    title: "Turify - Open Source AI Tools",
    description: "Empowering developers with cutting-edge AI tools for prompt optimisation and diagram generation.",
    url: "https://turify.dev",
    siteName: "Turify",
    type: "website",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Turify Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Turify - Open Source AI Tools",
    description: "Empowering developers with cutting-edge AI tools for prompt optimisation and diagram generation.",
    images: ["/favicon/android-chrome-512x512.png"]
  },
  other: {
    "msapplication-TileColor": "#00a300",
    "msapplication-config": "/favicon/browserconfig.xml",
    "theme-color": "#ffffff"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00a300" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
