import { Given, When, Then } from "@cucumber/cucumber";
import { browser, element, by } from "protractor";
import { calculator } from "../pageObjects/calculator";
import { anglurHomePage } from "../pageObjects/anglurHomePage";
import chai from "chai";
var expect =chai.expect;
let cal = new calculator();
let alr = new anglurHomePage();
Given('i will nivigate to {string} website', async (string) => {

    if(string=="angular")
    {  // await browser.driver.manage().window().maximize();
        await browser.get("https://angularjs.org/");
    }
    else if(string=="calc")
    {   
        await browser.get("http://juliemr.github.io/protractor-demo/");
    }
    
});
When('i will run fumction of add using two numbers {string} and {string}', async (string, string2) => {

    await cal.firsteditbox.sendKeys(string);
    await cal.secodeditbox.sendKeys(string2);
    await cal.add.click();
})
When('click on angulor link', async ()=> {
    await alr.angularlink.click();
});

When('navigate to angular page', async ()=> {
    await browser.getTitle().then(function(text){
        console.log(text)
    });
  });
  Then('user enter {string} in search box', async (string)=> {
    await browser.sleep(3000);
    await alr.serch.sendKeys(string);
  });
Then('after operation perform and {string} display in console', async (string) => {
    await cal.go.click();
    await element.all(by.repeater("result in memory")).each(function (result) {
        result.element(by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log("Output is : " + text)
            expect(text).to.equal(string);
        })
    })
})

