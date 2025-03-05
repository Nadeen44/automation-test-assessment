class CartPage {
    async openCart() {
        const cartButton = $('.minicart-wrapper .action.showcart'); // Locate the cart button
        await cartButton.waitForExist({ timeout: 5000 });
        await cartButton.waitForDisplayed({ timeout: 5000 });
        await cartButton.click(); // Click the cart button
    }

    async isProductInCart() {
        const cartItem = $('.minicart-items .product-item'); // Locate the cart item
        await cartItem.waitForExist({ timeout: 5000 });
        await cartItem.waitForDisplayed({ timeout: 15000 });
        return await cartItem.isDisplayed(); // Check if the cart item is displayed
    }
}

module.exports = new CartPage(); // Export an instance of CartPage