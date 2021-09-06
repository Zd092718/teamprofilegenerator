const Employee = require('../lib/Employee');

it('retrieves employee name from input data', () => {
    const name = 'Jeff'
    expect(new Employee(name)).toBe('Jeff')
});