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
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObjects/calculator");
const anglurHomePage_1 = require("./pageObjects/anglurHomePage");
describe("Protractor Suite ", () => {
    let cal = new calculator_1.calculator();
    function addition(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cal.firsteditbox.sendKeys(a);
            yield cal.secodeditbox.sendKeys(b);
            yield cal.add.click();
            yield cal.go.click();
        });
    }
    function subtraction(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cal.firsteditbox.sendKeys(a);
            yield cal.secodeditbox.sendKeys(b);
            yield cal.sub.click();
            yield cal.go.click();
        });
    }
    function division(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cal.firsteditbox.sendKeys(a);
            yield cal.secodeditbox.sendKeys(b);
            yield cal.div.click();
            yield cal.go.click();
        });
    }
    function modulo(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cal.firsteditbox.sendKeys(a);
            yield cal.secodeditbox.sendKeys(b);
            yield cal.mod.click();
            yield cal.go.click();
        });
    }
    function multipliction(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cal.firsteditbox.sendKeys(a);
            yield cal.secodeditbox.sendKeys(b);
            yield cal.mul.click();
            yield cal.go.click();
        });
    }
    it("Funcation Test", () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield protractor_1.browser.driver.manage().window().maximize();
        yield addition(14, 15);
        yield subtraction(25, 10);
        yield division(100, 20);
        yield modulo(20, 6);
        yield multipliction(40, 2);
        yield protractor_1.element.all(protractor_1.by.repeater("result in memory")).each(function (result) {
            result.element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log("Output is : " + text);
            });
        });
    }));
    it("Angular home page link validition", () => __awaiter(void 0, void 0, void 0, function* () {
        let alr = new anglurHomePage_1.anglurHomePage();
        yield protractor_1.browser.get("https://angularjs.org/");
        yield alr.angularlink.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            console.log(text);
        });
        yield protractor_1.browser.sleep(3000);
        yield alr.serch.sendKeys("Angularjs");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFrRDtBQUNsRCx5REFBc0Q7QUFDdEQsaUVBQThEO0FBRTlELFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsSUFBSSxHQUFHLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDM0IsU0FBZSxRQUFRLENBQUMsQ0FBTSxFQUFFLENBQU07O1lBQ2xDLE1BQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEIsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLENBQUM7S0FBQTtJQUNELFNBQWUsV0FBVyxDQUFDLENBQU0sRUFBRSxDQUFNOztZQUNyQyxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RCLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFDRCxTQUFlLFFBQVEsQ0FBQyxDQUFNLEVBQUUsQ0FBTTs7WUFDbEMsTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1B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