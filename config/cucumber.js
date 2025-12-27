module.exports = {
    default: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "tests/features/**/*.feature"
        ],
        publishQuiet: true,
        dryRun: false,
        require: [
            "tests/step-definitions/*.ts",
            "tests/fixtures/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json"
            
        ],
        parallel: 1
    }
    
}