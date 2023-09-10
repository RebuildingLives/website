import Footer from "@/components/footer/Footer";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import { Inter, Bebas_Neue } from "next/font/google";
import { draftMode } from "next/headers";
import ExitDraftModeLink from "./ExitDraftModeLink";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rebuilding Lives | Supporting Survivors of Domestic Abuse",
  description:
    "Rebuilding Lives UK provides practical support and positive change for survivors. Join us in making a difference today.",

  metadataBase: new URL("https://rebuildinglives.netlify.app/"),
  alternates: {
    canonical: "https://rebuildinglives.netlify.app/",
  },
  verification: {
    google: "google-site-verification=idhere",
  },
  openGraph: {
    title: "Rebuilding Lives | Supporting Survivors of Domestic Abuse",
    description:
      "Rebuilding Lives UK provides practical support and positive change for survivors. Join us in making a difference today.",
    url: "https://rebuildinglives.netlify.app/",
    siteName: "Rebuilding Lives | Supporting Survivors of Domestic Abuse",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
        alt: "Rebuilding Lives Banner",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export const inter = Inter({
  display: "swap",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  display: "swap",
  style: ["normal"],
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="relative">
        {draftMode().isEnabled && (
          <p className="bg-orange-200 py-4 px-[6vw]">
            Draft mode is on! <ExitDraftModeLink className="underline" />
          </p>
        )}
        <Navigation />
        <div className="w-3/4 mx-auto h-[1px] bg-gray-300"></div>
        {children}
        <Analytics />

        <Footer />
      </body>
    </html>
  );
}
