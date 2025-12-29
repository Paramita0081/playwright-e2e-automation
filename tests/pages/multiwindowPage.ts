import { expect, Page,type Locator, Browser ,BrowserContext} from "@playwright/test";
import { fixture } from "../fixtures/fixture";
import BasePage from "../pages/BasePage";


export class MultiWindowPage {
   constructor(private page: Page) {
   this.page=page;
   }

  get multipleWindowsLink(): Locator {
    return this.page.getByRole("link", { name: "Multiple Windows" });
  }

  get clickHereLink(): Locator {
    return this.page.getByRole("link", { name: "Click Here" });
  }

 
   
  //Assert Text
  async verifyHeaderText() {
    await expect(await this.page.locator("h3")).toContainText("Opening a new window");
  }

}
