//import { Given, When, Then } from "@cucumber/cucumber";
import { createBdd } from "playwright-bdd";
import  {test}  from "../fixtures/POMFixtures";
import Assert from "../pages/assert";
import * as data from "../helpers/utilities/test-data/registerUser.json";

const {Given, When, Then } = createBdd(test);


Given('I navigate to the register page', async ({registerPage})=> {
    await registerPage.navigateToRegisterPage();
});

When('I created a new user', async function ({ registerPage }) {
    const username = data.userName + Date.now().toString();
    await registerPage.registerUser(data.firstName, data.lastName,
        username, data.password, data.confirmPassword, "m");
});

Then('I confirm user registration is success', async function ({ registerPage }) {
    await registerPage.verifySuccessMesg();
});