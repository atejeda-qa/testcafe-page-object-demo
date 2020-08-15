import { Selector } from 'testcafe'

class Results {
    constructor() {
        /** 
        * Groupy elements by html type
        * @example input, button, span, etc.
        */
        this.breadcrum = {
            icon: Selector('.navigation_icon'),
            searchText: Selector('.navigation_page')
        }
    }

}

export default new Results()
