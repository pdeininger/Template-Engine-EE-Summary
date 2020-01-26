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
  inquirerr.prompt([
    {
      type: "input",
      name: "name",
      message: "Employee name:  "
    }
  ]);
}
