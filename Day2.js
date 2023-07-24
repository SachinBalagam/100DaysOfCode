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
console.log(result)