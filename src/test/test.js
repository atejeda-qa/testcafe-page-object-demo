import header from '../pages/header'
import results from '../pages/results'

fixture`Search product`
    .page`http://automationpractice.com/index.php?`

test('Look for a specific product', async t => {
    await header.searchProduct('Dress')
    await t.expect(results.breadcrum.searchText.exists).ok()
})
