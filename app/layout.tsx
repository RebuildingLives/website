import Footer from "@/components/footer/Footer";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import { Inter, Bebas_Neue } from "next/font/google";
import { draftMode } from "next/headers";
import ExitDraftModeLink from "./ExitDraftModeLink";

export const metadata = {
  title: "Rebuilding Lives",
  description:
    "Rebuilding Lives UK helps survivors of domestic abuse rebuild their lives by repairing damage to their homes, providing security measures, and offering emotional support.",
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
        {/* <main>{children}</main> */}
        <Footer />
      </body>
    </html>
  );
}
