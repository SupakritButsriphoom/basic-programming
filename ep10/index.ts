// const cars = ["saab", "volvo", "bmw"];
// cars.length;
// cars[2];
// cars[0] = "benz";

// // //for loop
// // for(let i =0; i <=10; i++){
// //     console.log(i)
// // }

// // let i=0
// // while(i<10){
// //     console.log(i)
// // }

// //for loop
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// //while loop
// let i = 0;
// while (i < cars.length) {
//   console.log(cars[i]);
//   i++;
// }
// cars.pop(); //['saab','volvo']
// cars.push("benz"); //['saab','volvo','benz']
// cars.shift(); //['volvo','benz']
// cars.unshift("bmw"); //['bmw','volvo','benz']

// const person = {
//   fName: "xxxx",
//   lName: "xxxx",
//   age: 12,
//   tel: "xxxxxxx",
//   sister: {
//     fName: "xxxx",
//     lName: "xxxx",
//     age: 12,
//   },
// };
// person.age = 13;

// const friends = [
//   {
//     fName: "xxxx",
//     lName: "xxxx",
//     age: 12,
//     tel: "xxxxxxx",
//     sister: {
//       fName: "xxxx",
//       lName: "xxxx",
//       age: 12,
//     },
//   },
// ];
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i].fName);
// }
// let i = 0;
// while (i < friends.length) {
//   console.log(friends[i].fName);
//   i++;
// }
// .map()//map คำ map key ใหม่
// .filter()//กรอง (function(element,index){)}

const number = [1, 2, 3, 4];

function convertToArrayString(arr: number[]) {
  return arr.map(function (element, index) {
    return element.toString();
  });
}
//Easy

const items = [
  { product: "pen", price: 15 },
  { product: "notebook", price: 50 },
  { product: "eraser", price: 5 },
];
const expensiveItems = items.filter(function (element, index) {
  return element.price > 10;
});
const fruits = ["apple", "banana", "cherry", "date"];
const longFruit = fruits.filter(function (element, index) {
  return element.length > 5;
});
console.log(longFruit);
