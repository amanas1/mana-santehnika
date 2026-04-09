declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackConversion = () => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17951263989/Jon9CMG315gcEPWZ6u9C",
    });
  }
};
