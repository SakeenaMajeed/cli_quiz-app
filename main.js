#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta("..............................*WELCOME TO TYPESCRIPT Quizes*.............................\n"));
// ---------------- Start ---------------------
// Initialize the score 
let score = 0;
// Define the correct answers using the Answers interface
const correctAnswers = {
    question1: "d) Provides static typing and additional features to JavaScript for better code quality and maintainability.",
    question2: "c) TypeScript is used for both frontend and backend development.",
    question3: "d) Automatic HTML generation.",
    question4: "b) TypeScript is a strongly typed programming language.",
    question5: "a) JavaScript",
    question6: "c) Microsoft",
    question7: "b) October 2012",
    question8: "a) True",
    question9: "a) Case-sensitive.",
    question10: "b) False",
};
// 
async function quiz() {
    const questions = await inquirer.prompt([
        {
            name: "question1",
            message: chalk.bold.greenBright("Q1: What is TypeScript used for?"),
            type: "list",
            choices: [
                "a) Adds extra functionality to JavaScript.",
                "b) Converts JavaScript code into other programming languages.",
                "c) Simplifies the creation of HTML and CSS files.",
                "d) Provides static typing and additional features to JavaScript for better code quality and maintainability.",
            ],
        },
        {
            name: "question2",
            message: chalk.bold.greenBright("Q2: Is TypeScript frontend or backend?"),
            type: "list",
            choices: [
                "a) TypeScript is used only for frontend development.",
                "b) TypeScript is used only for backend development.",
                "c) TypeScript is used for both frontend and backend development.",
                "d) TypeScript is used for database management.",
            ],
        },
        {
            name: "question3",
            message: chalk.bold.greenBright("Q3: Which of the following is not a TypeScript feature?"),
            type: "list",
            choices: [
                "a) Static typing.",
                "b) Type inference.",
                "c) Object-oriented programming support.",
                "d) Automatic HTML generation.",
            ],
        },
        {
            name: "question4",
            message: chalk.bold.greenBright("Q4: Is TypeScript is a language?"),
            type: "list",
            choices: [
                "a) TypeScript is a framework for building user interfaces.",
                "b) TypeScript is a strongly typed programming language.",
                "c) TypeScript is a styling language for web design.",
                "d) TypeScript is a database query language.",
            ],
        },
        {
            name: "question5",
            message: chalk.bold.greenBright("Q5: Typescript is a superset of?"),
            type: "list",
            choices: [
                "a) JavaScript",
                "b) Python",
                "c) C++",
                "d) Java",
            ],
        },
        {
            name: "question6",
            message: chalk.bold.greenBright('Q6: Who developed TypeScript language?'),
            type: "list",
            choices: [
                "a) Apple",
                "b) IBM",
                "c) Microsoft",
                "d) Google"
            ],
        },
        {
            name: "question7",
            message: chalk.bold.greenBright("Q7: When was the first time TypeScript was made public?"),
            type: "list",
            choices: [
                "a) October 2011",
                "b) October 2012",
                "c) October 2013",
                "d) October 2014",
            ],
        },
        {
            name: "question8",
            message: chalk.bold.greenBright("Q8: TypeScript supports Object Oriented Programming concepts like classes, interfaces, inheritance."),
            type: "list",
            choices: ["a) True",
                "b) False",
                "c) None of the above",
                "d) Can be true or false"
            ],
        },
        {
            name: "question9",
            message: chalk.bold.greenBright("Q9: TypeScript is ?"),
            type: "list",
            choices: [
                "a) Case-sensitive.",
                "b) Case-insensitive.",
                "c) Depends on typescript version.",
                "d) None of the above.",
            ],
        },
        {
            name: "question10",
            message: chalk.bold.greenBright("Q10: A Tuple and an Array are the same thing when discussing types"),
            type: "list",
            choices: [
                "a) True.",
                "b) False",
            ],
        }
    ]);
    // Store the user's answers in an object
    const userAnswers = {
        question1: questions.question1,
        question2: questions.question2,
        question3: questions.question3,
        question4: questions.question4,
        question5: questions.question5,
        question6: questions.question6,
        question7: questions.question7,
        question8: questions.question8,
        question9: questions.question9,
        question10: questions.question10,
    };
    // Iterate over each question in userAnswers
    for (const question in userAnswers) {
        // Check if the user's answer matches the correct answer
        if (userAnswers[question] === correctAnswers[question]) {
            console.log(chalk.bold.blue(`Correct: ${userAnswers[question]}`));
            // If correct, print a success message and increment the score
            score++;
        }
        else {
            // If incorrect, print an error message along with the correct answer
            console.log(chalk.bold.red(`Incorrect: ${userAnswers[question]}. The correct answer is:\n ${chalk.cyanBright(correctAnswers[question])}`));
        }
    }
    // Print the total score
    console.log(chalk.magentaBright(`Your total score is: ${score} out of 10`));
}
;
// quiz();
// Function to control the main flow of the application
async function main() {
    let continueQuiz = true;
    while (continueQuiz) {
        await quiz(); // Run the quiz
        // Prompt the user to either try again or exit
        const { action } = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                message: "Would you like to try again or exit?",
                choices: [
                    "a) Exit",
                    "b) Try Again",
                ],
            },
        ]);
        // Check user's choice
        if (action === "a) Exit") {
            console.log(chalk.bold.rgb(170, 51, 106)("Thank you for playing! Goodbye!"));
            continueQuiz = false;
        }
        else if (action === "b) Try Again") {
            console.log(chalk.bold.blue("Let's try again!")); // Restart the quiz
        }
    }
}
;
// Run the main function to start the application
main();
