//Mel Lopez 5/17/23

"use strict"; //use strict requirement

//User name input and greeting
let userName = prompt("What's your name?");//prompt and let requirement
let greetingElement = document.getElementById("greeting");
console.log("User name entered: ", userName);//console.log requirement

//if...else requirement
if (userName) {
  greetingElement.textContent = `Hello ${userName}!`;//document.getElementById("something1").textContent requirement
  alert(`Hello ${userName}!`);//alert requirement
  console.log("User greeted with Hello.");
} else {
  userName = "Bob";
  greetingElement.textContent = `Hi ${userName}!`;//document.getElementById("something1").textContent requirement
  alert(`Well, I guess your name will be ${userName} now. Hi ${userName}!`);//alert requirement
  console.log("User greeted with Hello.");
}

let correctAnswer;
let numQuestions = 0;
let numCorrect = 0;

function generateProblem() {
  if (numQuestions >= 5) {
    document.getElementById("problem").innerHTML = "You have answered 5 questions. You got " + numCorrect + " correct.";
    document.getElementById("answer").style.display = "none";
    document.getElementById("submit").style.display = "none";
    return;
  }

  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let operator = Math.floor(Math.random() * 6) + 1;
  let operatorString;

  switch (operator) {
    case 1:
      operatorString = "+";
      correctAnswer = num1 + num2;
      break;
    case 2:
      operatorString = "-";
      correctAnswer = num1 - num2;
      break;
    case 3:
      operatorString = "*";
      correctAnswer = num1 * num2;
      break;
    case 4:
      operatorString = "/";
      correctAnswer = Math.round((num1 / num2) * 100) / 100;
      break;
    case 5:
      operatorString = "%";
      correctAnswer = num1 % num2;
      break;
    case 6:
      operatorString = "**";
      correctAnswer = num1 ** num2;
      break;
  }
  console.log("Generated problem:", num1, operatorString, num2, "=", correctAnswer);

  document.getElementById("problem").innerHTML = "Question " + (numQuestions + 1) + ": What is " + num1 + " " + operatorString + " " + num2 + "?";
  document.getElementById("answer").value = "";
}

document.getElementById("submit").addEventListener("click", function() {
  let answer = document.getElementById("answer").value;
  let resultElement = document.getElementById("result1");

  console.log("User's answer:", answer);
  console.log("Correct answer:", correctAnswer);

  if (answer == correctAnswer) {
    resultElement.innerHTML = "Correct!";
    numCorrect++;
  } else {
    resultElement.innerHTML = "Incorrect. The correct answer is " + correctAnswer;
  }

  numQuestions++;
  generateProblem();
});

generateProblem();

//Addition vs Concatenation requirement
// Get user's input and store them in variables
let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let additionButton = document.getElementById("additionButton");
let concatenationButton = document.getElementById("concatenationButton");
let result2Paragraph = document.getElementById("result2");

// Add event listeners to the buttons
additionButton.addEventListener("click", addition);
concatenationButton.addEventListener("click", concatenation);

function addition() {
  let num1 = Number(num1Input.value);
  let num2 = Number(num2Input.value);
  let result = num1 + num2;
  result2Paragraph.innerHTML = "Addition result: " + result;
}

function concatenation() {
  let num1 = Number(num1Input.value);
  let num2 = Number(num2Input.value);
  let result = "" + num1 + num2; // Convert num1 and num2 to strings by concatenating with an empty string
  result2Paragraph.innerHTML = "Concatenation result: " + result;
}

//Conditional and Logical Operator Comparisons
//const requirement
const operatorInfo = {//shows what each operator does
  '==': 'Checks if two values are equal, regardless of their data type.',
  '+=': 'Adds the value on the right-hand side to the value on the left-hand side and assigns the result to the left-hand side.',
  '===': 'Checks if two values are equal, including their data type.',
  '!=': 'Checks if two values are not equal, regardless of their data type.',
  '!==': 'Checks if two values are not equal, including their data type.',
  '++': 'Increments the value by 1.',
  '--': 'Decrements the value by 1.',
  '>': 'Checks if the value on the left-hand side is greater than the value on the right-hand side.',
  '<': 'Checks if the value on the left-hand side is less than the value on the right-hand side.',
  '>=': 'Checks if the value on the left-hand side is greater than or equal to the value on the right-hand side.',
  '<=': 'Checks if the value on the left-hand side is less than or equal to the value on the right-hand side.',
  '&&': 'Checks if both conditions on the left-hand side and the right-hand side are true.',
  '||': 'Checks if either the condition on the left-hand side or the right-hand side is true.'
};
const operatorSelect = document.getElementById('operatorSelect');
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', showOperatorInfo);
function showOperatorInfo() {
  let operator = operatorSelect.value;
  let outputDiv = document.getElementById('output');
  while (!operatorInfo.hasOwnProperty(operator)) {//while requirement
    operator = prompt(`'${operator}' is not a valid operator. Please enter a valid operator.`);
  }
  outputDiv.innerHTML = `<p><code>${operator}</code>: ${operatorInfo[operator]}</p>`;
}

// Reserved JavaScript words
const reservedWords = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield"
];

function checkReserved() {
  const userInput = document.getElementById("wordInput").value;
  let isReserved = false;

  // Check if user input is a reserved word
  for (let i = 0; i < reservedWords.length; i++) { //for loop requirement
    if (userInput === reservedWords[i]) {
      isReserved = true; //boolean requirement
      break;
    }
  }

  // Display the result
  const resultElement = document.getElementById("result3");
  if (isReserved) {
    const message = "Sorry, that word is a reserved JavaScript word.";
    console.log(message);
    resultElement.textContent = message;
  } else {
    const message = "That word is not a reserved JavaScript word.";
    console.log(message);
    resultElement.textContent = message;
  }
}

//document.getElementsByTagName requirement
let headers = document.getElementsByTagName('h3');
for(let i = 0; i < headers.length; i++) {
    headers[i].style.color = 'violet';
}

//document.querySelectorAll requirement
let buttons = document.querySelectorAll('button');
for(let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'violet';
}

// Accessing an element by its id
const myElement = document.getElementById('bottom');

// Accessing its class name(s)
console.log(myElement.className);

// Accessing its class list
console.log(myElement.classList);

//Image change
let image = document.getElementById("myImage");
image.addEventListener("click", function() {
  if (image.src.match("javascriptimg.jpg")) {
    image.src = "think.jpg";
  } else {
    image.src = "javascriptimg.jpg";
  }
});
