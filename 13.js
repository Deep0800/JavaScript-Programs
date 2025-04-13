const code = {
  type: "web",
};

const reactJS = {
  name: "js",
  web: true,
};

console.log(reactJS[code.type]) //true
console.log(reactJS[reactJS['type']]) //false