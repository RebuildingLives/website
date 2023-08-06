import icon1 from "@/public/icons/1.webp";
import icon2 from "@/public/icons/2.webp";
import icon3 from "@/public/icons/3.webp";
import icon4 from "@/public/icons/4.webp";
import icon5 from "@/public/icons/5.webp";
import { StaticImageData } from "next/image";

interface Icon {
  icon: StaticImageData;
  title: string;
}

export const data: Icon[] = [
  { icon: icon1, title: "Kindness" },
  { icon: icon2, title: "Empathy" },
  { icon: icon3, title: "Commitment to Quality" },
  { icon: icon4, title: "Value Lived Experience" },
  { icon: icon5, title: "People Driven" },
];
