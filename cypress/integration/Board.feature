Feature: Board

    I want to test board functionality

    Background: I open main page
    Given I clean database
    And I open main page

    Scenario: Create new board
        When I create new board called "TEST"
        Then New board "TEST" is created
