const gitHubURL= 'https://github.com/';
// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let searchStringArray = license.split(' ');
  let searchString = searchStringArray.join('+')
  return `https://www.google.com/search?q=${searchString}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function isUndefined(input){
  if(input){
    return false;
  }
  return true;
}

function renderLicenseSection(license) {
  if(isUndefined(license)){
    return '';
  }else{
    return `
## License
### [${license}](${renderLicenseLink(license)})
    `;
  }
}

function generateTableOfContent(data){
  const {author, installationSteps, usageInstructions,license, contributors, tests, contactInfo } = data;
  let  stringContents= [];
  if(installationSteps){
    stringContents.push('[Installation](#installation)');
  }
  if(usageInstructions){
    stringContents.push('[Usage](#usage)');
  }
  if(contributors || author){
    stringContents.push('[contributors](#contributors)');
  }
  if(license){
    stringContents.push('[License](#License)');
  }
  if(tests){
    stringContents.push('[Tests](#tests)');
  }
  if(contactInfo){
    stringContents.push('[Questions](#questions)');
  }
  stringContents = stringContents.join('<br>');
  return `
## Table of Contents
${stringContents}
  `
}
function getInstallationSteps(installationSteps){
  if(isUndefined(installationSteps)){
    return '';
  }else{
    return `
## Installation
${installationSteps}
`;
}

}
function getUsageSteps(usageInstructions){
  if(isUndefined(usageInstructions)){
    return '';
  }
  return `
## Usage
${usageInstructions}`;
}
function displayContributors(contributors){
  if(isUndefined(contributors)){
    return '';
  }
  else {
    let contributorsArray = contributors.split(',');
    let contributorsProfiles = contributorsArray.map((contributor) => '['+contributor+']('+gitHubURL+contributor+')' );
    let contributorsString = `
${contributorsProfiles}
    `;
    return contributorsString;
  }
}
function getTestingSteps(tests){
  if(isUndefined(tests)){
    return '';
  }else{
    return `
## Tests
${tests}
    `
  }
}
function getContactInfo(contactInfo){
    if(isUndefined(contactInfo)){
      return '';
    }
    else{
        return `
Mail to : ${contactInfo}
`;
    }
}
//Main function to generate a markdown
function generateMarkdown(data) {
  // Destructuring the input
  const {title, author, description, installationSteps, usageInstructions,license, contributors, tests, contactInfo } = data;
  return `# ${title}
## Description
  ${description}
  ${generateTableOfContent(data)}
  ${getInstallationSteps(installationSteps)}
  ${getUsageSteps(usageInstructions)}
## Contributors
[${author}](${gitHubURL}+${author})
${displayContributors(contributors)}
${renderLicenseSection(license)}
${getTestingSteps(tests)}
## Questions
If you have any questions on this module. Please reachout to 
  [${author}](${gitHubURL}${author})
  ${getContactInfo(contactInfo)}
`;
}

module.exports = generateMarkdown;
