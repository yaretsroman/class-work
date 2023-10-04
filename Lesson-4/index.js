// // Task 1

// let c = 0;

// [-3,8,7,6,5,-4,3,2,1, 10].sort(function compare(a, b) {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     return 0;
// });

// [-3,8,7,6,5,-4,3,2,1, 10].sort(function compare(a, b) {
//     return a < b ? -1 : a < b ? 1 : 0;
// });

// [-3,8,7,6,5,-4,3,2,1, 10].sort(function compare(a, b) {
//     return a < b ? -1 : a < b ? 1 : 0;
// });

// [-3,8,7,6,5,-4,3,2,1, 10].sort((a,b) => a - b)

// console.log(c);

// // Task 2

// let sum = 0;
// let multiply = 1;
// [1, 2, 3, 4, 5, 6].forEach((number) => {
//     sum += number
//     multiply *= number
// })
// console.log(`Сумма - ${sum}, Произведение - ${multiply}`);

// /////////

// const result = [1, 2, 3, 4, 5, 6].reduce((acc, number) => {
//     return {
//         sum: acc.sum + number,
//         multiply: acc.multiply * number
//     }
// }, {
//     sum: 0,
//     multiply: 1
// })

// console.log(result);

// // Task 3

// function arrSum(arr1, arr2) {
//     let length = arr1.length > arr2.length ? arr1.length : arr2.length
//     let newArray = []
//     for (let i = 0; i < length; i++){
//         let first = arr1[i]
//         let second = arr2[i]

//         if (!first) {
//             first = 0
//         }

//         if (!second) {
//             second = 0
//         }
//         newArray.push(first + second)
//     }
//     return newArray
// }

// console.log(arrSum([1,0,2,3,4], [3,5,6,7,8,13]));

// /////////

// function arrSum(arr1, arr2) {
//     let length = arr1.length > arr2.length ? arr1.length : arr2.length
//     let newArray = []
//     for (let i = 0; i < length; i++){
//         let first = arr1[i] || 0
//         let second = arr2[i] || 0
  
//         newArray.push(first + second)
//     }
//     return newArray
// }

// console.log(arrSum([1,0,2,3,4], [3,5,6,7,8,13]));

// /////////

// function arrSum(arr1, arr2) {
//     let length = arr1.length > arr2.length ? arr1.length : arr2.length
//     let newArray = []
//     for (let i = 0; i < length; i++){
//         newArray.push((arr1[i] || 0) + (arr2[i] || 0))

//     }
//     return newArray
// }

// console.log(arrSum([1,0,2,3,4], [3,5,6,7,8,13]));

// // Task 4

// function removeArrayElement(arr, el) {
//     return arr.filter(item => item !== el)
// }

// console.log(removeArrayElement([2, 5, 9, 6], 5));

// // Task 4.1

// function removeArrayElement(arr, ...elements) {
//     return arr.filter(item => !elements.includes(item))
// }

// console.log(removeArrayElement([2, 5, 9, 6, 5, 8, 9, 10], 5, 9));

