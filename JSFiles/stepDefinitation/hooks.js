"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@calcualtorTesting" }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.manage().window().maximize();
}));
cucumber_1.Before({ tags: "@angularTesting" }, () => {
    console.log("this is angulor testing application");
});
// After( async(scenario)=> {
//   this.attach = attach
//   if(scenario.result.status=== Status.FAILED)
//   {
//     let screenshort= await browser.takeScreenshot();
//     this.attach(screenshort,"image/png");
//   }
// });
cucumber_1.After((scenario) => __awaiter(void 0, void 0, void 0, function* () {
    let attach = "no";
    if (scenario.result.status === cucumber_1.Status.FAILED) {
        let ss = yield protractor_1.browser.takeScreenshot();
        const img = Buffer.alloc(ss.length, ss, 'base64');
        //this.attach(img, 'image/png');
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGF0aW9uL2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaURBQTJEO0FBRzNELDJDQUFrQztBQUlsQyxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDLEVBQUcsR0FBTyxFQUFFO0lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUMsRUFBRyxHQUFFLEVBQUU7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3BELENBQUMsQ0FBQyxDQUFDO0FBRUgsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixnREFBZ0Q7QUFDaEQsTUFBTTtBQUNOLHVEQUF1RDtBQUN2RCw0Q0FBNEM7QUFDNUMsTUFBTTtBQUNOLE1BQU07QUFDTixnQkFBSyxDQUFDLENBQU8sUUFBUSxFQUFDLEVBQUU7SUFDdEIsSUFBSSxNQUFNLEdBQU0sSUFBSSxDQUFDO0lBQ3RCLElBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUcsaUJBQU0sQ0FBQyxNQUFNLEVBQUM7UUFDekMsSUFBSSxFQUFFLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEQsZ0NBQWdDO0tBQ2hDO0FBQ0YsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9