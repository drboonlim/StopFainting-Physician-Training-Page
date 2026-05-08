import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "StopFainting | POTS Physician Training — Dr Boon Lim",
  description:
    "The definitive physician training resource for Postural Orthostatic Tachycardia Syndrome (POTS). Evidence-based protocols, diagnostic criteria, and management guidelines by Dr Boon Lim, Consultant Cardiologist.",
  keywords:
    "POTS, Postural Orthostatic Tachycardia Syndrome, physician training, diagnosis, management, Dr Boon Lim, syncope, dysautonomia",
  openGraph: {
    title: "StopFainting | POTS Physician Training",
    description:
      "Evidence-based POTS training for physicians and healthcare professionals by Dr Boon Lim.",
    type: "website",
    url: "https://stopfainting.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
