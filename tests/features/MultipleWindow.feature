Feature: Multiple Window Handling Functionality

@regression
Scenario: Verify handling of multiple browser windows
    Given user navigates to home page
    When  I click on "Multiple Windows" link to open a new window
    Then  Handle new window and assert header
   # Then  Assert the header on the first new window
   # Then close all opened windows

    