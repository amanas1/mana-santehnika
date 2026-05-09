import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

const BASE_URL = "https://mana.kz";

const SEO = ({ title, description, keywords, canonical, ogImage, schema }: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set/create meta tag
    const setMeta = (selector: string, attr: string, value: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to set/create link tag
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta('meta[name="author"]', "name", "author", "Мастер Манас");
    setMeta('meta[name="geo.region"]', "name", "geo.region", "KZ-75");
    setMeta('meta[name="geo.placename"]', "name", "geo.placename", "Алматы");
    setMeta('meta[name="format-detection"]', "name", "format-detection", "telephone=yes");

    if (keywords) {
      setMeta('meta[name="keywords"]', "name", "keywords", keywords);
    }

    if (canonical) {
      setLink("canonical", canonical);
      setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    }

    // OG tags
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:locale"]', "property", "og:locale", "ru_RU");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Мастер Манас — Сантехник Алматы");
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);

    if (ogImage) {
      const imgUrl = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;
      setMeta('meta[property="og:image"]', "property", "og:image", imgUrl);
      setMeta('meta[name="twitter:image"]', "name", "twitter:image", imgUrl);
    }

    // Twitter
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    // JSON-LD Schema
    if (schema) {
      const existingScript = document.querySelector('script[data-seo-schema]');
      if (existingScript) existingScript.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-schema", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical, ogImage, schema]);

  return null;
};

export default SEO;
