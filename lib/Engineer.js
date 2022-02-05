const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        super();
        this.github = github;
    }

    getGithub() {
        return this.getGithub;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;