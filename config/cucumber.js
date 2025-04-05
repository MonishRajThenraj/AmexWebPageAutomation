
module.exports = {
    default: {
        formatOptions: {
            snippetInterface: 'async-await',
        },
        paths: [
            "src/features/**/*.feature",
        ],
        dryRun: false,
        require:[
            "src/support/hooks.js",
            "src/step_definitions/**/*.js",
        ],
        format: [
            "json:reports/cucumber_report.json",
            "html:reports/cucumber_report.html",
            "node_modules/cucumber-pretty"
        ],

    },
};