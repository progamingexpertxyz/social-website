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
    "Product Design",
    "UI/UX Design",
    "Web Development",
    "Mobile App Development",
    "Software Development",
    "Digital Strategy",
    "Custom Software Solutions",
    "E-commerce Solutions",
  ],
  authors: [{ name: "SOCIAL." }],
  openGraph: {
    title: "We are end point for your digital needs.",
    type: "website",
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
