const Employee = require("../lib/employee");

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email, school);

        this.school = school

        this.title = "Intern";
    }
    getSchool() {
        return this.school;
    }
};

module.exports = Intern;