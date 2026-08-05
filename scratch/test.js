const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  await page.goto('http://localhost:5174/proposal', { waitUntil: 'networkidle2' });
  
  console.log("Page loaded. Checking for errors...");
  
  // Try to fill out form
  try {
    const btn = await page.$('.ai-submit');
    if (btn) {
      console.log("Form is visible, clicking submit...");
      // Fill required fields
      await page.type('input[name="companyName"]', 'Test Corp');
      await page.type('input[name="contactName"]', 'Test Name');
      await page.type('input[name="email"]', 'test@test.com');
      await page.type('input[name="phone"]', '1234567890');
      await page.select('select[name="industry"]', 'IT / Software');
      await page.select('select[name="serviceNeeded"]', 'Permanent Staffing');
      await page.select('select[name="roleLevel"]', 'Mid-Level / Manager');
      await page.type('input[name="numPositions"]', '5');
      await page.type('input[name="budget"]', '10 LPA');
      await page.type('input[name="location"]', 'Remote');

      await btn.click();
      
      await new Promise(r => setTimeout(r, 6000));
      console.log("Waited 6s after clicking submit.");
      
      // Let's screenshot to see what's on screen
      await page.screenshot({ path: 'screenshot.png' });
    }
  } catch (e) {
    console.log("Error interacting with page:", e.message);
  }

  await browser.close();
})();
