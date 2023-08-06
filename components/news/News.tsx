import Link from "next/link";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { fetchLatesNewsContent } from "@/contentful/fetchers/fetchLatestsNewsContent";
import NewsCard from "./NewsCard";

const commonStyles =
  "col-span-2 md:col-span-1 xl:col-span-2 row-span-1 shadow-md border-t-primary-clr border-t-8";

const News = async () => {
  const latestsNews = await fetchLatesNewsContent({ preview: draftMode().isEnabled });

  if (!latestsNews) {
    return notFound();
  }

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center">
      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary-clr uppercase rounded-full">
        Breaking News
      </p>
      <h2 className="mb-6 text-heading2 text-center">
        Success Stories: How Your Donations are Transforming Lives
      </h2>
      <br />
      <p className="text-base md:text-lg">
        Stay up-to-date with the latest developments and breakthroughs at Rebuilding Lives. From
        innovative projects to partnerships that expand our reach, this section keeps you informed
        about how we are continuously working to address pressing issues and bring about positive
        change.
      </p>
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-8">
        {latestsNews.map((news, index) => {
          const styles =
            index === 0 || index === 5
              ? commonStyles
              : `col-span-2 md:col-span-1 row-span-1 shadow-md border-t-8`;

          return <NewsCard key={index} card={news} styles={styles} />;
        })}
      </div>
      {/* <br />
      <Link href="/" className="text-right underline">
        All articles
      </Link> */}
    </section>
  );
};

export default News;
