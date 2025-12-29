import { Page } from "@playwright/test";
import { Logger } from "winston";
//import { test as base} from "@playwright/test";
//import { test as base, createBdd } from "playwright-bdd";
//import * as Pages from "../../pageobjects/index";


export const fixture = {
    // @ts-ignore
    page: undefined as Page,
    // @ts-ignore
    logger: undefined as Logger
}

/*type PageFixtures = {
  multiWindowPage: Pages.MultiWindowPage;
};

const createTestFunction =
  <T extends new (page: Page) => InstanceType<T>>(PageClass: T) =>
  (
    { page }: { page: Page },
    use: (fixture: InstanceType<T>) => Promise<void>
  ) =>use(new PageClass(page));

export const test = base.extend<PageFixtures>({
  multiWindowPage: createTestFunction(Pages.MultiWindowPage)

});*/

