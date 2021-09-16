"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['testspec.js'],
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGdDQUFnQztBQUNyQixRQUFBLE1BQU0sR0FBRztJQUNoQiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBQyxJQUFJO0lBRWxCLHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUV0Qix3Q0FBd0M7SUFDeEMsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUk7S0FDakI7Q0FDRixDQUFDIn0=