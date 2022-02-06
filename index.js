const inquirer = require("inquirer");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");

const employees = [];

const engineerPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the engineer's name:",
    },
    {
      type: "input",
      name: "Id",
      message: "Enter the engineer's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the engineer's email address:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter the engineer's github username:",
    },
    {
      type: "confirm",
      name: "addMember",
      message: "Would you like to add another member to your team?",
      default: false,
    },
  ]);
};

const internPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the intern's name:",
    },
    {
      type: "input",
      name: "Id",
      message: "Enter the intern's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the intern's email address:",
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school:",
    },
    {
      type: "confirm",
      name: "addMember",
      message: "Would you like to add another member to your team?",
      default: false,
    },
  ]);
};

const employeePrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What do you want to do?",
        choices: [
          "Add an intern",
          "Add an engineer",
          "Finish building out team",
        ],
      },
    ])
    .then(({ choice }) => {
      if (choice === "Add an intern") {
        return internPrompt()
        .then((internData) => {
            console.log(internData);
            if (internData.addMember) {
                employeePrompt();
            }
        });
      } else if (choice === "Add an engineer") {
        return engineerPrompt()
        .then((internData) => {
            console.log(internData);
            if (internData.addMember) {
                employeePrompt();
            }
        });
      } else {
        return;
      }
    });
};

const startApplication = () => {
  // prompted to enter managers info at start of application
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the managers's name:",
      },
      {
        type: "input",
        name: "ID",
        message: "Enter the managers's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number:",
      },
    ])
    .then((managersData) => {
        const manager = new Manager(managersData.name, managersData.id, managersData.email, managersData.officeNumber);
        employees.push(manager);
        return employeePrompt();
    })
};

startApplication()

