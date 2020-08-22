import { Selector } from 'testcafe'

class Results {
    constructor() {
        /** 
        * Group elements by html tag
        * @example input, button, span, etc.
        */
        this.breadcrum = {
            icon: Selector('.navigation_icon'),
            searchText: Selector('.navigation_page')
        }
        this.ul = {
            productContainer: Selector('ul.product_list')
        }
    }

}

export default new Results()
