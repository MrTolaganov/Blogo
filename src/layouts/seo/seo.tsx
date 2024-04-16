import Head from "next/head";
import { SeoProps } from "./seo.props";
import { siteConfig } from "../../config/site.config";

export default function SEO({
  metaTitle = siteConfig.metaTitle,
  metaKeywords = siteConfig.metaKeywords,
  author = siteConfig.author,
  metaDescription = siteConfig.metaDescription,
  children,
}: SeoProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="keyword" content={metaKeywords} />
        <meta name="author" content={author} />
        <meta name="description" content={metaDescription} />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>{metaTitle}</title>
      </Head>
      {children}
    </>
  );
}
