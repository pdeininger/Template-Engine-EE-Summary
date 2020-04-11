const Employee = require("../lib/employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);

    this.github = github;

    this.role = "Engineer";
  }
  getgithub() {
    return this.github;
  }
  getRole() {
    return this.Title;
  }
}

module.exports = Engineer;
