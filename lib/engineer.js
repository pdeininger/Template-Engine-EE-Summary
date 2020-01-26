const Employee = require("./employee");

class Engineer extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber

        this.role = "ENgineer";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Engineer;