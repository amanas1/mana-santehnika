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

    if (keywords) {
      setMeta('meta[name="keywords"]', "name", "keywords", keywords);
    }

    if (canonical) {
      setLink("canonical", canonical);
      setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    }

    // OG tags
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);

    if (ogImage) {
      const imgUrl = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;
      setMeta('meta[property="og:image"]', "property", "og:image", imgUrl);
    }

    // Twitter
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
