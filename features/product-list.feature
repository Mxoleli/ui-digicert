Feature: Product List Page

  Background:
    Given I am logged in

  Scenario: Verify product list page loads correctly
    Then I should see the product list loaded with an app logo "Swag Labs"

  Scenario: Validate the number of products displayed
    Then I should see exactly 6 products displayed
