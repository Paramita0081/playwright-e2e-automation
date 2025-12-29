import { Given, When, Then,setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../fixtures/fixture";
import * as Pages from "../pages/index";
//mport { defineConfig } from "@playwright/test";

//baseURL: process.env.BASEURL;


setDefaultTimeout(60 * 1000 * 2)

let multiWinPage: Pages.MultiWindowPage;

Given('user navigates to page', async function()  {
      await fixture.page.goto(process.env.BASEURL);
      fixture.logger.info("Navigated to the application");
 });

When('I click on "Multiple Windows" link to open a new window', async function () {
    multiWinPage = new Pages.MultiWindowPage(fixture.page);
    await multiWinPage.multipleWindowsLink.click();
});

Then('Handle new window and assert header', async function () {
    await multiWinPage.clickHereLink.click();
});

Then('Assert the header on the first new window', async function () {
   await multiWinPage.verifyHeaderText();
});

/*Then('close all opened windows',async ({multiWindowPage})=> {
    await multiWindowPage.closeBrowser();
});*/