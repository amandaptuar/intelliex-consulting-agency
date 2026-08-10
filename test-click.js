const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to Industries
  await page.goto('http://localhost:5173/industries', { waitUntil: 'networkidle0' });
  
  // Listen for console errors or page crashes
  page.on('console', msg => {
    if (msg.type() === 'error') console.log('PAGE ERROR:', msg.text());
  });
  page.on('pageerror', err => {
    console.log('PAGE EXCEPTION:', err.toString());
  });

  // Click on the 4th tab (Retail)
  const tabs = await page.$$('.ind-tab');
  console.log('Found tabs:', tabs.length);
  
  if (tabs.length >= 4) {
    console.log('Clicking on Retail...');
    await tabs[3].click();
    await new Promise(r => setTimeout(r, 1000));
  }
  
  await browser.close();
})();
