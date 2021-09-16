import { ElementFinder,element,by } from "protractor";

export class anglurHomePage
{
    angularlink:ElementFinder;
    serch:ElementFinder;

constructor()
{
this.angularlink=element(by.linkText("angular.io"));
this.serch=element(by.css("input[type='search']"));
}
}
