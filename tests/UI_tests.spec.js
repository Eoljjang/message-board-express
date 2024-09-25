// @ts-check
const { test, expect } = require('@playwright/test');

// Check the title of the page.
test('Title is correct', async({page}) => { // You use 'page' to indicate this test is navigating to a page.
  await page.goto('http://localhost:8080/') // make sure you have node --watch app.js running.
  await expect(page).toHaveTitle("Home Page"); // check the title of the page.
  console.log("Able to navigate to home page");
});

// Check if a button works as expected
test("Check 'New Message' button", async ({page}) => {
  await page.goto("http://localhost:8080/");
  await page.getByRole('button', {name: "New Message"}).click(); // Clicks the button. Alternatively, you can save this button into a variable.
  await expect(page).toHaveTitle("New Message Page"); // Expect that we navigate to the right place.
  console.log("New Message button works as expected.")
});
