// ASSESSMENT 3: Coding Practical Questions with Jest

const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

//a) Create a test with expect statements for each of the variables provided.
// describe("fibonacci", () => {
//   it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
//     const fibLength1 = 6
//     const fibLength2 = 10
//    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })
// b) Create the function that makes the test pass.

// Pseudo code:
// create a function named fibonacci with a parameter named arrLength which will accept a number as an argument
// set a variable inside the array called newArray with the value newArray =[1, 1]
// in the function block create a while loop that will execute will the newArray variable length is less than the passed in argument
// in the executable block create a variable named length that will hold the length of the newArray
// create a variable named nextNumber that will add the last two values in the array
// push in the variable nextNumber to the array newArray
// outside of the while loop block return the new array
// Output an array with the fibonacci sequence with the lenght determine by the number pass in as an arument
const fibonacci = (arrLength) => {
  let newArray = [1, 1]
  while (newArray.length < arrLength) {
    const length = newArray.length
    const nextNumber = newArray[length - 1] + newArray[length - 2]
    newArray.push(nextNumber)
  }
  return newArray
}
// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
// describe("sortValues", () => {
//   it("takes in an object and returns an array of the values sorted from least to greatest.", () => {
//     const studyMinutesWeek1 = {
//       sunday: 90,
//       monday: 30,
//       tuesday: 20,
//       wednesday: 15,
//       thursday: 30,
//       friday: 15,
//       saturday: 60
//     }
//     const studyMinutesWeek2 = {
//       sunday: 100,
//       monday: 10,
//       tuesday: 45,
//       wednesday: 60,
//       thursday: 20,
//       friday: 15,
//       saturday: 65
//     }

//    expect(sortedValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//    expect(sortedValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })

// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
function sortValues(obj) {
  let values = Object.values(obj);  // Get all the values from the object
  let sortedValues = values.sort(function(a, b) {
    return a - b;
  });  // Sort the values in ascending order
  return sortedValues;
}

// Pseudo code:
// create a function named sortValues() that takes in an object as an argument 
// Get all the values from the object using the object.values() method and store it in a variable named values
// Sort the values in ascending order in variable named (values) using the .sort method
// return sortedValues

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
// describe("accumulatingSum", () => {
//   it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
//     const accountTransactions1 = [100, -17, -23, -9]
//     const accountTransactions2 = [250, -89, 100, -96]
//     const accountTransactions3 = []
//    expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51])
//    expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165])
//    expect(accumulatingSum(accountTransactions3)).toEqual([])
//   })
// })

// b) Create the function that makes the test pass.
const accumulatingSum = (array) =>{
  let result = [];
  let  sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    result.push(sum);
  }

  return result;
}

// Pseudo code:
// create a function named accumulatingSum() that takes in an array as an argument
// create a variable named result that will hold an empty array with the final result
// create a variable named sum that will the sum the of the numbers
// create a for loop that will itirate throught the whole array passed in as an argument
// let the variable sum += the current index
// push the sum varible to the result array
// return the result array


