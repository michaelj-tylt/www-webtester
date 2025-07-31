import type { Metadata } from "next";
import { Geist_Mono, Contrail_One, Inter, Oswald } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "../shared/analytics";
import { createMetadata, LdJsonScript } from "../shared/metadata";
import { PostHogProvider } from './providers';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const contrailOne = Contrail_One({
  variable: "--font-contrail-one",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...createMetadata({
    title: "Tylt - Real intelligence. Real desktop. Real work.",
    description: "Tylt is a digital worker that handles real computer tasks in the browser and on the desktop - just like a person would. No code. No scripts. Just done.",
    keywords: [
      "website usability testing",
      "functional web testing", 
      "web testing automation",
      "analytics tag testing",
      "GTM tag validation",
      "browser automation testing",
      "automation",
      "AI automation",
      "task automation", 
      "computer automation",
      "workflow automation",
      "business productivity",
      "AI assistant",
      "digital workforce",
      "desktop automation",
      "QA automation",
      "functional testing",
      "Tylt",
    ],
    url: "https://whytylt.com",
    ldJsonType: "SoftwareApplication",
    ldJsonData: {
      "@type": "SoftwareApplication",
      applicationCategory: "BusinessApplication",
      operatingSystem: ["Windows", "macOS", "Linux"],
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        eligibleRegion: "US"
      },
      creator: {
        "@type": "Organization",
        name: "Tylt",
        url: "https://whytylt.com",
        logo: "https://whytylt.com/brand-logo.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "San Francisco",
          addressRegion: "CA",
          addressCountry: "US"
        }
      },
      featureList: [
        "Website usability testing automation",
        "Functional web testing",
        "Analytics tag validation",
        "GTM tag testing", 
        "Browser automation",
        "Desktop task automation",
        "No-code automation platform"
      ]
    }
  }),
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      }
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      }
    ]
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <LdJsonScript config={{
          title: "Tylt - Real intelligence. Real desktop. Real work.",
          description: "Tylt is a digital worker that handles real computer tasks in the browser and on the desktop - just like a person would. No code. No scripts. Just done.",
          keywords: [
            "website usability testing",
            "functional web testing", 
            "web testing automation",
            "analytics tag testing",
            "GTM tag validation",
            "browser automation testing",
            "automation",
            "AI automation",
            "task automation", 
            "computer automation",
            "workflow automation",
            "business productivity",
            "AI assistant",
            "digital workforce",
            "desktop automation",
            "QA automation",
            "functional testing",
            "Tylt",
          ],
          url: "https://whytylt.com",
          ldJsonType: "SoftwareApplication"
        }} />
      </head>
      <body
        className={`${geistMono.variable} ${contrailOne.variable} ${inter.variable} ${oswald.variable} antialiased`}
      >
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
