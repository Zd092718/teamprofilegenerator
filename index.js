const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");

const managerArray = [];
const internArray = [];
const engineerArray = [];
const mainArray = [];
getMainInfo();

function getMainInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your project/team",
        name: "project",
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
      mainArray.push(answer.project);
      getEmployeeInfo();
    });
}

function getEmployeeInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the team member name",
        name: "name",
      },
      {
        type: "list",
        message: "What is their position?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "position",
      },
      {
        type: "input",
        message: "What's their ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What's their email?",
        name: "email",
      },
      {
        type: "input",
        message: "What's the manager's office number?",
        name: "officeNumber",
        when: (answers) => answers.position === "Manager",
      },
      {
        type: "input",
        message: "What's the engineer's github account name?",
        name: "github",
        when: (answers) => answers.position === "Engineer",
      },
      {
        type: "input",
        message: "What's the intern's school?",
        name: "school",
        when: (answers) => answers.position === "Intern",
      },
    ])
    .then((response) => {
      if (response.position === "Manager") {
        const manager = new Manager(
          response.name,
          response.id,
          response.email,
          response.officeNumber
        );
        managerArray.push(manager);
      } else if (response.position === "Engineer") {
        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        );
        engineerArray.push(engineer);
      } else {
        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        );
        internArray.push(intern);
      }
      addEmployee();
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add another person?",
        name: "another",
        choices: ["Yes", "No"],
      },
    ])
    .then((response) => {
      if (response.another === "Yes") {
        getEmployeeInfo();
      } else {
        generateHTML();
      }
    });
}

function managerCard() {
  let managerInfo = "";
  for (let i = 0; i < managerArray.length; i++) {
    const info = managerArray[i];
    managerInfo += `
    <div class="card-body">
      <h5 class="card-title">${info.name}</h5>
      <p class="card-text">${info.getRole()} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${info.id}</li> 
      <li class="list-group-item">${info.getOfficeNumber()}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">${info.email}</a>
    </div>
    `;
  }
  return managerInfo;
}
function internCard() {
  let internInfo;
  for (let i = 0; i < internArray.length; i++) {
    const info = internArray[i];
    internInfo += `
    <div class="card-body">
      <h5 class="card-title">${info.name}</h5>
      <p class="card-text">${info.getRole()} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${info.id}</li> 
      <li class="list-group-item">${info.getSchool()}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">${info.email}</a>
    </div>
    `;
  }
  return internInfo;
}

function engineerCard() {
  let engineerInfo;
  for (let i = 0; i < engineerArray.length; i++) {
    const info = engineerArray[i];
    engineerInfo += `
    <div class="card-body">
      <h5 class="card-title">${info.name}</h5>
      <p class="card-text">${info.getRole()} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${info.id}</li> 
      <li class="list-group-item">${info.getGithub()}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">${info.email}</a>
    </div>
    `;
  }
  return engineerInfo;
}

function createTitle() {
  for (let i = 0; i < mainArray.length; i++) {
    const title = mainArray[i];

    return title;
  }
}

function generateHTML() {
  fs.writeFile(
    "./dist/index.html",
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${createTitle()}</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    </head>
    <body>
        <header class="p-3 mb-2 bg-primary text-white text-xl-center">${createTitle()}</header>
        <div class="card d-flex justify-content-around" style="width: 18rem;">
        ${managerCard()}
        ${internCard()}
        ${engineerCard()}      
        </div>
    </body>
    </html>`,
    (err) => {
      if (err) throw err;
    }
  );
}
