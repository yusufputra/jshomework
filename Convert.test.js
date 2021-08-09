const Convert = require("./Convert");

test("test cel to rea", () => {
  const transform = new Convert();
  expect(transform.fromCelcius('rea',123)).toBe(98.4);
});