// generate-report.ts
const report=require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir:    "test-results/cucumber-report.html",
    reportPath: "test-results/cucumber-report.json",
    pageTitle: 'Playwright Project Test Report',
    reportName: 'Playwright Automation Report',
    metadata: {
        browser: {
            name: 'chrome',
            version: '143', // Fetch version dynamically if possible
        },
        device: 'Local machine',
        platform: {
            name: 'Windows',
            version: '11',
        },
    },
    // Add other options as needed (e.g., displayDuration, durationInMS)
});