const {Given} = require("@cucumber/cucumber");
const {Builder} = require("selenium-webdriver");


Given('I am logged out user on main page', async () => {
    global.driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://demo.auroracommerce.com/");
});