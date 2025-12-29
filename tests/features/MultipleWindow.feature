Feature: Multiple Window Handling Functionality


Background:
 Given user navigates to page

@smoke
Scenario: Verify handling of multiple browser windows
    When  I click on "Multiple Windows" link to open a new window
    Then  Handle new window and assert header
    Then  Assert the header on the first new window
   # Then close all opened windows

    