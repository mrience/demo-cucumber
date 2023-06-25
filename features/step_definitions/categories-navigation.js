const {When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');
const SidebarPage = require("../../pages/sidebar-page");
const CategoriesNavPage = require("../../pages/categories-nav-page");


let categoriesNavPage;
let sidebarPage;

When('I {string} a category', async (select) => {
    categoriesNavPage = new CategoriesNavPage(driver);

    await categoriesNavPage.selectCategory(select);
});

Then('I am redirected to proper {string} and {string} is changed', async (endpoint, category) => {
    sidebarPage = new SidebarPage(driver);

    expect(await sidebarPage.getCategoryName()).to.contain(category);
    expect(await driver.getCurrentUrl()).to.contain(endpoint);
    await driver.close();
});
