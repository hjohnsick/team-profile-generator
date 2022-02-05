const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    describe('getOfficeNumber', () => {
        it('should get the office number', () => {
            const manager = new Manager(123, 'Ruben', 1, 'ruben@gmail.com');
            const officeNumber = manager.getOfficeNumber();
            expect(officeNumber).toEqual(123);
        });
    });

    describe('getRole', () => {
        it('should get the role of manager', () => {
            const manager = new Manager(1, 'Frank', 2, 'frank@gmail.com');
            const role = manager.getRole();
            expect(role).toEqual('Manager');
        });
    });

    describe('getName', () => {
        it('should get the name of the manager', () => {
            const manager = new Manager(2, 'Sue', 2, 'suefinkle@gmail.com');
            const name = manager.getName();
            expect(name).toEqual('Sue');
        });
    });

    describe('getId', () => {
        it('should get the id of the manager', () => {
            const manager = new Manager(1, 'Lou', 2, 'lou@gmail.com');
            const id = manager.getId();
            expect(id).toEqual(2);
        });
    });

    describe('getEmail', () => {
        it('should get the email of the manager', () => {
            const manager = new Manager(1, 'Tonya', 4, 'tonya@yahoo.com');
            const email = manager.getEmail();
            expect(email).toEqual('tonya@yahoo.com');
        });
    });
});