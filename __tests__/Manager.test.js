const Manager = require('../lib/Manager');

it('able to set an managers name throught the contructor or something like that ', () => {
    const testValue = "Ashley"
    const manager = new Manager(testValue)
    expect(manager.name).toBe(testValue)
});