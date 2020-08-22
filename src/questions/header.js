import { t } from 'testcafe'
import Header from '../pages/header';

class HeaderQuestion extends Header {
    constructor() {
        super()
        this.button
    }
    async validateHeaderButtons() {
        await t
            .expect(this.button.search.exists).ok()
            .expect(this.button.signIn.exists).ok()
    }
}

export default new HeaderQuestion()
