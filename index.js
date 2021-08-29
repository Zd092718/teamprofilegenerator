const inquirer = require('inquirer')
const fs = require('fs');

const questions = [
{
    type: 'input',
    name: 'manager_name',
    message: "What's your manager's name",
  },
  {
    type: 'input',
    name: 'manager_id',
    message: "What's your manager's id",
  },
  {
    type: 'input',
    name: 'manager_email',
    message: "What's your manager's email address",
  },
  {
    type: 'input',
    name: 'office_number',
    message: "What's your manager's office number",
  },
  {
    type: 'list',
    name: 'add',
    message: 'Add another employee?',
    choices: ['Engineer', 'Intern', 'Finished'],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'engineer_name',
    message: "What's your engineer's name",
    when: (data) => data.add === 'engineer'
  },
  {
    type: 'input',
    name: 'id',
    message: "What's your engineer's id",
    when: (answers) => answers.add === 'engineer'
  },
  {
    type: 'input',
    name: 'email',
    message: "What's your engineer's email address",
    when: (answers) => answers.add === 'engineer'
  },
  {
    type: 'input',
    name: 'github',
    message: "What's your engineer's github username",
    when: (answers) => answers.add === 'engineer'
  },
  {
    type: 'list',
    name: 'add',
    message: 'Add another employee?',
    choices: ['Engineer', 'Intern', 'Finished'],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'intern_name',
    message: "What's your intern's name",
    when: (answers) => answers.add === 'intern'
  },
  {
    type: 'input',
    name: 'id',
    message: "What's your intern's id",
    when: (answers) => answers.add === 'intern'
  },
  {
    type: 'input',
    name: 'email',
    message: "What's your intern's email address",
    when: (answers) => answers.add === 'intern'
  },
  {
    type: 'input',
    name: 'school',
    message: "What's school did your intern attend",
    when: (answers) => answers.add === 'intern'
  },
  {
    type: 'list',
    name: 'add',
    message: 'Add another employee?',
    choices: ['Engineer', 'Intern', 'Finished'],
    filter(val) {
      return val.toLowerCase();
    },
    when: (answers) => answers.add === 'intern'
  },
];



function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!') )
};

function init() {
  inquirer.prompt(questions)
  // .then((data) => generateHtml(data))
  // .then((data) => writeToFile('./dist/index.html', data))
  // .then((data) => generateCss(data))
  // .then((data) => writeToFile('./dist/style.css', data))
}

init();