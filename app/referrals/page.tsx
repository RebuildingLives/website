import SubPage from "@/components/sub-page/SubPage";
import React from "react";
import referralsBanner from "@/public/images/referral-banner.webp";
import Article from "@/components/article/Article";
import Image from "next/image";
import NCDVlogo from "@/public/icons/NCDV-yellow.webp";

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="green"
    width="24"
    height="24"
    viewBox="0 0 512 512"
    id="tick">
    <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-32.1 281.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z"></path>
  </svg>
);

const listItems = [
  {
    title: `Download our free`,
    text: "NCDV app",
    link: "https://play.google.com/store/apps/details?id=com.app.ncdv&hl=en_US",
  },
  {
    title: `Email us at `,
    text: "office@ncdv.org.uk",
    link: "mailto:office@ncdv.org.uk",
  },
  {
    title: `Call us on `,
    text: "0800 970 2070",
    link: "tel:0800 970 2070",
  },
  {
    title: `Text us NCDV to `,
    text: "60777",
    link: "sms:60777",
  },
];

const Referrals = () => {
  return (
    <SubPage image={referralsBanner} heading="Empowering Survivors">
      <Article>
        <br />
        <h1 className="text-heading2 text-center">Referral process</h1>
        <p>
          As a blossoming charity, we are committed to constant learning and evolution in our
          mission to support as many survivors as possible through trauma-informed practices.
        </p>
        <p>
          To achieve this, we collaborate closely with established agencies, sharing knowledge and
          resources while relying on their referrals to help those in greatest need. Our approach
          prioritises safety and support for our peers throughout the process.
        </p>

        <p>
          Looking ahead, we envision expanding our impact through public donations and the
          generosity of our trusted tradespeople. With deep gratitude, we thank you for your support
          and contributions as we forge ahead and grow. Kindness is the antidote to abuse, and it is
          within the reach of every individual. Together, we can create a brighter, more
          compassionate future.
        </p>
        <div className="float-right">
          <Image
            className="float-left mr-4"
            src={NCDVlogo}
            width={100}
            height={100}
            alt="NCDV logo"
          />
          <p>
            NCDV statement- The National Centre for Domestic Violence (NCDV) is a fast, free
            emergency injunction service for survivors of domestic abuse and violence regardless of
            their financial circumstances, race, gender or sexual orientation. Our free services
            allows anyone who has recently experienced or threatened with domestic abuse or violence
            to apply for an emergency court injunction. There are many ways to make a referral to
            NCDV.
          </p>
        </div>
        <br />
        <br />
        <br />
        <h3 className="text-heading3 text-center">
          Complete our online referral form at{" "}
          <a className="text-primary-clr" href="www.ncdv.org.uk" target="_blank" rel="noopener">
            www.ncdv.org.uk
          </a>
        </h3>
        <ul className="space-y-4">
          {listItems.map(item => (
            <li key={item.text} className="flex items-center text-xl">
              <span>{icon}</span>
              <a href={item.link ?? ""} rel="noopener" target="_blank">
                {item.title} <span className="text-primary-clr font-bold">{item.text ?? ""}</span>
              </a>
            </li>
          ))}
        </ul>
      </Article>
    </SubPage>
  );
};

export default Referrals;
