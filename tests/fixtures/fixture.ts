import { test as base, createBdd } from "playwright-bdd";
import * as Pages from "../pageobjects/index";
import { Page } from "playwright-core";

type PageFixtures = {
  multiWindowPage: Pages.MultiWindowPage;
};

const createTestFunction =
  <T extends new (page: Page) => InstanceType<T>>(PageClass: T) =>
  (
    { page }: { page: Page },
    use: (fixture: InstanceType<T>) => Promise<void>
  ) =>
    use(new PageClass(page));

export const test = base.extend<PageFixtures>({
  multiWindowPage: createTestFunction(Pages.MultiWindowPage),
});

/*export const test = base.extend<PageFixtures>({
 multiWindowPage: async ({ page }, use) => {
   const multiWindowPageObj = new Pages.MultiWindowPage(page);
   await use(multiWindowPageObj);
   }
});
*/


export const bdd = createBdd(test);