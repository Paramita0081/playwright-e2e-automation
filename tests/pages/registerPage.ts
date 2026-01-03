import { expect, Page } from "@playwright/test";
import BasePage from "../pages/BasePage";
import Assert from "../pages/assert";

export class RegisterPage {

    private base: BasePage;
    private assert: Assert;

    constructor(private page: Page) {
        this.base = new BasePage(page);
        this.assert = new Assert(page);
        this.page = page;
    }

    private Elements = {
        fName: "input[formcontrolname='firstname']",
        lname: "input[formcontrolname='lastname']",
        userName: "input[formcontrolname='username']",
        password: "input[formcontrolname='password']",
        confirmPassword: "input[formcontrolname='confirmPassword']",
        maleInput: "input[value='Male']",
        femaleInput: "input[value='Female']",
        maleRadioBtn: "//span[contains(text(),'Male')]",
        femaleRadioBtn: "//span[contains(text(),'Female')]",
        regBtn: "button[color='primary']"
    }

    async navigateToRegisterPage() {
        await this.base.goto("https://bookcart.azurewebsites.net/register");
    }


    async registerUser(firstname: string, lastname: string, userName: string,
        password: string, confirmPassword: string,gender: string) {


        await this.page.getByText('First name').click();
        await this.page.fill(await this.Elements.fName, firstname);
      
        await this.page.getByText('Last name').click();
        await this.page.fill(this.Elements.lname, lastname);
        // this must be unique always
        await this.page.getByText('User name').click();
        await this.enterUsername(userName);
        await this.page.getByRole('textbox', { name: 'Password', exact: true }).click();
        await await this.page.fill(this.Elements.password, password);
        await this.page.getByText('Confirm Password').click();
       await this.page.fill(this.Elements.confirmPassword, confirmPassword);
        if (gender == "m") {
            await this.page.click(this.Elements.maleRadioBtn);
            await expect(this.page.locator(this.Elements.maleInput)).toBeChecked();
        } else {
            await this.page.click(this.Elements.femaleRadioBtn);
            await expect(this.page.locator(this.Elements.femaleInput)).toBeChecked();
        }
        const regBtn = this.page.locator(this.Elements.regBtn);
        await regBtn.click();
    }
   
    async verifySuccessMesg(){
        await this.assert.assertURL("https://bookcart.azurewebsites.net/login");
    }

    async enterUsername(userName: string) {
        await (this.Elements.userName, userName);
        const [response] = await Promise.all([
            this.page.waitForResponse(res => {
                return res.status() == 200
                    &&
                    res.url() == `https://bookcart.azurewebsites.net/api/user/validateUserName/${userName}`
            })
        ]);
        await response.finished();
    }
}