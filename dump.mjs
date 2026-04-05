import fs from 'fs';
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8081', { waitUntil: 'networkidle0' });
  const html = await page.content();
  fs.writeFileSync('public/index_rendered.html', html);
  await browser.close();
})();
