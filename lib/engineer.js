const Employee = require("../lib/employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email, github);

        this.github = github;

        this.role = "Engineer";
    }
    getgithub() {
        return this.github;
    }
    getTitle() {
        return this.Title
    }
};

module.exports = Engineer;