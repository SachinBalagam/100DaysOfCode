// DAY 2

//11. Calculate the average of the numbers in an array of numbers

let arrays = [1, 3, 9, 15, 90];

function averageOfArray(array) {
  let arrayLength = array.length
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum / arrayLength;
}

let result = averageOfArray(arrays)
// console.log(result)

//12.Create a function that receives an array of numbers and returns an array containing only the positive numbers

let arrays2 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function filterArray(array) {
  let filteredArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      filteredArray.push(array[i])
    }
  }
  console.log(filteredArray)
}


