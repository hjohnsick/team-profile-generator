const inquirer = require("inquirer");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer");

const engineerPrompt = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "ID",
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
        name: "ID",
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
    ]);
  };

const employeePrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What do you want to do?",
        choices: ["Add an intern", "Add an engineer", "Finish building out team"],
      },
    ])
    .then(({ choice }) => {
      if (choice === "Add an intern") {
        internPrompt();
      } else if (choice === "Add an engineer") {
        engineerPrompt();
      } else {
          return;
      }
    });
};

const startApplication = () => {
  // prompted to enter managers info at start of application
  inquirer.prompt([
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
    }
  ])
  .then(() => {
    employeePrompt();
  })

};

startApplication();
