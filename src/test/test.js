import HeaderTask from '../tasks/header'
import HeaderQuestion from '../questions/header'
import results from '../pages/results'

fixture`Search product`
    .page`http://automationpractice.com/index.php?`

test('Look for a specific product', async t => {
    await HeaderQuestion.validateHeaderButtons()
    await HeaderTask.searchProduct('Dress')
    await t.expect(results.breadcrum.searchText.exists).ok()
})
