import {type Locator,chromium,Page,Browser,expect,} from "@playwright/test";
import { BasePage } from "./BasePage";
import pageHelper from "../helpers/pw-helper";
import { log } from "../helpers/logger";

let browser: Browser;

export class MultiWindowPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  //Locators
  get multipleWindowsLink(): Locator {
    return this.page.getByRole("link", { name: "Multiple Windows" });
  }

  get clickHereLink(): Locator {
    return this.page.getByRole("link", { name: "Click Here" });
  }

  public async navigateToHomePage() {
    await this.page.goto("https://the-internet.herokuapp.com/");
    await pageHelper.takeFullPageScreenshot(this.page, "Multiwindow first Page");
  }

  //Assert Text
  public async verifyHeaderText() {
    await expect(this.page.locator("h3")).toContainText("Opening a new window");
  }
}
