import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const NewsCard = ({ card, styles }: { card: any; styles: string }) => (
  <article
    className={`${styles} flex flex-col min-h-[400px] bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-800 ease-in-out`}>
    <div className="w-full h-56">
      <img
        className="object-cover object-center w-full h-full"
        src={card?.featuredImage?.src}
        srcSet={`${card?.featuredImage?.src}?w=300 1x, ${card?.featuredImage?.src} 2x`}
        width={300}
        height={300}
        alt={card?.featuredImage?.alt}
      />
    </div>

    <div className="flex flex-col p-4 gap-2">
      <h3 className="text-heading3 font-bold">{card.title}</h3>
      <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">{card.description}</p>
      <Link
        className="my-4 underline font-bold flex justify-center items-center"
        href={`/news/${card.slug}`}>
        <span>Read more</span>
        <svg
          className="mt-[6px]"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 16 16"
          id="chevron-right">
          <path
            fill="#212121"
            d="M7.14645,3.89645 C6.95118,4.09171 6.95118,4.40829 7.14645,4.60355 L10.2929,7.7499975 L7.14645,10.8964 C6.95118,11.0917 6.95118,11.4083 7.14645,11.6036 C7.34171,11.7988 7.65829,11.7988 7.85355,11.6036 L11.3536,8.10355 C11.5488,7.90829 11.5488,7.59171 11.3536,7.39645 L7.85355,3.89645 C7.65829,3.70118 7.34171,3.70118 7.14645,3.89645 Z"></path>
        </svg>
      </Link>
      <p className="text-gray-400 text-xs">{card.date.replace("T", " at ").slice(0, 10)}</p>
    </div>
  </article>
);

export default NewsCard;
