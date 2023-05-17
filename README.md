# This is a web page created for my Javascript I class, we were to make a webpage that was to be some sort of Javascript Quiz. I decided to make a knowledge quiz.
#The requirements for the webpage are below. I got full points and an A in the class.

General Steps:
Plan and break down the requirements of this project into smaller tasks that you can demonstrate with HTML and JavaScript.
Your JavaScript game needs to have JavaScript as the subject of the entire game, but you might also want to wrap it up with a creative theme that reflects your own interests. Your game must be professional, but you can also dress it up with a creative theme.
Keep building your web page and modifying it with JavaScript until all requirements are accomplished.
Once the HTML and JavaScript are working, write CSS to add a pleasing and responsive web site per the details below as well as the amount of time and effort you want to put into this.
For grading purposes, put your efforts into knocking off all of the JavaScript requirements included. But yes, demonstrate your own interests and creativity, also work hard on your theme so that the wording of your questions, your images, and your styles align.
Specifics:
Create a well-formed, semantically correct html page. Include appropriate wireframe tags.
Include a div to wrap all content in the body.
Set the width of wrapper div to less than 100% and center the div.
Review the list of required items below, incorporating them into your JavaScript game.
Validate your html.
Validate your css.
Spell check all content.
Your page should follow responsive web design principles.
All measurements should be flexible. (em and % or other responsive units of measure).
Images should be flexible. e.g. { max-width: 100% }, no height= or width= attributes in html. Incorporate at least two images in your game!
meta viewport tag should be added. <meta name="viewport" content="width=device-width, initial-scale=1.0">
Two media queries for tablet and phone size should be added. I don't care if you code it with max-width queries for a traditional approach or with min-width queries for a mobile-first approach, but the media queries should make significant and appropriate styling changes at the three basic screen sizes of mobile - tablet - laptop. Ideas:
2 columns at laptop size, 1 column at tablet/phone
not full width at laptop size, use more width at tablet, use full width at phone size
darker backgrounds / sharper text contrast as the screen gets smaller
more content at laptop size, but hide non-critical content at smaller screen sizes
different navigation capabilities at smaller screen sizes
All css and JavaScript should be stored in external files.
All files should be properly documented with your name and the current date.
NOTE! You MUST present your project to the rest of the class to get full credit.
Your game should demonstrate and use this list of JavaScript knowledge (but it is not limited to this list):
As you are coding your game, include a JavaScript comment to identify each of these requirements in your external .js file.
"use strict";
document.getElementById("something1").textContent
document.getElementById("something2").value
document.getElementsByTagName("something3")
document.getElementById("something4").className
document.getElementById("something5").classList
document.querySelectorAll(".something6")
window.prompt() ...but only once, please!
window.alert() ....but only once, please!
let and const
for
if ... else
while
switch
array
create several custom functions to process your game
addEventListener() to trigger all functions OR you can also use individual JavaScript event properties such as .onclick and assign a function to that property
Do NOT use any JavaScript inside of HTML opening tags. Do NOT use the "on" HTML attributes such as onclick!
use JavaScript to modify images
console.log() to follow and debug your code -- leave these in the js file
include the following operations, conditional operators, and logical operators
+   -   *   /   %   **
Differentiate the use of + to add versus concatenate.
==   +=
===   !=   !==
++    --   
>   <   >=   <=
&&   ||
