const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getSchool', () => {
        it('should get the name of the school', () => {
            const intern = new Intern('Henry', 1, 'henry@gmail.com', 'U of M');
            const school = intern.getSchool();

            expect(school).toEqual("U of M");
        });
    });

    describe('getRole', () => {
        it('should get the intern role', () => {
            const intern = new Intern('Henry', 1, 'henry@gmail.com', 'U of M');
            const role = intern.getRole();

            expect(role).toEqual("Intern");
        });
    });
})