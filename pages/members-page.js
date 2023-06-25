const BasePage = require("./base-page");
const SELECTORS = {
    'loginEmailInput': '[id="email_address"]',
    'loginPasswordInput': '[id="password"]',
    'loginSubmitButton': '[name="login"]',
    'loginError': '[class="errorbox"]',
}

class MembersPage extends BasePage {

    async login(email, password) {
        await this.type(SELECTORS.loginEmailInput, email);
        await this.type(SELECTORS.loginPasswordInput, password);
        await this.click(SELECTORS.loginSubmitButton);
    }

    async getLoginError() {
        return this.getText(SELECTORS.loginError);
    }
}

module.exports = MembersPage