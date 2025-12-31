import { expect, Page,type Locator, Browser ,BrowserContext} from "@playwright/test";
import BasePage from "../pages/BasePage";
import Assert from "../pages/assert";




export class MultiWindowPage {
  private assert: Assert;
   constructor(private page: Page) {
   this.page=page;
   this.assert=new Assert(page);
   }

  get multipleWindowsLink(): Locator {
    return this.page.getByRole("link", { name: "Multiple Windows" });
  }

  get clickHereLink(): Locator {
    return this.page.getByRole("link", { name: "Click Here" });
  }

   private Elements = {
        headerText: "h3",
       // maleRadioBtn: "//span[contains(text(),'Male')]",   
    }

  async verifyHeaderText() {
    await this.assert.assertTextWithElement(this.Elements.headerText,"Opening a new window");
    //await expect(await this.page.locator("h3")).toContainText("Opening a new window");
  }

}
