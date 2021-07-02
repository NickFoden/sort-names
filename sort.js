const { readFile } = require('fs/promises');
const fileName = './assets/unsorted-names-list.txt'
var fs = require('fs')

// Read in file of unsorted names
exports.readFile = async () => {
  console.log("hello")
  try {
    const data = await readFile(fileName, { encoding: 'utf-8' });
    let raw = data.split(/\r?\n/)
    this.formatNames(raw)
  } catch (err) {
    console.error(err);
  }
}


exports.formatNames = (raw) => {
  let sortedBySurname = raw.sort(this.sortByLastName)
  this.displayNames(sortedBySurname)
  this.printNames(sortedBySurname)
}

//If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, nothing changes.
// lastname > first name > second name > third names
exports.sortByLastName = (a, b) => {
  try {
    let splitNameA = a.trim().split(" ")
    let splitNameB = b.trim().split(" ")
    let lastNameA = splitNameA.pop()
    let lastNameB = splitNameB.pop()

    // Error-handling: if the letter is not alphabetical or empty space, then quit
    if (lastNameA === ""
      || lastNameB === ""
      || lastNameA.match(/[a-zA-Z]/i)
      || lastNameB.match(/[a-zA-Z]/i))  return;

    if (lastNameA < lastNameB) {
      return -1
    } else if (lastNameA > lastNameB) {
      return 1
    } else {
      return 0
    }
  } catch (err) {
    console.error("Invalid input to sort by last name.")
    return; // quit entirely
  }
}

function sortByFirstName(array) { }
function sortBySecondName(array) { }
function sortbyThirdName(array) { }

// Save each name onto a line in the text file
exports.printNames = (namesArray) => {
  let file = fs.createWriteStream('sorted-names-list.txt');
  try {
    namesArray.forEach(name => {
      file.write(name + '\n')
    })
    file.end
  } catch (err) {
    console.error(err)
  }
}

// display names on terminal
exports.displayNames = (namesArray) => {
  namesArray.forEach(name => {
    console.log(name)
  })
}