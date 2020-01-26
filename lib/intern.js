const Employee = require("./employee");

class Intern extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber

        this.role = "Intern";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Intern;