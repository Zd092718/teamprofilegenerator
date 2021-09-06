const Engineer = require('../lib/Engineer');

it('able to set an engineers name throught the contructor or something like that ', () => {
    const testValue = "Bob"
    const engineer = new Engineer(testValue)
    expect(engineer.name).toBe(testValue)
});