import { Selector, t } from 'testcafe'

class Header {
    constructor() {
        /** 
        * Groupy elements by html type
        * @example input, button, span, etc.
        */
        this.input = {
            search: Selector('#search_query_top')
        }
        this.button = {
            search: Selector('button').withAttribute('name', 'submit_search')
        }
    }
    /**
     * Create tasks (actions) that interact on the page
     */

    /**
     * @param product - product for looking
     */
    async searchProduct(product) {
        await t
            .typeText(this.input.search, `${product}`)
            .click(this.button.search)
    }

}

export default new Header()
