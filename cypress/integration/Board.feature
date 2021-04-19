Feature: Board

    I want to test board functionality

    Background: I open main page
    Given I clean database
    And I open main page

    Scenario: Create new board
        When I create new board called "TEST board"
        Then New board "TEST board" is created

    Scenario: Create board without name
        When I click on new board button
        And I click on Save board button
        Then No board is created

    Scenario: Create 2 boards with same name
        Given Board "TEST board" created by request
        When I create new board called "TEST board"
        And I click on My Boards button
        Then 2 boards should be existing
        And All boards should have name "TEST board"

    Scenario: Cancel creation of new board
        When I click on new board button
        And I click on X button
        Then No board is existing

    Scenario: Toaster is shown with error 500
        Given Stubbed error 500
        When I create new board called "TEST board"
        Then Error message 500 is shown

    Scenario: No board is created with error 500
        Given Stubbed error 500
        When I create new board called "TEST board"
        Then No board is existing

    Scenario: Edit name of board
        Given Board "TEST board" created by request
        When I open board
        And I edit name of board to 'New name of board'
        Then Name of board is 'New name of board'

    Scenario Outline: Edit name of board - specific strings
        Given Board "TEST board" created by request
        When I open board
        And I edit name of board to "<boardName>"
        Then Name of board is '<boardName>'

        Examples:
            | boardName           | 
            | This is a new name  |
            |                     | 
            | 123456789           |
            | +ěščřžýáíé          |
            
    Scenario: Delete board
        Given Board "TEST board" created by request
        When I open board
        And I delete board
        Then No board is created

    Scenario: Stare board
        Given Board "TEST board" created by request
        When I stare board
        Then Board "TEST board" is between starred boards

    Scenario: Unstare board
        Given Starred board "TEST board"
        When I unstare board
        Then Board "TEST board" is not between starred boards

    Scenario: Stare more boards on same time
        Given 5 boards created by request
        When I stare 5 boards
        Then 5 boards should be starred

