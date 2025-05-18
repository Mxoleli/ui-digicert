Feature: Checkout Functionality

  Background:
    Given I am logged in
    And I have added a product to the cart

  Scenario: Proceed through the checkout steps
    When I navigate to the cart
    And I click on the checkout button
    And I fill in my checkout information
      | firstName | lastName | postalCode |
      | QAUser    | Quality  | 12345      |
    And I click on the continue button
    When I should see the overview page
    When I complete the finish
    Then I should see a confirmation message "Thank you for your order!"
