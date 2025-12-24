import { test, expect } from "@playwright/test";

test.describe("Multiple Windows Handling", () => {
  test("Navigate and handle multiple windows",{tag:"@mcpTest"}, async ({ page, context }) => {
    // Step 1: Navigate to the site
    await page.goto("https://the-internet.herokuapp.com/");
    
    // Step 2: Click on "Multiple Windows" link
    await page.click("text=Multiple Windows");
    await page.waitForLoadState();

    // Step 3: Handle new window and assert header
    const pagePromise = context.waitForEvent("page");
    await page.click("text=Click Here");
    const newPage1 = await pagePromise;
    await newPage1.waitForLoadState();

    // Assert the header on the first new window
    const header1 = newPage1.locator("h3");
    await expect(header1).toContainText("New Window");

   
    // Cleanup
    await newPage1.close();
   
  });
});
