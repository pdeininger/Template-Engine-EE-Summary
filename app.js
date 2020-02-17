const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = "../lib/Intern";
const Manager = "../lib/Manager";

const inquirer = require("inquirer");
const prompt = require("prompt");
const fs = require("fs");

//const prompt = inquirer.createPromptModule();

function devTeam() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "team",
        message: "What is the name of the team?"
      },
      {
        type: "input",
        name: "engineeerCount",
        message: "How many Engineers are on the team?"
      },
      {
        type: "input",
        name: "internCount",
        message: "How man Interns are on the team?"
      },
      {
        type: "input",
        name: "managerName",
        message: "Who is the Manager"
      },
      {
        type: "input",
        name: "managerId",
        message: "Provide the Managers Id?"
      },
      {
        type: "input",
        name: "managersEmail",
        message: "Provide the Manager's email address?"
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Provide the Manager's contact number?"
      },
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the Engineer?"
      },
      {
        type: "input",
        name: "engineerId",
        message: "Provide the Engineer's Id"
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Provide the Engineer's email address"
      },
      {
        type: "input",
        name: "Engineer's GitHub",
        message: "Provide the Engineer's GitHub"
      },
      {
        type: "input",
        name: "internName",
        message: "What is the name of the Intern?"
      },
      {
        type: "input",
        name: "internId",
        message: "Provide the Intern's Id"
      },
      {
        type: "input",
        name: "internEmail",
        message: "Provide the Intern's email address"
      },
      {
        type: "input",
        name: "internSchol",
        message: "Where does the Intern attend school?"
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
    })

    .then(function(answers) {
      newemployee = new Intern(
        answers.name,
        answers.id,
        "Intern",
        answers.github
      );
      team.push(newEmployee);
      repeatQuery();
    })

    .then(function(answers) {
      newemployee -
        new getManager(answers.name, answer.id, "Manager", answers.github);
      team.push(newEmployee);
      repeatQuery();
    });
}
buildEmployee();
