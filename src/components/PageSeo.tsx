import { Helmet } from "react-helmet-async";

type PageSeoProps = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
};

function toAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return origin ? `${origin}${path.startsWith("/") ? path : `/${path}`}` : path;
}

export function PageSeo({
  title,
  description,
  keywords,
  image = "/images/logo-main.png",
  type = "website",
}: PageSeoProps) {
  const ogImage = toAbsoluteUrl(image);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
