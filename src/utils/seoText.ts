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
  searchDescription?: string;
};

const normalizeText = (value: string) => value.replace(/\s+/g, " ").replace(/\s+([.,!?;:])/g, "$1").trim();
const toFirstPerson = (value: string) => normalizeText(value)
  .replace("Мы быстро найдем и устраним", "Я найду и устраню")
  .replace("Используем", "Использую")
  .replace("Обеспечиваем", "Обеспечу")
  .replace("Вернем", "Верну")
  .replace("Устраняем", "Устраняю")
  .replace("Приведем", "Приведу")
  .replace(/\bin\b/g, "в")
  .replace(/\bwith\b/g, "с");

export const cleanServiceCopy = <T extends ServiceCopy>(service: T): T => ({
  ...service,
  title: normalizeText(service.title),
  description: toFirstPerson(service.description),
  price: normalizeText(service.price),
  alt: normalizeText(service.alt),
  time: service.time ? normalizeText(service.time) : service.time,
  seoTitle: service.seoTitle ? normalizeText(service.seoTitle) : service.seoTitle,
  searchDescription: service.searchDescription ? normalizeText(service.searchDescription) : service.searchDescription,
  secondaryImageAlt: service.secondaryImageAlt ? normalizeText(service.secondaryImageAlt) : service.secondaryImageAlt,
});
