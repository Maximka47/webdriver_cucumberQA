Feature: The Saucedemo Website

  Scenario Outline: As a user, I can not log in without username

    Given I am on the login page
    When  I login without username and password
    Then  I should see a message saying <message>

    Examples:
      | message                            |
      | Epic sadface: Username is required |
