const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    describe('getOfficeNumber', () => {
        it('should get the office number', () => {
            const manager = new Manager('Ruben', 1, 'ruben@gmail.com', 123);
            const officeNumber = manager.getOfficeNumber();
            expect(officeNumber).toEqual(123);
        });
    });

    describe('getRole', () => {
        it('should get the role of manager', () => {
            const manager = new Manager('Frank', 2, 'frank@gmail.com', 1);
            const role = manager.getRole();
            expect(role).toEqual('Manager');
        });
    });

    describe('getName', () => {
        it('should get the name of the manager', () => {
            const manager = new Manager('Sue', 2, 'suefinkle@gmail.com', 1);
            const name = manager.getName();
            expect(name).toEqual('Sue');
        });
    });

    describe('getId', () => {
        it('should get the id of the manager', () => {
            const manager = new Manager('Lou', 2, 'lou@gmail.com', 1);
            const id = manager.getId();
            expect(id).toEqual(2);
        });
    });

    describe('getEmail', () => {
        it('should get the email of the manager', () => {
            const manager = new Manager('Tonya', 4, 'tonya@yahoo.com', 1);
            const email = manager.getEmail();
            expect(email).toEqual('tonya@yahoo.com');
        });
    });
});