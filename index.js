// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        type: 'input',
        message: 'What kind of license should your project have?',
        choices: ['None', 'MIT', 'Apache 2.0', 'BSD 3', 'GNU', 'GPL 3.0'],
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
        name: 'test',
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

inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(JSON.stringify(answers));
        writeFile(answers);
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

function writeFile(answers) {
    const fileContents = `
User Info
====================================================
Name:                       ${answers.userName}
Languages:                  ${answers.userLanguages}
Preferred Communication:    ${answers.userCommunication}
`;

    fs.writeFile('README.md', fileContents, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("SUCCESS!");
        }
    })
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
