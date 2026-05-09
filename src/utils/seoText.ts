type ServiceCopy = {
  id: string;
  title: string;
  description: string;
  price: string;
  time?: string;
  image: string;
  alt: string;
  seoTitle?: string;
  category?: string;
  longDescription?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
};

const normalizeText = (value: string) => value.replace(/\s+/g, " ").replace(/\s+([.,!?;:])/g, "$1").trim();

export const cleanServiceCopy = <T extends ServiceCopy>(service: T): T => ({
  ...service,
  title: normalizeText(service.title),
  description: normalizeText(service.description),
  price: normalizeText(service.price),
  alt: normalizeText(service.alt),
  time: service.time ? normalizeText(service.time) : service.time,
  seoTitle: service.seoTitle ? normalizeText(service.seoTitle) : service.seoTitle,
  secondaryImageAlt: service.secondaryImageAlt ? normalizeText(service.secondaryImageAlt) : service.secondaryImageAlt,
});
