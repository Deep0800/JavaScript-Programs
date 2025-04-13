const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); // [ 1, 2, 3, 4 ]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]

const arr3 = [1, [2, [3, [4]]]];
console.log(arr3.flat(Infinity)); // [ 1, 2, 3, 4 ]

const arr4 = [1, 2, 3];
const res1 = arr4.map((x) => [x * 2]).flat();
console.log(res1); // [ 2, 4, 6 ]

// Even shorter with .flatMap():
const arr5 = [1, 2, 3];
const res2 = arr4.flatMap((x) => [x * 2]);
console.log(res2); // [ 2, 4, 6 ]
