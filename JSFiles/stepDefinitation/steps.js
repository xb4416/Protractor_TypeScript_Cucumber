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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../pageObjects/calculator");
const anglurHomePage_1 = require("../pageObjects/anglurHomePage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let cal = new calculator_1.calculator();
let alr = new anglurHomePage_1.anglurHomePage();
cucumber_1.Given('i will nivigate to {string} website', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "angular") { // await browser.driver.manage().window().maximize();
        yield protractor_1.browser.get("https://angularjs.org/");
    }
    else if (string == "calc") {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    }
}));
cucumber_1.When('i will run fumction of add using two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield cal.firsteditbox.sendKeys(string);
    yield cal.secodeditbox.sendKeys(string2);
    yield cal.add.click();
}));
cucumber_1.When('click on angulor link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield alr.angularlink.click();
}));
cucumber_1.When('navigate to angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.getTitle().then(function (text) {
        console.log(text);
    });
}));
cucumber_1.Then('user enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield alr.serch.sendKeys(string);
}));
cucumber_1.Then('after operation perform and {string} display in console', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield cal.go.click();
    yield protractor_1.element.all(protractor_1.by.repeater("result in memory")).each(function (result) {
        result.element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log("Output is : " + text);
            expect(text).to.equal(string);
        });
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGF0aW9uL3N0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELDJDQUFrRDtBQUNsRCwwREFBdUQ7QUFDdkQsa0VBQStEO0FBQy9ELGdEQUF3QjtBQUN4QixJQUFJLE1BQU0sR0FBRSxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzNCLElBQUksR0FBRyxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQy9CLGdCQUFLLENBQUMscUNBQXFDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUUxRCxJQUFHLE1BQU0sSUFBRSxTQUFTLEVBQ3BCLEVBQUcscURBQXFEO1FBQ3BELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUMvQztTQUNJLElBQUcsTUFBTSxJQUFFLE1BQU0sRUFDdEI7UUFDSSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7S0FDbEU7QUFFTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLG9FQUFvRSxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBRWpHLE1BQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDMUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNGLGVBQUksQ0FBQyx1QkFBdUIsRUFBRSxHQUFRLEVBQUU7SUFDcEMsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMEJBQTBCLEVBQUUsR0FBUSxFQUFFO0lBQ3ZDLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLG1DQUFtQyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDeEQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxlQUFJLENBQUMseURBQXlELEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUM3RSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNO1FBQ3BFLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQTtZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9