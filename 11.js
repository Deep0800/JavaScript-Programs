const income = {
  skills: 108,
  monthly() {
    return this.skills * 108;
  },
  yearly: () => 888 * this.skills,
};

console.log(income.monthly()); //11664
console.log(income.yearly()); //NaN
