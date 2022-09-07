let array = [12, 2, 3, 4, 35, 5, 46];
// // console.log(array.concat(32));
// // console.log(array.join(' '));
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
//  }
// array.forEach((el, name, arr) => {
//   console.log(name);
// });
let b = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] > 3) {
    b.push(array[i]);
  }
}
console.log(b);
