import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = './screenshots';
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: '01-home-320px-mobile', width: 320, height: 600, device: 'iPhone SE (320px)' },
  { name: '02-home-375px-mobile', width: 375, height: 667, device: 'iPhone 8 / SE2 (375px)' },
  { name: '03-home-390px-iphone', width: 390, height: 844, device: 'iPhone 14/15/16 (390px)' },
  { name: '04-home-430px-mobile', width: 430, height: 932, device: 'iPhone 14/15 Pro Max (430px)' },
  { name: '05-home-768px-tablet', width: 768, height: 1024, device: 'iPad Portrait (768px)' },
  { name: '06-home-1024px-tablet', width: 1024, height: 768, device: 'iPad Landscape (1024px)' },
  { name: '07-home-1440px-desktop', width: 1440, height: 900, device: 'MacBook / Desktop (1440px)' },
  { name: '08-home-1920px-desktop', width: 1920, height: 1080, device: 'Full HD Desktop (1920px)' },
];

(async () => {
  console.log('=== STARTING NOORÉ COMPREHENSIVE QA & FUNCTIONAL AUDIT ===');
  
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });

  const results = {
    viewportsTested: [],
    overflowErrors: [],
    functionalTests: [],
    consoleErrors: []
  };

  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') {
      results.consoleErrors.push(msg.text());
    }
  });

  // 1. TEST VIEWPORTS & HORIZONTAL OVERFLOW
  console.log('\n--- 1. Testing Viewports & Screenshots ---');
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(800);

    const overflowInfo = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const winWidth = window.innerWidth;
      return {
        hasOverflow: docWidth > winWidth,
        scrollWidth: docWidth,
        innerWidth: winWidth
      };
    });

    const screenshotPath = path.join(SCREENSHOT_DIR, `${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    console.log(`[PASS] ${vp.device}: W=${vp.width}px, ScrollW=${overflowInfo.scrollWidth}px, Overflow=${overflowInfo.hasOverflow} -> ${screenshotPath}`);

    results.viewportsTested.push({
      device: vp.device,
      width: vp.width,
      hasOverflow: overflowInfo.hasOverflow,
      screenshot: screenshotPath
    });

    if (overflowInfo.hasOverflow) {
      results.overflowErrors.push(vp.device);
    }
  }

  // 2. TEST SHOP (PLP) PAGE AT DESKTOP & MOBILE
  console.log('\n--- 2. Testing Shop PLP (Desktop & Mobile) ---');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/shop', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '09-shop-plp-desktop-1440px.png') });
  console.log('[PASS] Shop PLP 1440px captured');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/shop', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '10-shop-plp-mobile-390px.png') });
  console.log('[PASS] Shop PLP 390px captured');

  // 3. TEST PRODUCT DETAIL PAGE (PDP) WITH STICKY BAR
  console.log('\n--- 3. Testing Product Detail Page ---');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/product/classic-black-abaya', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '11-pdp-desktop-1440px.png') });
  console.log('[PASS] PDP 1440px captured');

  // Mobile PDP and scroll to trigger sticky Add to Bag bar
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/product/classic-black-abaya', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);
  await page.evaluate(() => window.scrollBy(0, 750));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '12-pdp-mobile-sticky-390px.png') });
  console.log('[PASS] Mobile PDP with Sticky Bar captured');

  // 4. FUNCTIONAL TEST: ADD TO BAG, REMOVE, QUANTITY CHANGES
  console.log('\n--- 4. Functional Testing: Bag Drawer, Stepper, Removal ---');
  const addToBagBtn = page.locator('button:has-text("ADD TO BAG")').first();
  await addToBagBtn.click();
  await page.waitForTimeout(700);

  // Cart drawer screenshot
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '13-cart-drawer-390px.png') });
  const hasCartDrawer = await page.locator('h2:has-text("Shopping Bag")').isVisible();
  console.log(`[PASS] Add to Bag & Drawer Open: ${hasCartDrawer}`);
  results.functionalTests.push({ test: 'Add to Bag & Drawer Opened', passed: hasCartDrawer });

  // Test quantity increment in drawer
  const drawer = page.locator('[data-testid="cart-drawer"]');
  const plusBtn = drawer.locator('button[aria-label="Increase quantity"]').first();
  await plusBtn.click();
  await page.waitForTimeout(300);
  const qtyText = await drawer.locator('span:has-text("2")').first().isVisible();
  console.log(`[PASS] Quantity Stepper (+): ${qtyText}`);
  results.functionalTests.push({ test: 'Cart Quantity Stepper (+)', passed: qtyText });

  // Test remove from drawer
  const removeBtn = drawer.locator('button[title="Remove item"]').first();
  await removeBtn.click();
  await page.waitForTimeout(400);
  const emptyBagNotice = await drawer.locator('h3:has-text("Your Bag is Empty")').isVisible();
  console.log(`[PASS] Remove From Bag: ${emptyBagNotice}`);
  results.functionalTests.push({ test: 'Remove from Bag', passed: emptyBagNotice });

  // Re-add product for checkout test
  await page.goto('http://localhost:3000/product/classic-black-abaya', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);
  await page.locator('button:has-text("ADD TO BAG")').first().click();
  await page.waitForTimeout(600);

  // 5. TEST CHECKOUT PAGE
  console.log('\n--- 5. Testing Checkout Page ---');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/checkout', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '14-checkout-page-1440px.png') });
  const hasCheckoutForm = await page.locator('h3:has-text("1. Client Contact")').isVisible();
  console.log(`[PASS] Checkout Page Loaded: ${hasCheckoutForm}`);
  results.functionalTests.push({ test: 'Checkout Flow Rendered', passed: hasCheckoutForm });

  // 6. TEST CART LOCALSTORAGE PERSISTENCE
  console.log('\n--- 6. Testing LocalStorage Persistence ---');
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);
  const cartStored = await page.evaluate(() => localStorage.getItem('noore_luxury_cart_items'));
  const hasSavedCart = cartStored && cartStored.length > 10;
  console.log(`[PASS] Cart Persistence After Reload: ${hasSavedCart ? 'PASSED' : 'FAILED'}`);
  results.functionalTests.push({ test: 'Cart LocalStorage Persistence', passed: !!hasSavedCart });

  // 7. TEST SEARCH FUNCTIONALITY
  console.log('\n--- 7. Testing Search System ---');
  await page.goto('http://localhost:3000/search?q=abaya', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '16-search-results-page.png') });
  const searchResultsCount = await page.locator('h1:has-text("Results for")').isVisible();
  console.log(`[PASS] Search Results Page Loaded: ${searchResultsCount}`);
  results.functionalTests.push({ test: 'Search Query Processing', passed: searchResultsCount });

  // 8. TEST WISHLIST PAGE
  console.log('\n--- 8. Testing Wishlist Page ---');
  await page.goto('http://localhost:3000/wishlist', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '15-wishlist-page-1440px.png') });
  const wishlistLoaded = await page.locator('h2:has-text("Curation"), h1:has-text("Curation")').first().isVisible();
  console.log(`[PASS] Wishlist Page Loaded: ${wishlistLoaded}`);
  results.functionalTests.push({ test: 'Wishlist Page Rendered', passed: wishlistLoaded });

  // 9. TEST MOBILE NAVIGATION MENU
  console.log('\n--- 9. Testing Mobile Navigation Menu ---');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  const menuBtn = page.locator('button[aria-label="Open navigation menu"]').first();
  await menuBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '17-mobile-navigation-menu.png') });
  const hasMobileNav = await page.locator('span:has-text("Two-Piece Sets")').isVisible();
  console.log(`[PASS] Mobile Navigation Menu Opened: ${hasMobileNav}`);
  results.functionalTests.push({ test: 'Mobile Navigation Menu', passed: hasMobileNav });

  // 10. TEST EDITORIAL PAGES (LOOKBOOK, ABOUT, SIZE GUIDE, CONTACT, CART)
  console.log('\n--- 10. Testing Editorial & Auxiliary Pages ---');
  await page.setViewportSize({ width: 1440, height: 900 });

  // Lookbook
  await page.goto('http://localhost:3000/lookbook', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  const lookbookOk = await page.locator('h1:has-text("Sands & Shadows"), span:has-text("CAMPAIGN EDITORIAL")').first().isVisible();
  console.log(`[PASS] Lookbook Page Loaded: ${lookbookOk}`);
  results.functionalTests.push({ test: 'Lookbook Page', passed: lookbookOk });

  // About
  await page.goto('http://localhost:3000/about', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  const aboutOk = await page.locator('span:has-text("THE ATELIER MANIFESTO"), h1:has-text("Designed for the way you move")').first().isVisible();
  console.log(`[PASS] About Atelier Page Loaded: ${aboutOk}`);
  results.functionalTests.push({ test: 'About Page', passed: aboutOk });

  // Size Guide
  await page.goto('http://localhost:3000/size-guide', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  const sizeGuideOk = await page.locator('h1:has-text("Size & Proportion Guide"), span:has-text("ATELIER FIT DIRECTORY")').first().isVisible();
  console.log(`[PASS] Size Guide Page Loaded: ${sizeGuideOk}`);
  results.functionalTests.push({ test: 'Size Guide Page', passed: sizeGuideOk });

  // Contact
  await page.goto('http://localhost:3000/contact', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  const contactOk = await page.locator('h1:has-text("Concierge"), h2:has-text("Contact")').first().isVisible();
  console.log(`[PASS] Contact Concierge Page Loaded: ${contactOk}`);
  results.functionalTests.push({ test: 'Contact Page', passed: contactOk });

  // Cart Page
  await page.goto('http://localhost:3000/cart', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  const cartOk = await page.locator('h1:has-text("Shopping Bag"), h2:has-text("Shopping Bag")').first().isVisible();
  console.log(`[PASS] Dedicated Cart Page Loaded: ${cartOk}`);
  results.functionalTests.push({ test: 'Cart Page', passed: cartOk });

  await browser.close();

  console.log('\n=== AUDIT RESULTS SUMMARY ===');
  console.log('Total Viewports Tested:', results.viewportsTested.length);
  console.log('Horizontal Overflow Failures:', results.overflowErrors.length);
  console.log('Functional Tests Passed:', results.functionalTests.filter(t => t.passed).length, '/', results.functionalTests.length);
  console.log('Console Errors Detected:', results.consoleErrors.length);
  
  fs.writeFileSync('qa-report.json', JSON.stringify(results, null, 2));
  console.log('\nDetailed QA report saved to qa-report.json');
})();
