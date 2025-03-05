# Magento Test Automation

This project automates the testing of the Magento e-commerce website using **Cucumber.js** and **WebdriverIO**. It includes test cases for adding a product to the cart and completing the checkout process.

## Table of Contents
- [Features](#features)
- [Test Cases](#test-cases)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Generating Allure Reports](#generating-allure-reports)
- [Contributing](#contributing)
- [License](#license)

## Features
- Automated testing of the Magento website using **Cucumber.js** and **WebdriverIO**.
- Test cases for adding a product to the cart and completing the checkout process.
- Integration with Allure for detailed test reporting.

## Test Cases
The following test cases are covered in this project:

### Feature: Add to Cart and Checkout

**Scenario: Add a product to the cart and complete checkout**
1. **Given** I am signed in
2. **And** I am on the homepage
3. **When** I search for "T-shirt"
4. **And** I select the first product
5. **And** I choose color "Blue" and size "M"
6. **And** I add the product to the cart
7. **And** I wait for the product to be added
8. **And** I open the cart
9. **And** I proceed to checkout
10. **And** I fill in the shipping details
11. **And** I select a shipping method
12. **And** I place the order

## Prerequisites
Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [WebdriverIO](https://webdriver.io/)
- [Cucumber.js](https://cucumber.io/docs/installation/javascript/)
- [Allure Reporter](https://docs.qameta.io/allure/)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/magento-test-automation.git
2. Navigate to the project directory: cd magento-test-automation
3. Install dependencies: npm install
4. To run the test suite using Cucumber.js and WebdriverIO, use the following command: npx wdio wdio.conf.js



