const Engineer = require("../lib/Engineer");

it("able to set an engineers name throught the contructor or something like that ", () => {
  const testValue = "Bob";
  const engineer = new Engineer(testValue);
  expect(engineer.name).toBe(testValue);
});

it("able to set an engineers id throught the contructor", () => {
  const testValue = "Engineer Name";
  const idValue = 1234;
  const engineer = new Engineer(testValue, idValue);
  expect(engineer.id).toBe(idValue);
});

it("able to set an engineers email through the contructor", () => {
  const testValue = "Engineer Name";
  const idValue = 1234;
  const emailValue = "email@email.com";
  const engineer = new Engineer(testValue, idValue, emailValue);
  expect(engineer.email).toBe(emailValue);
});
it("able to set an engineers github through the contructor", () => {
  const testValue = "Engineer Name";
  const idValue = 1234;
  const emailValue = "email@email.com";
  const github = "bobdole";
  const engineer = new Engineer(testValue, idValue, emailValue, github);
  expect(engineer.github).toBe(github);
});
