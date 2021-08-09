class Convert {
  constructor() {
    console.log("i'm the new object");
  }
  fromCelcius(to, num1) {
    if (to == "cel") {
      return num1;
    }
    if (to == "rea") {
      return (4 / 5) * num1;
    }
    if (to == "far") {
      return (9 / 5) * num1 + 32;
    }
  }
  fromReamur(to, num1) {
    if (to == "rea") {
      return num1;
    }
    if (to == "cel") {
      return (5 / 4) * num1;
    }
    if (to == "far") {
      return (9 / 4) * num1 + 32;
    }
  }
  fromFarenheit(to, num1) {
    if (to == "far") {
      return num1;
    }
    if (to == "cel") {
      return (5 / 9) * (num1 - 32);
    }
    if (to == "rea") {
      return (4 / 9) * (num1 - 32);
    }
  }
}

module.exports = Convert;
