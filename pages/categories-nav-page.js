const BasePage = require("./base-page");
const {By} = require("selenium-webdriver");


const SELECTORS = {
    'category': '[class="navitem"]',
}

class CategoriesNavPage extends BasePage {

    /***
     * Clicks on a category in categories bar.
     * @param index indicates which category should be selected, starting from 0
     */
    async selectCategory(index) {
        const elements = await driver.findElements(By.css(SELECTORS.category));
        const element = elements[index];
        await element.click();
    }
}

module.exports = CategoriesNavPage