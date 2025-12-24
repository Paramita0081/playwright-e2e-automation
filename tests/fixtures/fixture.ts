import { test as base} from "playwright-bdd";
import * as Pages from  "../pageobjects/index";

type PageFixtures = {
   multiWindowPage: Pages.MultiWindowPage;
}

export const test = base.extend<PageFixtures>({
 multiWindowPage: async ({ page }, use) => {
   const multiWindowPageObj = new Pages.MultiWindowPage(page);
   await use(multiWindowPageObj);
   }
});

//export const { Given, When, Then, After } = createBdd(test);
//export { expect } from "@playwright/test";