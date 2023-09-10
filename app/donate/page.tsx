import DonateBox from "@/components/donate-box/DonateBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Survivors | Donate to End Domestic Abuse",
  description: "Join us in making a difference. Donate to support survivors of domestic abuse and help rebuild lives. Your contribution matters.",
  alternates: {
    canonical: "donate",
  },
};

const Donate = () => {
  return (
    <div className="my-12">
      {/* @ts-ignore */}
      <DonateBox />
    </div>
  );
};

export default Donate;
