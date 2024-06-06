import { type Metadata } from 'next';

const TITLE = 'Good news everyone! Global News Aggregator - Your Infinite Feed of World News.';
const DESCRIPTION = `
  Stay updated with the latest world news from diverse sources.
  Our global news aggregator provides an endless stream of articles, ensuring you never miss a story.
  Dive into the infinite feed of breaking news, analysis, and updates from around the globe.
`;
const SITE_NAME = process.env.NEXT_PUBLIC_APP_NAME;
const IMAGE = '/assets/favicons/web/favicon.png';

export function generateHomePageMetadata(): Metadata {
  return {
    title: TITLE,
    description: DESCRIPTION,
    applicationName: 'Good News Everyone',
    keywords: 'world news,news aggregator,latest news,global news,news articles,breaking news',
    verification: {
      google: process.env.NEXT_SERVER_APP_VERIFICATION_GOOGLE,
      me: process.env.NEXT_SERVER_APP_VERIFICATION_ME,
    },
    openGraph: {
      type: 'website',
      url: process.env.NEXT_SERVER_APP_ORIGIN,
      title: TITLE,
      description: DESCRIPTION,
      siteName: SITE_NAME,
      images: IMAGE,
    },
    metadataBase: new URL(process.env.NEXT_SERVER_APP_ORIGIN),
  };
}
