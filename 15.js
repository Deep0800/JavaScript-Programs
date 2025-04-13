class Lizard {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "orange" } = {}) {
    this.newColor = newColor;
  }
}

const tommy = new Lizard({ newColor: "orange" });
// console.log(tommy.colorChange('blue'))
console.log(Lizard.colorChange('blue')) //blue
