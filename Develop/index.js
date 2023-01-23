// TODO: Include packages needed for this application
const inquirer = require ('inquirer');

const fs = require ('fs');

// TODO: Create an array of questions for user input
const questions = [
    { // Title Question
        type: 'input',
        message: 'Title of your project.',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description of your project.',
        name: 'description'
    },
    {
        type: 'list',
        choices: [
            'MIT',
            'GNU GPLv3',
            'Apache License 2.0',
            'None'
        ],
        message: 'Which of the following licenses you would like to use?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Installation instructions.',
        name: 'userInstall'
    },
    {
        type: 'input',
        message: 'The URL of your deployed application',
        name: 'userURL'
    },
    {
        type: 'input',
        message: 'Enter user instructions.',
        name: 'userInstructions'
    },
    {
        type: 'input',
        message: 'Collaborators on this project.',
        name: 'collaborators'
    },
    {   //npm run test
        type: 'input',
        message: 'Enter the test script',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Your GitHub user name?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'Your email address?',
        name: 'userEmail'
    }
];

// TODO: Create a function to write README file
const licenseBadges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}

function writeToFile(fileName, data) {
    const license = licenseBadges[data.license] || '';
    const contents = `
# ${data.title}
${license}
## Description\n${data.description}\n

## Table of contents\n

- [Installation](#Insallation)\n
- [Usage](#Usage)\n
- [Contribution](#Contributing)\n
- [Test](#Test)\n
- [Questions](#Questions)\n

## Installation\n${data.userInstall}\n

## Usage\n${data.userInstructions}\n

## Contributing\n${data.collaborators}\n

## Test\n${data.test}\n

## Questions\n

GitHub Username: [${data.userName}](https://github.com/${data.userName})\n

Email Address: [${data.userEmail}](${data.userEmail})`;

    fs.writeFileSync(fileName, contents)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {writeToFile('README.md', answers)}) 
        .catch(error => {
            if(error){
                throw error
            }
        })
}

// Function call to initialize app
init();
