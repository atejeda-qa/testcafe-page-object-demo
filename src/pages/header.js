import { Selector, t } from 'testcafe'

class Header {
    constructor() {
        /** 
        * Group elements by html tag
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

    async searchProduct(product) {
        /**
         * @param product - product for looking
         */
        await t
            .typeText(this.input.search, `${product}`)
            .click(this.button.search)
    }

}

export default new Header()
