const Intern = require("../lib/Intern");

it("able to set an interns name throught the contructor or something like that ", () => {
  const testValue = "Kate";
  const intern = new Intern(testValue);
  expect(intern.name).toBe(testValue);
});

it("able to set an interns id throught the contructor", () => {
  const testValue = "Intern Name";
  const idValue = 1234;
  const intern = new Intern(testValue, idValue);
  expect(intern.id).toBe(idValue);
});

it("able to set an interns email through the contructor", () => {
  const testValue = "Intern Name";
  const idValue = 1234;
  const emailValue = "email@email.com";
  const intern = new Intern(testValue, idValue, emailValue);
  expect(intern.email).toBe(emailValue);
});
it("able to set an interns school through the contructor", () => {
  const testValue = "Intern Name";
  const idValue = 1234;
  const emailValue = "email@email.com";
  const school = "A&M";
  const intern = new Intern(testValue, idValue, emailValue, school);
  expect(intern.school).toBe(school);
});
