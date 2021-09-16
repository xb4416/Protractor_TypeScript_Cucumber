import { browser, element, by } from "protractor";
import { calculator } from "./pageObjects/calculator";
import { anglurHomePage } from "./pageObjects/anglurHomePage";

describe("Protractor Suite ", () => {
    let cal = new calculator();
    async function addition(a: any, b: any) {
        await cal.firsteditbox.sendKeys(a);
        await cal.secodeditbox.sendKeys(b);
        await cal.add.click();
        await cal.go.click();
    }
    async function subtraction(a: any, b: any) {
        await cal.firsteditbox.sendKeys(a);
        await cal.secodeditbox.sendKeys(b);
        await cal.sub.click();
        await cal.go.click();
    }
    async function division(a: any, b: any) {
        await cal.firsteditbox.sendKeys(a);
        await cal.secodeditbox.sendKeys(b);
        await cal.div.click();
        await cal.go.click();
    }
    async function modulo(a: any, b: any) {
        await cal.firsteditbox.sendKeys(a);
        await cal.secodeditbox.sendKeys(b);
        await cal.mod.click();
        await cal.go.click();
    }
    async function multipliction(a: any, b: any) {
        await cal.firsteditbox.sendKeys(a);
        await cal.secodeditbox.sendKeys(b);
        await cal.mul.click();
        await cal.go.click();
    }

    it("Funcation Test", async () => {
        await browser.get("http://juliemr.github.io/protractor-demo/");
        await browser.driver.manage().window().maximize();
        await addition(14, 15)
        await subtraction(25, 10)
        await division(100, 20)
        await modulo(20, 6)
        await multipliction(40, 2)
        await element.all(by.repeater("result in memory")).each(function (result) {
            result.element(by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log("Output is : " + text)

            })
        })



    })


    it("Angular home page link validition", async () => {
        let alr = new anglurHomePage();
        await browser.get("https://angularjs.org/");
        await alr.angularlink.click();
        await browser.getTitle().then(function (text) {
            console.log(text)
        });
        await browser.sleep(3000);
        await alr.serch.sendKeys("Angularjs");
    })
})