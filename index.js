// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a short description for your project!',
        name: 'description'
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ['None', 'MIT', 'Apache', 'BSD', 'IBM'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err, data) => {
        console.log('The Professional README file has been created in "generatedFile" folder.');
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            //   answers need to be used to generate the markdown. 
            
            writeToFile('./generatedFile/README.md', generateMarkdown(answers))
        });
}

// Function call to initialize app
init();

