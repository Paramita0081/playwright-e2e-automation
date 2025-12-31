Feature: Multiple Window Handling Functionality

@smoke
Scenario: Verify handling of multiple browser windows
    Given user navigates to page
    When  I click on "Multiple Windows" link to open a new window
    Then  Handle new window and assert header
    Then  Assert the header on the first new window