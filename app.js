const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

function getEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Employee name:  "
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID:  "
      },
      {
        type: "input",
        name: "email",
        message: "Employee email:  "
      },
      {
        type: "input",
        name: "github",
        message: "GitHub user name:  "
      }
    ])
    .then(function(answers) {
      newemployee = new Engineer(
        answers.name,
        answers.id,
        "Engineer",
        answers.github
      );
      team.push(newEmployee);
      repeatQuery();
    });
}

function getIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Employee name:  "
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID"
      },
      {
        type: "input",
        name: "email",
        message: "Employee email:  "
      },
      {
        type: "input",
        name: "github",
        message: "GitHub user name:  "
      }
    ])
    .then(function(answers) {
      newemployee = new Intern(
        answers.name,
        answers.id,
        "Intern",
        answers.github
      );
      team.push(newEmployee);
      repeatQuery();
    });
}

function getManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Employee name"
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID"
      },
      {
        type: "input",
        name: "email",
        message: "Employee email:  "
      },
      {
        type: "input",
        name: "github",
        message: "GitHub user name:  "
      }
    ])
    .then(function(answers) {
      newemployee -
        new getManager(answers.name, answer.id, "Manager", answers.github
        );
      team.push(newEmployee);
      repeatQuery();
    });
}
