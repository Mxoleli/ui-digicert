Feature: Cart Operations

  Background:
    Given I am logged in
    And I am on the product list page

  Scenario: Add a product to the cart and verify it's listed
    When I add the product to the cart
    And I navigate to the cart
    Then I should see "Sauce Labs Backpack" listed in the cart

  Scenario: Remove the product from the cart and validate
    Given the product "Sauce Labs Backpack" is already in the cart
    When I remove the product "Sauce Labs Backpack" from the cart
    Then I should not see "Sauce Labs Backpack" in the cart
