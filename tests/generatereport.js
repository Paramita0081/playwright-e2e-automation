'use strict';
const path = require('node:path');

const test = require('../node_modules/multiple-cucumber-html-reporter/lib/generate-report');
const now = new Date();

/**
 * Generate a report for browsers
 */
test.generate({
    saveCollectedJSON: true,
    jsonDir: './test-results/unit/data/',
    reportPath: './test-results/reports/',
    reportName: 'Playwright Automation Test Results',
    customMetadata: false,
    displayDuration: true,
    durationInMS: true,
    reportSuiteAsScenarios:true,
    launchReport:true,
    scenarioTimestamp:'bootstrap',
    metadata: {
        browser: {
            name: "chrome",
            version: "143",
        },
        device: "Local",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'Smoke-1'},
            {label: 'Execution Start Time', value: `${now.toLocaleTimeString()}`},
            {label: 'Execution End Time', value: `${now.toLocaleTimeString()}`}
        ]
    }
});