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
    }

}

export default new Results()
