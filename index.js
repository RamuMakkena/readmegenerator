// TODO: Include packages needed for this application
const inquirer=require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:"Enter the tile of the project?",
        validate: titleInput => {
            if(titleInput){
                return true;
            }else{
                console.log('Please Enter project title');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'author',
        message:"Provide your github id : ",
        validate: githubInput => {
            if(githubInput){
                return true;
            }else{
                console.log('Please Enter your github ID');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'description',
        message:"Provide the description fo the project",
    },
    {
        type:'input',
        name: 'installationSteps',
        message:"Enter steps for installation",
        default: 'npm install'
    },
    {
        type:'input',
        name: 'usageInstructions',
        message:"Provide a detailed description on how to use"
        

    },
    {
        type:'input',
        name: 'license',
        message:"What Type of Lincense we use?",
        choices: ['MIT', 'GNU GPLv3', 'BSD3', 'Mozilla public license 3'],
        default : 'GNU GPLv3'
    },
    {
        type: 'confirm',
        name: 'otherContributors',
        message: "Do you have any other contributors to this projects?",
        default: false
    },
    {
        type:'input',
        name: 'contributors',
        message:"Provide the contributors github IDs (separated by comma)? ",
        when : ({otherContributors}) => otherContributors
    },
    {
        type:'input',
        name: 'tests',
        message: "How to run tests?",
        default: "npm test"
    },
    {
        type:'input',
        name: 'contactInfo',
        message:"Provide contact information for questions",
        validate: contactInfoInput => {
            if(contactInfoInput){
                return true;
            }
            else{
                console.log('Please enter your contact info');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then( answers => {
        const readMeData = generateMarkdown(answers);
        fs.writeFile('./README.md', readMeData, err=> {
            if(err) throw new Error(err);
            console.log('Read me updated. check README.md in this directory');
        });
    });

}

// Function call to initialize app
init();
