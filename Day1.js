// DAY 1 //

//1. Print numbers from 1 to 10

function printNumbersFromOneToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i)
  }
}

//2. Print the odd numbers less than 100
function printOddNumbersFromOneToHundred() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
      console.log(i)
    }
  }
}


//3. Print the multiplication table with 7

function MultiplicationTableOfSeven() {
  for (let i = 1; i <= 10; i++) {
    console.log("7", "*", i, "=", 7 * i)
  }
}

//4. Print all the multiplication tables with numbers from 1 to 10

function MultiplicationTablesFromoneToTen() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(i, "*", j, "=", i * j)
    }
  }
}


//5. Calculate the sum of numbers from 1 to 10

function SumOfNumbersFromoneToTen() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + i
  }
  console.log(sum)
}

//6. Calculate 10!

function TenFactorial() {
  let product = 1
  for (let i = 1; i <= 10; i++) {
    product *= i
  }
  console.log(product)
}

//7. Calculate the sum of odd numbers greater than 10 and less than 30

function SumOfOddNumbersFromTenToThirty() {
  let sum = 0;
  for (let i = 11; i <= 30; i++) {
    if (i % 2 != 0) {
      sum += i
    }
  }
  console.log(sum)
}


//8. Create a function that will convert from Celsius to Fahrenheit

function CelsisusToFahrenheit(value) {
  const Fahrenheit = (value * 1.8) + 32
  console.log(Fahrenheit)
}


//9. Create a function that will convert from Fahrenheit to Celsius 

function FahrenheitToCelsius(value) {
  const celsius = (value - 32) * 5 / 9
  console.log(celsius)
}

// 10. Calculate the sum of numbers in an array of numbers 

let arrays = [2, 3, -1, 5, 7, 9, 10, 15, 95];

function SumOfArray(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i]
  }
  console.log(sum)
}

SumOfArray(arrays)

