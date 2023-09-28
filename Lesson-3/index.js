// Task 

// function createCounter() {
//     let counter = 0
//     function setStep(step) {
        
//     }
//     function resetCounter () {
//         counter = 0
//     }
//     function increment () {
//         counter++
//     }
//     function decrement () {
//         counter--
//     }
//     function getCounter () {
//         console.log(counter);

//         return counter
//     }

//     return {
//         resetCounter: resetCounter,
//         increment: increment,
//         decrement: decrement,
//         getCounter: getCounter,
//     }
// }

// const counter = createCounter()
// counter.increment()
// counter.getCounter()
// counter.decrement()
// counter.getCounter()
// counter.increment()
// counter.getCounter()
// counter.increment()
// counter.getCounter()

// const counter1 = createCounter()
// counter1.getCounter()

// counter.increment()
// counter.getCounter()

// counter1.increment()
// counter1.getCounter()

// Task 1

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function arrayClone(arr) {
//     const newArray = []

//  for (let i = 0; i < arr.length; i++) {
//     newArray[i] = arr[i]
//  }

//  return newArray
// }	

// const arr1 = arrayClone(vegetables);

// console.log(arr1); 

// Task 2

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let str = ''

// for (let i = 0; i < vegetables.length; i++) {
//     str = str + vegetables[i]
//     if (i !== vegetables.length -1) {
//         str += ', '
//     }
// }

// console.log(str);

// Task 3

// const num = prompt('Введите число', 558519067153);

// function colonOdd (num) {
//     const strNumber = String(num)
//     let result = ''
//     for (let i = 0; i < strNumber.length; i++) {
//         result += strNumber[i]
//         if (strNumber[i] % 2 !== 0 && strNumber[i + 1] % 2 !== 0 && i !== strNumber.length -1) {
//             result += ':'
//         }
//     }
//     return result
// }

// console.log(colonOdd(558519067153));

// Task 4

// const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');

// function changeRegister (str) {
//     let newStr = ''
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === str[i]) {
//             newStr += str[i].toUpperCase()
//         } else {
//             newStr += str[i].toLowerCase()
//         }
//     }
//     return newStr
// }

// console.log(changeRegister(str)); 

// Task 5

// const arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];

// function removeDuplicates(arr) {
//     const newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         if (newArray.indexOf(arr[i]) === -1) {
//             newArray[newArray.length] = arr[i]
//         }
//     }

//     return newArray

// }

// console.log(removeDuplicates(arr));  

// Task 6

// function notBad(str) {
//     const notIndex = str.indexOf('not')
//     const badIndex = str.indexOf('bad')

//     if (badIndex !== -1 && notIndex !== -1 && badIndex > notIndex) {
//         return str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3)
//     } else {
//         return str
//     }
// }

// console.log(notBad('This dinner is not that bad!'));
// console.log(notBad('This movie is not so bad!'));
// console.log(notBad('This movie is bad so not!'));
// console.log(notBad('This dinner is bad!'));