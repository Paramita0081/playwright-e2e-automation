import {type Locator, Page,chromium,Browser} from "@playwright/test";
import { WebActions } from '../../utils/WebActions';
import { BasePage } from "./BasePage";

let browser: Browser;

export class MultiWindowPage extends BasePage{
    constructor(page:Page){
        super(page);
        this.page=page;
    }

    

    //Locators
    get multipleWindowsLink(): Locator {
        return this.page.getByRole('link', { name: 'Multiple Windows' })
    }

    get clickHereLink(): Locator{
        return this.page.getByRole('link', { name: 'Click Here' })
   }

   public async navigateToHomePage(){
    //browser = await chromium.launch({ headless: false });
    //await browser.newPage();
    await this.page.goto("https://the-internet.herokuapp.com/");
   }

    public async verifyHeaderText(headerText:string){
      const headerLocator = this.page.locator('h3');
      const headerContent = await headerLocator.textContent();
      return headerContent?.trim() === headerText;
   }

   /*public async closeBrowser(){
    await browser.close();
   }*/
}
//export default MultiWindowPage;