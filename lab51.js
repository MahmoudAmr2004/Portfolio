// This is the JavaScript file
// Store the questions and answers in an array of objects
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
        answer: "Hyper Text Markup Language",
        difficulty: 1 // 1 is easy, 2 is medium, 3 is hard
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        answer: "Cascading Style Sheets",
        difficulty: 1
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "font", "styles", "class"],
        answer: "style",
        difficulty: 2
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "text-style"],
        answer: "color",
        difficulty: 2
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        options: ["alert(\"Hello World\");", "alertBox(\"Hello World\");", "msg(\"Hello World\");", "msgBox(\"Hello World\");"],
        answer: "alert(\"Hello World\");",
        difficulty: 3
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function = myFunction()", "function myFunction()", "function:myFunction()", "myFunction()"],
        answer: "function myFunction()",
        difficulty: 3
    }
];

// Get the HTML elements
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

// Declare some variables to keep track of the quiz state
let currentQuestion = 0; // the index of the current question
let score = 0; // the current score
let difficulty = 1; // the current difficulty level

// Define a function to display the questions
function showQuestion() {
    // Clear the quiz container
    quizContainer.innerHTML = "";

    // Get the current question object from the array
    const question = questions[currentQuestion];

    // Check if the question matches the difficulty level
    if (question.difficulty !== difficulty) {
        // If not, find another question with the same difficulty
        for (let i = 0; i < questions.length; i++) {
            // If found, swap the questions and break the loop
            if (questions[i].difficulty === difficulty) {
                let temp = questions[currentQuestion];
                questions[currentQuestion] = questions[i];
                questions[i] = temp;
                question = questions[currentQuestion];
                break;
            }
        }
    }

    // Create a div element to hold the question
    const questionElement = document.createElement("div");
    // Set its class to question
    questionElement.className = "question";
    // Set its text content to the question text
    questionElement.textContent = question.question;
    // Append it to the quiz container
    quizContainer.appendChild(questionElement);

    // Create a div element to hold the options
    const optionsElement = document.createElement("div");
    // Set its class to options
    optionsElement.className = "options";
    // Append it to the quiz container
    quizContainer.appendChild(optionsElement);

    // For each option in the question
    for (let i = 0; i < question.options.length; i++) {
        // Create a div element to hold the option
        const optionElement = document.createElement("div");
        // Set its class to option
        optionElement.className = "option";
        // Append it to the options container
        optionsElement.appendChild(optionElement);

        // Create an input element for the radio button
        const inputElement = document.createElement("input");
        // Set its type to radio
        inputElement.type = "radio";
        // Set its name to option
        inputElement.name = "option";
        // Set its value to the option text
        inputElement.value = question.options[i];
        // Append it to the option container
        optionElement.appendChild(inputElement);

        // Create a label element for the option text
        const labelElement = document.createElement("label");
        // Set its for attribute to link it with the input element
        labelElement.htmlFor = inputElement.id;
        // Set its text content to the option text
        labelElement.textContent = question.options[i];
        // Append it to the option container
        optionElement.appendChild(labelElement);
    }
}

// Define a function to show the results
function showResults() {
    // Clear the quiz container
    quizContainer.innerHTML = "";
    // Clear the results container
    resultsContainer.innerHTML = "";

    // Create a h3 element to display the score
    const scoreElement = document.createElement("h3");
    // Set its text content to the score
    scoreElement.textContent = "Your score: " + score + " / " + questions.length;
    // Append it to the results container
    resultsContainer.appendChild(scoreElement);

    // Create a ul element to display the details
    const detailsElement = document.createElement("ul");
    // Append it to the results container
    resultsContainer.appendChild(detailsElement);

    // For each question in the array
    for (let i = 0; i < questions.length; i++) {
        // Get the question object
        const question = questions[i];
        // Get the user answer from the local storage
        const userAnswer = localStorage.getItem("question" + i);
        // Create a li element to display the question details
    }
}