const Manager = require("../lib/Manager");

it("able to set an manager name throught the contructor", () => {
  const testValue = "Ashley";
  const manager = new Manager(testValue);
  expect(manager.name).toBe(testValue);
});
it("able to set an managers id throught the contructor", () => {
  const testValue = "Manager Name";
  const idValue = 1234;
  const employee = new Manager(testValue, idValue);
  expect(employee.id).toBe(idValue);
});

it("able to set an managers email throught the contructor", () => {
  const testValue = "Manager Name";
  const idValue = 1234;
  const emailValue = "email@email.com";
  const manager = new Manager(testValue, idValue, emailValue);
  expect(manager.email).toBe(emailValue);
});
it("able to set an managers email through the contructor", () => {
  const testValue = "Manager Name";
  const idValue = 1234;
  const emailValue = "email@email.com";
  const officeNumber = 1234;
  const manager = new Manager(testValue, idValue, emailValue, officeNumber);
  expect(manager.officeNumber).toBe(officeNumber);
});
