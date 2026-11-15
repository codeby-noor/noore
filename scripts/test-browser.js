import { chromium } from 'playwright';

(async () => {
  console.log('Testing Playwright launch with system Chrome...');
  try {
    const browser = await chromium.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      headless: true
    });
    console.log('Chrome launched successfully via Playwright!');
    const page = await browser.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    const title = await page.title();
    console.log('Page Title:', title);
    await page.screenshot({ path: 'test-chrome.png' });
    console.log('Screenshot saved to test-chrome.png');
    await browser.close();
  } catch (err) {
    console.error('Launch error:', err);
  }
})();

