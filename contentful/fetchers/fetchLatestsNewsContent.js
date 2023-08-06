import contentfulClient from "../contentfulClient";
import { parseContentfulContentImage } from "../contentImage";

export function parseContentfulLatesNews(LatesNews) {
  if (!LatesNews) {
    return null;
  }

  return {
    title: LatesNews.fields.title || "",
    description: LatesNews.fields.description || null,
    date: LatesNews.fields.publishedDate || "",
    featuredImage: parseContentfulContentImage(LatesNews.fields.featuredImage),
    slug: LatesNews.fields.slug,
  };
}

export const fetchLatesNewsContent = async ({ preview }) => {
  const contentful = contentfulClient({ preview });

  const latesNews = await contentful.getEntries({
    content_type: "latestNews",
    include: 2, // ????
    // how many news u wanna fetch ?
    order: ["fields.publishedDate"],
  });

  return latesNews.items.map(news => parseContentfulLatesNews(news));
};

export const fetchSingleNews = async ({ slug, preview }) => {
  const contentful = contentfulClient({ preview });

  const latestNewsResult = await contentful.getEntries({
    content_type: "latestNews",
    "fields.slug": slug,
    include: 2,
  });

  return parseContentfulLatesNews(latestNewsResult.items[0]);
};
