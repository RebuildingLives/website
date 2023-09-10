import Article from "@/components/article/Article";
import SubPage from "@/components/sub-page/SubPage";
import React from "react";
import Image from "next/image";
import thankYouCard1 from "@/public/images/Thank you-card-from-survivors-children.webp";
import thankYouCard2 from "@/public/images/survivorthankyoucard.webp";
import survivorsStoryBanner from "@/public/images/survivorsstorybanner.webp";
import RedLine from "@/components/red-line/RedLine";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survivors' Stories | Inspiring Journeys of Resilience",
  description: "Explore the inspiring stories of survivors who have overcome domestic abuse. Discover their journeys of resilience, strength, and hope.",
  alternates: {
    canonical: "survivors-stories",
  },
};


const SurvivorsStory = () => {
  return (
    <SubPage image={survivorsStoryBanner} heading="Survivor Stories">
      <Article>
        <br />
        <h1 className="text-heading2 text-center">Breaking the Chains</h1>
        <RedLine styles="mx-auto" />
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
            height={thankYouCard1.height}
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
            height={thankYouCard2.height}
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
      <br />
    </SubPage>
  );
};

export default SurvivorsStory;
