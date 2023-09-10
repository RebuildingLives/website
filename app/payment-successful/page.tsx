"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { thankYouMsgIcon } from "@/public/icons/iconsList";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Successful | Thank You for Your Support",
  description:
    "Your payment has been successfully processed. Thank you for your generous contribution in our mission to end domestic abuse.",
  alternates: {
    canonical: "payment-successful",
  },
};

const SuccessPayment = () => {
  const router = useRouter();
  const [secondsRemaining, setSecondsRemaining] = useState(5);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setSecondsRemaining(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);

  useEffect(() => {
    if (secondsRemaining === 0) router.push("/");
  }, [secondsRemaining]);

  return (
    <section className="flex items-center h-full sm:p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <Image src={thankYouMsgIcon.src} width={250} height={250} alt="sad face" />

        <p className="text-2xl">
          Thank You for Your Generous Donation! Your contribution will have a significant impact on
          our cause, and we are incredibly grateful for your support.
        </p>

        <p className="text-xl">Redirecting to the home page in {secondsRemaining} seconds...</p>
      </div>
    </section>
  );
};

export default SuccessPayment;
