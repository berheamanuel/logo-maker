// Inquirer (node package manager) import
const inquirer = require("inquirer");

// File system module (node package manager) import
const fs = require("fs");

// Importing classes from ./lib/shapes directory
const { Triangle, Rectangle, Circle } = require("./lib/shapes.js");

//array of questions for user input
const questions = [
    {
        type: "input",
        message: "What text would you like your logo to display? (Enter up to three characters)",
        name: "text",
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again");
            }
            return true;
        }
    },
    // Text color prompt
    {
        type: "input",
        message: "Choose text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
    },
    // Shape choice prompt
    {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Rectangle", "Circle"],
        name: "shape",
    },
    // Shape color prompt
    {
        type: "input",
        message: "Choose shapes color (Enter color keyword OR a hexadecimal number)",
        name: "shapeColor",
    },
];

function setShape(response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Rectangle') {
        let userShape = new Rectangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
        
    if (response.shape === 'Triangle') {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
}
// Create a function to write svg file
function writeToFile(data) {

    const filename = "./example/logo.svg";
    const setSVG = setShape(data);

    fs.writeFile(filename, setSVG, function (err) {
        err ? console.log(err) : console.log(filename + " " + "Successfully created!")
    });
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile(response);
        })
        .catch(err => {
            console.log(err)
        });
}

// Function call to initialize app
init();