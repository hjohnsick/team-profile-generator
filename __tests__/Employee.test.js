const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    describe('getName', () => {
        it("should get the name of the employee", () => {
            const employee = new Employee('Yolanda', 5, 'yolo@gmail.com');
            const name = employee.getName();

            expect(name).toBe('Yolanda');
        });
    });

    describe('getId', () => {
        it("should get the id of the employee", () => {
            const employee = new Employee('Steve', 2, 'steve@gmail.com');
            const id = employee.getId();

            expect(id).toEqual(2);
        });
    });

    describe('getEmail', () => {
        it("should get the email of the employee", () => {
            const employee = new Employee('Ron', 4, 'CaptainRon@yahoo.com');
            const email = employee.getEmail();

            expect(email).toEqual('CaptainRon@yahoo.com');
        });
    });

    describe('getRole', () => {
        it("should return the role as Employee", () => {
            const employee = new Employee('Michael', 5, 'michaelscott@dundermifflin.com');
            const role = employee.getRole();

            expect(role).toEqual('Employee');
        })
    });
});