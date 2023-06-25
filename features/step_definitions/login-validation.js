const {When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');
const FooterPage = require("../../pages/footer-page");
const MembersPage = require("../../pages/members-page");

let footerPage;
let membersPage;

When('I select login and submit login form with {string} and {string}', async (email, password) => {
    footerPage = new FooterPage(driver);
    membersPage = new MembersPage(driver);

    await footerPage.selectLogin();
    await membersPage.login(email, password);
});

Then('I can see validation {string}', async (error) => {
    const actualError = await membersPage.getLoginError();
    expect(actualError).to.equal(error);
    await driver.close();
});
