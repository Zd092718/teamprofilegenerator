const Intern = require('../lib/Intern');


it('able to set an interns name throught the contructor or something like that ', () => {
    const testValue = "Kate"
    const intern = new Intern(testValue)
    expect(intern.name).toBe(testValue)
});