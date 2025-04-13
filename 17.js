function Human(fname, lName) {
  this.firstName = fname;
  this.lastName = lName;
}

const mrX = new Human("Mr", "X");
const Rock = Human("The", "Rock");

console.log(mrX); // human { firstName: 'Mr', lastName: 'X' }
console.log(Rock); // undefined