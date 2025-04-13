function getSummary(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const fName = "Deep";
const age = 24;

getSummary `${fName} age is ${age}`
// [ '', ' age is ', '' ]
// Deep
// 24