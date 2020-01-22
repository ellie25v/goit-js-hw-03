'use strict';
// My thoughts
// const getAllPropValues = function(arr, prop) {
//     for (let i = 0; i < arr.length; i += 1){

//         const { name, price, quantity} = arr[i];
//         console.log(`${prop}`);
//         // arrProp = arr[i][`${prop}`];
//     }
// };
//### Second way
// const getAllPropValues = function(arr, prop) {
//     const values = [];
//     for (const item of arr) {
//         let value = item[prop];

//         if (value != undefined) {
//             values.push(value);
//         }
//     }
//     return values;
// }




const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];


const getAllPropValues = function(arr, prop) {
    return arr.map(el => el[prop]);
};


console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []