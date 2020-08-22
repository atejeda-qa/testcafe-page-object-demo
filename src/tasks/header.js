import Header from '../pages/header'
import { t } from 'testcafe'

class HeaderTasks extends Header {
    constructor() {
        super()
        this.button
        this.input
    }

    async searchProduct(product) {
        /**
         * @param product - product for looking
         */
        await t
            .typeText(this.input.search, `${product}`)
            .click(this.button.search)
    }
}

export default new HeaderTasks()
