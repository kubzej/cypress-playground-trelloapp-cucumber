Feature: Authentication

    I want to authenticate user

    Scenario: Open Login Modal
        Given I open main page
        When I click on Login button
        Then Login modal is shown

    Scenario: Open Sign Up Modal
        Given I open main page
        When I click on Login button
        And I click on Sign up button
        Then Sign up modal is shown