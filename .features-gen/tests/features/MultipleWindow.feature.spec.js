// Generated from: tests\features\MultipleWindow.feature
import { test } from "../../../tests/fixtures/fixture.ts";

test.describe('Multiple Window Handling Functionality', () => {

  test('Verify handling of multiple browser windows', { tag: ['@regression'] }, async ({ Given, When, Then, multiWindowPage }) => { 
    await Given('user navigates to home page', null, { multiWindowPage }); 
    await When('I click on "Multiple Windows" link to open a new window', null, { multiWindowPage }); 
    await Then('Handle new window and assert header', null, { multiWindowPage }); 
    await Then('Assert the header on the first new window', null, { multiWindowPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\MultipleWindow.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I click on \"Multiple Windows\" link to open a new window","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Handle new window and assert header","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Assert the header on the first new window","stepMatchArguments":[]}]},
]; // bdd-data-end