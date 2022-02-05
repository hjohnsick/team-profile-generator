class Manager extends Employee {
    constructor(officeNumber) {
        officeNumber = this.officeNumber;
    }

    getRole() {
        return new Manager();
    }
}