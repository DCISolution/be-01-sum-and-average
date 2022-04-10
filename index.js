// Read in the arguments from the command line, ignoring
// 0: the absolute path to the node application
// 1: the absolute path to this file
const args = process.argv.slice(2)
const [ operation, ...strings ] = args

// Or, in a single line
// const [,, operation, ...strings ] = process.argv

// Check if any of the strings cannot be converted to a number
const invalid = strings.find(string => {
  return isNaN(string)
}) 

// Exit the process if any input is an invalid number
if (invalid) {
  // invalid will be a truthy string
  console.log(`Sorry, the argument "${invalid}" is not a number, please try again`)
  process.exit(9)
  // See https://nodejs.org/api/process.html#process_exit_codes
}

// Convert the (guaranteed) valid strings to numbers
const numbers = strings.map(string => parseFloat(string))

let result

// Choose which operation to call, or show an error message
switch (operation) {
  case "sum":
    result = sum(numbers)
    break
  case "avg":
    result = average(numbers)
    break
  case "med":
    result = median(numbers)
    break
  default:
    result = "I cannot calculate that, please type either \"sum\" (to calculate the sum) or \"avg\" (To calculate the Average)"
}

// Print the result to the console
console.log(result);


// ARITHMETIC FUNCTIONS // ARITHMETIC FUNCTIONS //
// These can be placed after the calls to them, because function
// declarations are "hoisted".
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

function sum(numbers) {
  return numbers.reduce(( acc, number ) => acc + number)
}


function average(numbers) {
  return sum(numbers) / numbers.length
}


// BONUS
function median(numbers) {
  const length = numbers.length
  const isOdd = length % 2
  const mid = (length - isOdd) / 2

  if (isOdd) {
    // return the central number
    result = numbers[mid]
  } else {
    // return the average of the two central numbers
    result = (numbers[mid - 1] + numbers[mid]) / 2
  }

  return result
}
