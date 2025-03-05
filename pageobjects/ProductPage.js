class ProductPage {
    async selectColor(color) {
        const colorOption = $(`div[option-label="${color}"]`); // Locate the color option
        await colorOption.waitForExist({ timeout: 5000 });
        await colorOption.waitForDisplayed({ timeout: 5000 });
        await colorOption.click(); // Select the color
    }

    async selectSize(size) {
        const sizeOption = $(`div[option-label="${size}"]`); // Locate the size option
        await sizeOption.waitForExist({ timeout: 5000 });
        await sizeOption.waitForDisplayed({ timeout: 5000 });
        await sizeOption.click(); // Select the size
    }

    async addToCart() {
        const addToCartButton = $('#product-addtocart-button'); // Locate the "Add to Cart" button
        await addToCartButton.waitForExist({ timeout: 5000 });
        await addToCartButton.waitForDisplayed({ timeout: 5000 });
        await addToCartButton.click(); // Click the button
    }

    async waitForProductAdded() {
        const successMessage = $('.message-success'); // Locate the success message
        await successMessage.waitForExist({ timeout: 10000 }); // Wait for the success message to appear
        await successMessage.waitForDisplayed({ timeout: 10000 });
    }
}

module.exports = new ProductPage(); // Export an instance of ProductPage