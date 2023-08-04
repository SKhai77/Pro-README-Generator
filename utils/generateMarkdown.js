// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None'){
    return '';
  }
  return `(https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return '';
  }
  return `${license}`;
}

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
"${data.installation}"


## Usage
${data.usage}


## License 
${renderLicenseSection(data.license)} 

This project is licensed under the ${data.license} License.
${renderLicenseLink(data.license)}




## Contributing
${data.contributing}



## Tests

To run tests, run the following command:
${data.tests}



## Questions

If you have any questions about the repo, contact me directly at my email:
${data.email}. You can find more of my work on GitHub at: https://github.com/${data.username}/.

`;
}

module.exports = generateMarkdown;
