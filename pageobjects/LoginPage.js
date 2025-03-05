class LoginPage {
    async open() {
        await browser.url('/customer/account/login/'); // Navigate to the login page
    }

    async login(email, password) {
        const emailInput = $('#email'); // Locate the email input field
        const passwordInput = $('#pass'); // Locate the password input field
        const loginButton = $('#send2'); // Locate the login button

        await emailInput.setValue("nadeenabdelrhman@gmail.com"); // Enter the email
        await passwordInput.setValue("NADEEN2000@"); // Enter the password
        await loginButton.click(); // Click the login button
    }
}

module.exports = new LoginPage(); // Export an instance of LoginPage