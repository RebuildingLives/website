import { verySadEmotionFaceIcon } from "@/public/icons/iconsList";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rebuilding Lives | Supporting Survivors of Domestic Abuse",
  description: "Payment unsuccessful. Please try again or contact support for assistance.",
  alternates: {
    canonical: "payment-unsuccessful",
  },
};

const CancelledPayment = () => {
  return (
    <section className="flex items-center h-full sm:p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <Image src={verySadEmotionFaceIcon.src} width={250} height={250} alt="sad face" />
        <p className="text-2xl">
          We see you decided not to proceed with the donation. If there&apos;s anything we can do to
          make the donation process easier or more transparent, please let us know.
        </p>
      </div>
    </section>
  );
};

export default CancelledPayment;
