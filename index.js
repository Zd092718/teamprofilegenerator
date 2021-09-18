const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");

const managerArray = [];
const internArray = [];
const engineerArray = [];
const mainArray = [];

function getMainInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please name the project/team",
        name: "project_name",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "We need a project/team name";
          }
        },
      },
    ])
    .then((answer) => {
      mainArray.push();
    });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

function init() {
  inquirer.prompt(questions);
  // .then((data) => generateHtml(data))
  // .then((data) => writeToFile('./dist/index.html', data))
  // .then((data) => generateCss(data))
  // .then((data) => writeToFile('./dist/style.css', data))
}

init();
