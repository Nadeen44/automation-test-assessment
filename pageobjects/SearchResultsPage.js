class SearchResultsPage {
    async selectFirstProduct() {
        const firstProduct = $('.product-item:first-child a.product-item-link'); // Locate the first product link
        await firstProduct.waitForExist({ timeout: 5000 });
        await firstProduct.waitForDisplayed({ timeout: 5000 });
        await firstProduct.click(); // Click the first product link
    }
}

module.exports = new SearchResultsPage(); // Export an instance of SearchResultsPage