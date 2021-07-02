const { readFile } = require('fs/promises');
const fileName = './assets/unsorted-names-list.txt'
var fs = require('fs')

async function go() {
  try {
    const data = await readFile(fileName, { encoding: 'utf-8' });
    let raw = data.split(/\r?\n/)
    formatNames(raw)
  } catch (err) {
    console.error(err);
  }
}

function formatNames(raw) {
  let sortedBySurname = raw.sort(sortByLastName)
  printNames(sortedBySurname)
}

//If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, nothing changes.

// lastname > first name > second name > third names
function sortByLastName(a, b) {
  let splitNameA = a.split(" ")
  let splitNameB = b.split(" ")
  let lastNameA = splitNameA.pop()
  let lastNameB = splitNameB.pop()

  if (lastNameA < lastNameB) {
    return -1
  } else if (lastNameA > lastNameB) {
    return 1
  } else {
    return 0
  }
}

// Save each name onto a line in the text file
function printNames(namesArray) {
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

go()
