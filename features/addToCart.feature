Feature: Add to Cart and Checkout

  Scenario: Add a product to the cart and complete checkout
    Given I am signed in
    And I am on the homepage
    When I search for "T-shirt"
    And I select the first product
    And I choose color "Blue" and size "M"
    And I add the product to the cart
    And I wait for the product to be added
    And I open the cart
    And I proceed to checkout
    And I fill in the shipping details
    And I select a shipping method
    And I place the order
    Then I should see the order confirmation