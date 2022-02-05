const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getGithub', () => {
        it('should get the github link', () => {
            const engineer = new Engineer('Henry', 1, 'henry@gmail.com', 'henry');
            const github = engineer.getGithub();

            expect(github).toEqual("henry");
        });
    });

    describe('getRole', () => {
        it('should get the engineer role', () => {
            const engineer = new Engineer('Henry', 1, 'henry@gmail.com', 'henry');
            const role = engineer.getRole();

            expect(role).toEqual("Engineer");
        });
    });
})