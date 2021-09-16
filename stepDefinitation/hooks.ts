import {After, Before, Status, } from "@cucumber/cucumber";
import { HookCallbacks } from "async_hooks";

import{browser} from "protractor";



Before({tags: "@calcualtorTesting"},  async()=> {
    await browser.driver.manage().window().maximize();
});

Before({tags: "@angularTesting"},  ()=> {
  console.log("this is angulor testing application")
});

// After( async(scenario)=> {
//   this.attach = attach
//   if(scenario.result.status=== Status.FAILED)
//   {
//     let screenshort= await browser.takeScreenshot();
//     this.attach(screenshort,"image/png");
//   }
// });
After(async (scenario)=> {
  let attach:any ="no";
 if(scenario.result.status===Status.FAILED){
  let ss = await browser.takeScreenshot();
  const img = Buffer.alloc(ss.length, ss, 'base64');
  //this.attach(img, 'image/png');
 }
});