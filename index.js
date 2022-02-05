const inquirer = require("inquirer");

const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the managers's name:"
        },
        {
            type: "input",
            name: "ID",
            message: "Enter the managers's ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email address:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number:"
        }
    ]);
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name:"
        },
        {
            type: "input",
            name: "ID",
            message: "Enter the engineer's ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's github username:"
        }
    ]);
};

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name:"
        },
        {
            type: "input",
            name: "ID",
            message: "Enter the intern's ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school:"
        }
    ]);
};