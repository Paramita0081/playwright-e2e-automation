import {test ,type Page, type Locator} from '@playwright/test';

/**
 * Take a screenshot of a full page
 * @param Page
 * @param screenshotName
 * 
 */

/* Full Page screenshot */
async function takeFullPageScreenshot(page:Page ,screenshotName: string){
    const screenShot = await page.screenshot({ fullPage :true});
    //Attach it to the report
    await test.info().attach(screenshotName,{
        body: screenShot ,
        contentType: "image/png",
    });
}

/* Element screenshot */
async function takeElementScreenshot(element:Locator ,screenshotName: string){
    const screenShot = await element.screenshot();
    //Attach it to the report
    await test.info().attach(screenshotName,{
        body: screenShot ,
        contentType: "image/png",
    });

}
  export default {takeFullPageScreenshot ,takeElementScreenshot};
