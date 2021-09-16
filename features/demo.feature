
Feature: testing cucumber 
 
    Feature i am going to valididate calcualtor application
@calcualtorTesting
# Scenario: calculator add funcationality testing
# Given i will nivigate to "calc" website
# When  i will run fumction of add using two numbers "25" and "20"
# Then  after operation perform and "45" display in console 

@calcualtorTesting
Scenario Outline: calculator add funcationality testing
Given i will nivigate to "calc" website
When  i will run fumction of add using two numbers "<number1>" and "<number2>"
Then  after operation perform and "<result>" display in console 

Examples:
|number1|  |number2|  |result|
|10|       |15|       |25|
|20|       |15|       |35|     
|30|       |15|       |45|    
@angularTesting
Scenario Outline:  navigate to anagular page 
Given i will nivigate to "angular" website
When  click on angulor link  
And  navigate to angular page 
Then  user enter "<key>" in search box
Examples:
    | key | 
    | krishan|
    | kant|  
    | singh| 
   
   
  
  
