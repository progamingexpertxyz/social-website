import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SOCIAL.",
  description:
    "Expert in design, Development, and Strategy for Your Digital Products.",
  keywords: [
    "FlutterFlow",
    "MVP Development",
    "Product Design",
    "Mobile App Design",
    "User Experience Design",
  ],
  authors: [{ name: "Kaleo Design" }],
  openGraph: {
    title: "Kaleo Design - Apps don't build themselves. We do.",
    description:
      "Expert FlutterFlow Development, MVP Development, and Exceptional Product Design.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaleo Design - Apps don't build themselves. We do.",
    description:
      "Expert FlutterFlow Development, MVP Development, and Exceptional Product Design.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className={`${figtree.className} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
