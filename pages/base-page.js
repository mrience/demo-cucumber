let webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');

/***
 * This is a base class for all Pages. It provides reusable methods for them.
 */
class BasePage {

    /***
     * It types a text into an input element. The input is cleaned before the typing.
     * In the future it's methods should be extended to accept 'string | WebElement' as selector's type.
     * @param selector css selector of the input
     * @param text text to be used
     * @returns {Promise<void>}
     */
    async type(selector, text) {
        const element = await driver.findElement(By.css(selector));
        await element.clear();
        await element.sendKeys(text);
    }

    /***
     * Clicks on a element
     * @param selector css selector of the element
     * @returns {Promise<void>}
     */
    async click(selector) {
        await driver.findElement(By.css(selector)).click();
    }

    /***
     * Gets text content of a element and it's child nodes (this can be changed in the future).
     * @param selector css selector of the element
     * @returns {Promise<*>}
     */
    async getText(selector) {
        return driver.findElement(By.css(selector)).getText();
    }
}

module.exports = BasePage;