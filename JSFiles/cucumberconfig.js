"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
//import * as reporter from "cucumber-html-reporter"
var reporter = require('cucumber-html-reporter');
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        // require step definitions
        // tags:"@angularTesting",
        format: "json:./cucumberreport.json",
        require: [
            './stepDefinitation/*.js' // accepts a glob
        ]
    },
    onComplete: function () {
        var Options = {
            theme: "bootstrap",
            jsonFile: './cucumberreport.json',
            output: './cucumber_report.html',
            name: "E2E Project Cucumber",
            brandTitle: "Acceptance Test Report",
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(Options);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxvREFBb0Q7QUFDcEQsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDakQsZ0NBQWdDO0FBQ3JCLFFBQUEsTUFBTSxHQUFVO0lBQ3ZCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFDLElBQUk7SUFDcEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDN0QsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsWUFBWSxFQUFFO1FBQ1gsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUN6QixNQUFNLEVBQUUsNEJBQTRCO1FBR3BDLE9BQU8sRUFBRTtZQUNQLHlCQUF5QixDQUFDLGlCQUFpQjtTQUM1QztLQUVGO0lBQ0QsVUFBVSxFQUFFO1FBRVYsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixVQUFVLEVBQUUsd0JBQXdCO1lBQ3BDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ1IsYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDRSxDQUFBO1FBQ0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMxQixDQUFDO0NBS1IsQ0FBQyJ9