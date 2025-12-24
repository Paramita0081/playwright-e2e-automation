import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
  test.beforeEach("Login function", async ({ page }) => {
    //Launch URl
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.getByRole('heading', { name: 'We Care About Your Health' })).toBeVisible();
    await expect(page.locator("#top > div > h1")).toHaveText("CURA Healthcare Service");
  });

  test("Login with valid credential", async ({ page }) => {
    //Login with valid credential
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    //Assert with success Text
    await expect(page.locator("h2")).toContainText("Make Appointment");
  });

  test("Login with Invalid credential", async ({ page }) => {
    //Login with Invalid credential
    await page.getByLabel("Username").fill("paramitm");
    await page.getByLabel("Password").fill("123456");
    await page.getByRole("button", { name: "Login" }).click();

    //Assert with error text
    await expect(page.locator("p.text-danger")).toContainText("Login failed! Please ensure the username and password are valid.");
  });
});
