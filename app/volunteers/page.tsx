import SubPage from "@/components/sub-page/SubPage";
import React from "react";
import volunteersBanner from "@/public/images/volunteers-banner.webp";
import Article from "@/components/article/Article";
import Image from "next/image";
import thankYouCard1 from "@/public/images/Thank you-card-from-survivors-children.webp";
import thankYouCard2 from "@/public/images/survivor-thank you card.webp";

const Volunteers = () => {
  return (
    <SubPage image={volunteersBanner} heading="Our heroes">
      <br />
      <h1 className="text-heading2 text-center">Volunteers</h1>
      <Article>
        <p>
          Rebuilding Lives UK is incredibly fortunate to have an exceptional team of volunteers who
          contribute their time and expertise. Our accomplishment and positive impacts wouldn&apos;t
          have been possible without their dedication. We are incredibly grateful to volunteers who
          support us in a wide range of areas. These include marketing, social media, business
          management, public relations, media engagement, human resources, assessment coordination,
          site management, health and safety oversight, administration, fundraising, and trades.
        </p>
      </Article>
      <br />
      <Article>
        <h2 className="text-heading2 text-center">Survivor Stories</h2>
        <p>
          It is not only the survivors themselves who are at the forefront of these statements, but
          also the many families we have helped. The following are only a few of the survivor
          stories that embody our commitment to helping domestic abuse survivors. These individuals
          and families transcend the label of mere survivors; they embody resilient warriors. In
          order to maintain anonymity, all names have been withheld. Please note that the
          forthcoming narrative may evoke distress in certain readers.
        </p>
      </Article>
      <br />
      <div className="flex flex-wrap justify-center items-center gap-12 my-12 ">
        <div className="h-96 w-96">
          <Image
            className="h-full object-fit"
            src={thankYouCard1.src}
            width={thankYouCard1.width}
            height={500}
            placeholder="blur"
            blurDataURL={thankYouCard1.blurDataURL}
            alt="Thank you card from survivors children"
          />
        </div>

        <div className="h-96 w-96">
          <Image
            className="h-full object-fit transform -rotate-90"
            src={thankYouCard2.src}
            width={thankYouCard2.width}
            height={500}
            placeholder="blur"
            blurDataURL={thankYouCard2.blurDataURL}
            alt="thank you card from survivor"
          />
        </div>
      </div>
      <br />
      <Article>
        <h2 className="text-heading2 text-center">Survivor J story</h2>
        <p>
          Upon arrival, signs of violence were evident at the beneficiary’s house, particularly
          upstairs, where her partner had caused extensive damage. Having repaired the electrical
          system, Naima and Jess began plastering together.{" "}
        </p>
        <p>
          Generous support came from an established celebrity donation and volunteers. British
          Gypsum provided plastering materials. And Rebekeh from Whittington Building offered her
          time. The survivor’s retired neighbours assisted with the bathroom. The new doors were
          kindly donated by Howdens. Local staff member Andy organised the donation, delivery and
          connected us with Newfield Timbers for floorboards. Howarth Timber also provided crucial
          materials, with special thanks to Scott for coordination and Dom for delivery. Mike from
          P&J Joinery Ltd donated the staircase.
        </p>
        <p>
          Volunteers completed joinery tasks, with Naima Ben-moussa managing charity duties and
          hands-on work. Dulux’s paint decoration enabled the survivor to decorate and pay
          electrical expenses.
        </p>
      </Article>
    </SubPage>
  );
};

export default Volunteers;
