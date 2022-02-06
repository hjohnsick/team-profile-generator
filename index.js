const inquirer = require("inquirer");
const { choices } = require("yargs");

const employeePrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "Choose who you want to add to your team:",
        choices: ["Intern", "Engineer"],
      },
    ])
    .then(({ employee }) => {
      if (employee === "Intern") {
        internPrompt();
      } else {
        engineerPrompt();
      }
    });
};

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

const startApplication = () => {
  // prompted to enter managers info at start of application
  // promptManager()
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
    },
    //   {
    //     type: "list",
    //     name: "employee",
    //     message: "Choose who you want to add to your team:",
    //     choices: ["Intern", "Engineer"],
    //   },
  ])
  .then(() => {
    employeePrompt();
  })

 
};

startApplication();
