# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a range of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. 

## Introduction

The index.js file contains all of your challenges. Please review it in full before answering the questions. If you complete the stretch goals please leave them in your file but commented out so that they do not affect the MVP tasks 

In meeting the minimum viable product (MVP) specifications listed below, you should have all tests passing. You can console.log to check your work and ensure you are submitting the correct results 

### Commits

Set up codegrade early and commit your code regularly and meaningfully. 

## Interview Questions
### (please edit this file and write your answer below each question.)
Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read.

1. Explain the differences between `.map`, `.reduce` and `.filter` and describe a use case for each. 

ANSWER: .map, .reduce, and .filter are all advanced array methods that create a new array and do not affect the original array.  

.map is great for converting data. You can pass in an array of numbers, invoke a map method to return an array of each number in the original array multiplied by 1.1 (good for currency conversions).  This new array of each number multiplied by 1.1 must be saved to a new variable.

.reduce returns a single value derived from an array. It is used primarily for adding or multiplying certain, or all, values in an array. In an array of objects, it is able to parse out solely values of specified key(s).

.filter returns an array that is a subset of the original array it parses over that "filter"s out elements based on one or more specifications.  For example, you can limit an array of people objects down to exclusively those people with brown eyes.  Resulting array must be saved to a new variable. 

2. Explain the difference between a callback and a higher order function.

ANSWER: A callback function is a function that is passed into a higher order function.

3. Explain what a closure is.

ANSWER: A closure is an instance in which a function reaches into a function that is outside of its scope for information. 

4. Describe the four principles of the 'this' keyword.

ANSWER: 
    a) Window binding - when 'this' is unassigned, 'this' is assigned to the entire window. This is pretty useless, and, in fact, is prohibited in strict mode, in which undefined is returned.
    b) Implicit binding - when a method is called on an object (Ex: Math.random()), the method simply looks to the left of the dot to determine what the method is being bound to.
    c) Explicit binding - this is when the 'this' keyword is manually set.  Using bind, call, or apply, we can establish 'this' to be what we declare, not what it is by default, necessarily.
    d) New binding - When a constructor function is invoked to create a new object using the 'new' keyword, 'this' is bound to the new object being created as a result of the constructor.

5. Why do we need super() in an extended class?

ANSWER: super() is required to instruct the child element to inherit specified attributes from the parent element. 

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Set up Project

Using VSCode and Command Line:


1. Fork the repo
2. Go into canvas and connect your reop to codegrade
3. Clone your forked version of the repo
4. DO NOT CREATE A BRANCH. You will be pushing your changes to the main/master today
5. cd into your repo
6. open the terminal in your vs code and type `npm install`
7. next type `npm run test` in your terminal
8. Complete your work making regular commits to main/ master your codegrade score will update each time you make a push.


### Testing & Debugging

Open a second terminal inside of your project by clicking on the split terminal icon
![alt text](assets/split_terminal.png "Split Terminal")

Inside of your second terminal type `npm start` 
![alt text](assets/npm_start.png "type npm start")

You will be running your tests in one terminal and debugging in the other. As you work on your code you should make use of `console.log` to check your progress and debug.
![alt text](assets/tests_debug_terminal_final.png "your terminal should look like this")

### Task 2: Project Requirements (MVP)

You must complete all tasks inside of `index.js` and answer the questions above.

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Resources
 
 [Sprint Challenge Study Guide](https://www.notion.so/lambdaschool/Unit-1-Sprint-3-Study-Guide-033a9a00659a4ef98c12eb97e49a6110)

## Submission format

Please submit your project via codegrade by following [these instructions](https://lambdaschool.notion.site/lambdaschool/Lambda-School-Git-Flow-Step-by-step-269f68ae3bf64eb689a8328715a179f9) See part 2, submitting an assignment with codegrade
