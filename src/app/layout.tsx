import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mabombaadvisory.vercel.app"),
  title: "Mabomba Advisory — Clear routes to commercial growth",
  description: "Practical advisory for mobility, fleet and e-hailing businesses and consumer brands in South Africa.",
  openGraph: {
    title: "Mabomba Advisory",
    description: "Practical advisory for mobility, fleet and e-hailing businesses and consumer brands in South Africa.",
    url: "https://mabombaadvisory.vercel.app",
    siteName: "Mabomba Advisory",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mabomba Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mabomba Advisory",
    description: "Practical advisory for mobility, fleet and e-hailing businesses.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E1E1E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-sand text-charcoal">
        {children}
      </body>
    </html>
  );
}
