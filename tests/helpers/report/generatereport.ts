// generate-report.ts
const report=require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir:    "test-results",
    reportPath: "test-results/reports/",
    pageTitle: 'Playwright Project Test Report',
    reportName: 'Playwright Automation Report',
     displayDuration: false,
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