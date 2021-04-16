Feature: Authentication

    I want to authenticate user

    Background: I open main page
        Given I clean database
        And I open main page

    Scenario: Open Login Modal
        When I click on Login button on mainpage
        Then Login modal is shown

    Scenario: Open Sign Up Modal
        When I click on Login button on mainpage
        And I click on Sign up switch button
        Then Sign up modal is shown

    Scenario: Register user - happy path
        Given I open register modal
        When I insert email "test@test.cz" and password "password123" as registration credentials
        And I click on Sign up button
        Then Registration with email "test@test.cz" was successful

    Scenario: Register user with invalid email
        Given I open register modal
        When I insert email "test" and password "password123" as registration credentials
        And I click on Sign up button
        Then Registration failed because of invalid email

    Scenario: Register user with short password
        Given I open register modal
        When I insert email "test@test.cz" and password "abc" as registration credentials
        And I click on Sign up button
        Then Registration failed because of short password

    Scenario: Register user with already existing email
        Given I register user via request with email "test@test.cz"
        Given I open register modal
        When I insert email "test@test.cz" and password "password123" as registration credentials
        And I click on Sign up button
        Then Registration failed becase of already existing email
    
    Scenario: Register user with empty credentials
        Given I open register modal
        When I click on Sign up button
        Then Registration failed because of empty credentials

    Scenario: Login user - happy path
        Given I open login modal
        And I register user via request with email "test@test.cz"
        When I insert email "test@test.cz" and password "password123" as login credentials
        And I click on Login button
        Then Login with email "test@test.cz" was successful
        
    Scenario: Login user with invalid password
        Given I open login modal
        And I register user via request with email "test@test.cz"
        When I insert email "test@test.cz" and password "invalidpassword" as login credentials
        And I click on Login button
        Then Login failed because of invalid password

    Scenario: Login user with non existing email
        Given I open login modal
        When I insert email "test@test.cz" and password "password123" as login credentials
        And I click on Login button
        Then Login failed because of non existing email

    Scenario: Login user with empty credentials
        Given I open login modal
        When I click on Login button
        Then Login failed because of empty credentials

    Scenario: Logout user
        Given Logged random user
        When I log out
        Then No user is logged

    