import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

interface SubPageProps {
  children: React.ReactNode;
  image: StaticImageData;
  heading: string;
}

const SubPage = ({ children, image, heading }: SubPageProps) => {
  return (
    <section>
      <div className="relative h-[28rem]">
        <Image
          className="h-full object-cover"
          src={image.src}
          alt="about us banner"
          width={image.width}
          height={image.height}
          placeholder="blur"
          blurDataURL={image.blurDataURL}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-white text-heading font-medium text-center">
          {heading}
        </h1>
        <br />
      </div>
      {children}
    </section>
  );
};

export default SubPage;
