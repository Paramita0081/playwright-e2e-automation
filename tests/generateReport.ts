// generate-report.ts
import * as reporter from 'multiple-cucumber-html-reporter';
import * as fs from 'fs-extra'; // Might need to install fs-extra for directory management
import * as path from 'path';

const jsonDir = './cucumber-json-reports'; // Directory where your JSON files are saved
const reportPath = './cucumber-html-report'; // Directory where the HTML report will be generated

// Ensure the report path exists
if (!fs.existsSync(reportPath)) {
    fs.mkdirSync(reportPath, { recursive: true });
}

reporter.generate({
    jsonDir: jsonDir,
    reportPath: reportPath,
    pageTitle: 'My Project Test Report',
    reportName: 'My Project Test Report',
    metadata: {
        browser: {
            name: 'chrome',
            version: '...', // Fetch version dynamically if possible
        },
        device: 'Local machine',
        platform: {
            name: 'windows',
            version: '...',
        },
    },
    // Add other options as needed (e.g., displayDuration, durationInMS)
});