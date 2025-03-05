class CheckoutPage {
    async proceedToCheckout() {
        const checkoutButton = await $('button=Proceed to Checkout');
        await checkoutButton.waitForExist({ timeout: 5000 });
        await checkoutButton.waitForDisplayed({ timeout: 5000 });
        await checkoutButton.waitForClickable({ timeout: 5000 });
        await checkoutButton.click();
    }

    async fillShippingDetails(details) {
        await this._setInputValue('input[name="firstname"]', details.firstName);
        await this._setInputValue('input[name="lastname"]', details.lastName);
        await this._setInputValue('input[name="street[0]"]', details.streetAddress);
        await this._setInputValue('input[name="city"]', details.city);
        await this._selectDropdownOption('select[name="region_id"]', details.state);
        await this._setInputValue('input[name="postcode"]', details.zipCode);
        await this._selectDropdownOption('select[name="country_id"]', details.country);
        await this._setInputValue('input[name="telephone"]', details.phoneNumber);
    }

    async selectShippingMethod() {
        // Wait for the shipping methods container to load
        await $('#checkout-shipping-method-load').waitForExist({ timeout: 10000 });
    
        // Locate the radio button by its value
        const radioButton = await $(`input[value="tablerate_bestway"]`);
        await radioButton.waitForExist({ timeout: 5000 });
        await radioButton.waitForDisplayed({ timeout: 5000 });
    
        // Click the radio button
        await radioButton.click();
    }

    async navigateToPaymentPage() {
        // Locate the "Next" button or payment method option
        const nextButton = await $('button[data-role="opc-continue"]');
        await nextButton.waitForExist({ timeout: 10000 });
        await nextButton.waitForDisplayed({ timeout: 10000 });
        await nextButton.waitForClickable({ timeout: 10000 });
        await nextButton.click(); // Click to proceed to the payment page
    
        // Wait for the payment page to load
        await $('#checkout-payment-method-load').waitForExist({ timeout: 15000 });
    }

    async placeOrder() {
        // Navigate to the payment page
        await this.navigateToPaymentPage();
    
        // Locate the checkbox for "Billing address same as shipping"
        const billingAddressCheckbox = await $('input[name="billing-address-same-as-shipping"]');
        await billingAddressCheckbox.waitForExist({ timeout: 15000 });
        await billingAddressCheckbox.waitForDisplayed({ timeout: 15000 });
    
        // Check the checkbox if it is not already checked
        if (!(await billingAddressCheckbox.isSelected())) {
            await billingAddressCheckbox.click();
        }
    
        // Locate the "Place Order" button
        const placeOrderButton = await $('button[title="Place Order"]');
        await placeOrderButton.waitForExist({ timeout: 10000 });
        await placeOrderButton.waitForDisplayed({ timeout: 10000 });
        await placeOrderButton.waitForClickable({ timeout: 10000 });
    
        // Click the "Place Order" button
        await placeOrderButton.click();
    }

    async _setInputValue(selector, value) {
        const input = await $(selector);
        await input.waitForExist({ timeout: 5000 });
        await input.setValue(value);
    }

    async _selectDropdownOption(selector, optionText) {
        const dropdown = await $(selector);
        await dropdown.waitForExist({ timeout: 5000 });
        await dropdown.selectByVisibleText(optionText);
    }
}

module.exports = new CheckoutPage();