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


//13. Find the maximum number in an array of numbers

let array3 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function findMaxNumber(array3) {
  let max_number = array3[0]
  for (let i = 1; i < array3.length; i++) {
    if (array3[i] > max_number) {
      max_number = array3[i]
    }
  }
  return max_number
}

//14. Calculate the sum of digits of a positive integer number

let number = 1235231

function sumOfDigits(number) {
  let sum = 0
  let num_string = number.toString()
  for (let i = 0; i < num_string.length; i++) {
    sum += (parseInt(num_string[i]))
  }
  return sum
}

// console.log(sumOfDigits(number))

//15. Print the first 100 prime numbers

function firstHundredPrimeNumbers() {
  for (let i = 1; i <= 100; i++) {
    let count = 0
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        count = 1
        break;
      }
    }
    if (count == 0 && i != 1) {
      console.log(i)
    }
  }
}

// firstHundredPrimeNumbers()

//16. Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function getPrimes(a, b) {
  let primeArray = []
  for (let i = a; i <= b; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        count = 1
        break;
      }
    }
    if (count === 0 & i != 1) {
      primeArray.push(i)
    }
  }
  return primeArray

}

// console.log(getPrimes(10,100))

// 17. Rotate an array to the left 1 position

let array5 = [1, 2, 3];

function rotateArray(array) {
  let first_digit = array.shift()
  array.push(first_digit)
  return array
}

// console.log(rotateArray(array5))

//18. Rotate an array to the right 1 position

let array6 = [1, 2, 3]

function rotateRightArray(array) {
  let last_array = array.pop()
  array.unshift(last_array)
  return array
}

// console.log(rotateRightArray(array6))

//19. Reverse an array

let array7 = [1, 2, 3, 4, 5]
function reverseArray(array) {
  let reverse_array = []
  for (let i = array.length - 1; i >= 0; i--) {
    reverse_array.push(array[i])
  }
  return reverse_array
}

// console.log(reverseArray(array7))

//20. Reverse a string

let str1 = "JavaScript"

function reverseString(str1) {
  let reverse_string = ""
  for (let i = str1.length - 1; i >= 0; i++) {
    let char = str1[i]
    reverse_string += char
  }
  return reverse_string
}

console.log(reverseString(str1))