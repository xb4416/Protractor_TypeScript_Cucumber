import { element, ElementFinder, by } from "protractor";

export class calculator {

    firsteditbox: ElementFinder;
    secodeditbox: ElementFinder;
    add: ElementFinder;
    div: ElementFinder;
    sub: ElementFinder;
    mod: ElementFinder;
    mul: ElementFinder;
    go: ElementFinder;


    constructor() {
        this.firsteditbox = element(by.model("first"));
        this.secodeditbox = element(by.model("second"));
        this.add = element(by.model("operator")).element(by.css("option[value='ADDITION']"));
        this.sub = element(by.model("operator")).element(by.css("option[value='SUBTRACTION']"));
        this.div = element(by.model("operator")).element(by.css("option[value='DIVISION']"));
        this.mod = element(by.model("operator")).element(by.css("option[value='MODULO']"));
        this.mul = element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']"));
        this.go = element(by.id("gobutton"));

    }
}