// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}

## Description
${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)



## Installation
To install necessary dependencies, run the following command:
${data.installation}


## Usage
${data.usage}


## License

This project is licensed under the ${data.license} License.




## Contributing
${data.contributing}



## Tests

To run tests, run the following command:
${data.tests}



## Questions

If you have any questions about the repo, open an issue or contact me directly at 
${data.email}. You can find more of my work at https://github.com/${data.username}/.

`;
}

module.exports = generateMarkdown;
