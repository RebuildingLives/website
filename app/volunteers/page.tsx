import SubPage from "@/components/sub-page/SubPage";
import React from "react";
import volunteersBanner from "@/public/images/volunteers-banner.webp";
import Article from "@/components/article/Article";
import RedLine from "@/components/red-line/RedLine";

const Volunteers = () => {
  return (
    <SubPage image={volunteersBanner} heading="Our heroes">
      <br />
      <Article>
        <h1 className="text-heading2 text-center">Volunteers</h1>
        <RedLine styles="mx-auto" />
        <p>
          Rebuilding Lives UK is incredibly fortunate to have an exceptional team of volunteers who
          contribute their time and expertise. Our accomplishment and positive impacts wouldn&apos;t
          have been possible without their dedication. We are incredibly grateful to volunteers who
          support us in a wide range of areas. These include marketing, social media, business
          management, public relations, media engagement, human resources, assessment coordination,
          site management, health and safety oversight, administration, fundraising, and trades.
        </p>
      </Article>
    </SubPage>
  );
};

export default Volunteers;
