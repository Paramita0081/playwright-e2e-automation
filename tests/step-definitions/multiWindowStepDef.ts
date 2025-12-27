import {expect,chromium,Browser} from '@playwright/test';
import { WebActions } from '../../utils/WebActions';
import { log } from '../helpers/logger';
import { test } from '../fixtures/fixture';
import { createBdd } from 'playwright-bdd'

const {Given, When, Then} = createBdd(test);
let webActions: WebActions;


Given('user navigates to home page',async ({multiWindowPage})=> {
    await multiWindowPage.navigateToHomePage();
});

When('I click on "Multiple Windows" link to open a new window', async ({multiWindowPage})=> {
    await multiWindowPage.multipleWindowsLink.click()
});

Then('Handle new window and assert header', async ({multiWindowPage})=> {
    await multiWindowPage.clickHereLink.click();
});

Then('Assert the header on the first new window', async ({multiWindowPage})=> {
   await multiWindowPage.verifyHeaderText();
});

/*Then('close all opened windows',async ({multiWindowPage})=> {
    await multiWindowPage.closeBrowser();
});*/