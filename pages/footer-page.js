const BasePage = require("./base-page");
const SELECTORS = {
    'loginButton': 'a[href="/members"]',
}

class FooterPage extends BasePage {

    async selectLogin() {
        await this.click(SELECTORS.loginButton);
    }
}

module.exports = FooterPage