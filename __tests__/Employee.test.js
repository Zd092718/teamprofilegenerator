const Employee = require("../lib/Employee");

it("retrieves employee name from input data", () => {
  const name = "Jeff";
  const newEmp = new Employee(name);
  expect(newEmp.name).toBe("Jeff");
});

it("able to set an employees id throught the contructor", () => {
  const testValue = "Employee Name";
  const idValue = 1234;
  const employee = new Employee(testValue, idValue);
  expect(employee.id).toBe(idValue);
});

it("able to set an employees email throught the contructor", () => {
  const testValue = "Employee Name";
  const idValue = 1234;
  const emailValue = "email@email.com";
  const employee = new Employee(testValue, idValue, emailValue);
  expect(employee.email).toBe(emailValue);
});
