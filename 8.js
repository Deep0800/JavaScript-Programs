(function () {
  var a = (b = 3);
})();

console.log(`a defined? ${typeof a !== "undefined"}`); // a defined? false
console.log(`b defined? ${typeof b !== "undefined"}`); // b defined? true
