Feature: Login Functionality

  Scenario: Successful login
    Given I am on the login page
    When I login with valid credentials
    Then I should see the dashboard

  Scenario: Unsuccessful login
    Given I am on the login page
    When I login with invalid credentials
    Then I should see an error message