const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const homePage = require('../../pageobjects/HomePage');
const loginPage = require('../../pageobjects/LoginPage');
const searchResultsPage = require('../../pageobjects/SearchResultsPage');
const productPage = require('../../pageobjects/ProductPage');
const cartPage = require('../../pageobjects/CartPage');
const checkoutPage = require('../../pageobjects/CheckoutPage');

Given('I am signed in', async () => {
    await loginPage.open();
    await loginPage.login('your-email@example.com', 'your-password');
});

Given('I am on the homepage', async () => {
    await homePage.open();
});

When('I search for {string}', async (searchTerm) => {
    await homePage.searchForProduct(searchTerm);
});

When('I select the first product', async () => {
    await searchResultsPage.selectFirstProduct();
});

When('I choose color {string} and size {string}', async (color, size) => {
    await productPage.selectColor(color);
    await productPage.selectSize(size);
});

When('I add the product to the cart', async () => {
    await productPage.addToCart();
});

When('I wait for the product to be added', async () => {
    await productPage.waitForProductAdded();
});

When('I open the cart', async () => {
    await cartPage.openCart();
});

When('I proceed to checkout', async () => {
    await checkoutPage.proceedToCheckout();
});

When('I fill in the shipping details', async () => {
    await checkoutPage.fillShippingDetails({
        firstName: 'Nadeen',
        lastName: 'Abdelrhman',
        streetAddress: '123 Main Street',
        city: 'New York',
        state: 'New York',
        zipCode: '10001',
        country: 'United States',
        phoneNumber: '1234567890',
    });
});

When('I select a shipping method', async () => {
    await checkoutPage.selectShippingMethod('Flat Rate'); // Replace with the actual shipping method
});

When('I place the order', async () => {
    await checkoutPage.placeOrder();
});

