class HomePage {
    async open() {
        await browser.url('/'); // Navigate to the homepage
    }

    async searchForProduct(searchTerm) {
        const searchInput = $('#search'); // Locate the search input field
        const searchButton = $('button[type="submit"]'); // Locate the search button

        await searchInput.setValue(searchTerm); // Enter the search term
        await searchButton.waitForClickable({ timeout: 5000 }); // Wait for the button to be clickable
        await searchButton.click(); // Click the search button
    }
}

module.exports = new HomePage(); // Export an instance of HomePage