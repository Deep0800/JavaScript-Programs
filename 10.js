function showData() {
  console.log("Variable name is:", name); //undefined
  console.log("Variable name is:", age); // Cannot access 'age' before initialization

  var name = "Deep Gandhi";
  let age = 24;
}
showData();
