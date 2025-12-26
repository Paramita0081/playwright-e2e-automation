module.exports ={
    default: {
        paths: ["tests/features/**/*.feature"], 
        require: ["tests/step-definitions/*.ts", "tests/fixtures/*.ts"],
        importTestFrom: './fixture.ts',
        tags: '@regression',
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
           // "json:reports/cucumber-report.json", // Generates a JSON report
            //"html:reports/cucumber-report.html"
        ],
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await"
        },
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "html:cucumber-html-report/cucumber-report.html"
        ]
    }
}