'use strict';

// const getAllPropValues = function(arr, prop) {
//     return arr.map(el => el[prop]);
// };

// const getAllPropValues = function(arr, prop) {
//     const newArr = [];
//     for (const item of arr) {
//         let value = item[prop];

//         if (value !== undefined) {
//             newArr.push(value);
//         }
//     }
//     return newArr;
// }

const getAllPropValues = function (arr, prop) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const entries = Object.entries(arr[i]);

        for (const item of entries) {
            if (item.includes(prop)) {
                newArr.push(item[1]);
            }
        }
    }
    return newArr;
}


const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2
    },
];


console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []