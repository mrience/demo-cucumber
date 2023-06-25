const BasePage = require("./base-page");

const SELECTORS = {
    "category": '[class="template_nav_category_heading"]',
}

class SidebarPage extends BasePage {

    async getCategoryName() {
        return this.getText(SELECTORS.category);
    }
}

module.exports = SidebarPage