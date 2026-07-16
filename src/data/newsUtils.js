import { newsArticles } from "./news";

/**
 * Returns only news articles whose publication date has already passed.
 * This is used for programmatic daily indexing and automated scheduled releases.
 */
export function getPublishedNews() {
  const now = new Date();
  return newsArticles.filter(art => new Date(art.date) <= now);
}
