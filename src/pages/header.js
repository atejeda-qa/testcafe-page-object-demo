import { Selector } from 'testcafe'

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
            contactUs: Selector('#contact-link'),
            signIn: Selector('.header_user_info'),
            search: Selector('button').withAttribute('name', 'submit_search')
        }
    }
}

export default Header
