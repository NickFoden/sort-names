const { readFile } = require('fs/promises');
const fileName = './assets/unsorted-names-list.txt'
var fs = require('fs')


const anotherSort = (function () {
  return {
    readFile: async function () {

      console.log("hello world!")
      try {
          const data = await readFile(fileName, { encoding: 'utf-8' });
          let nameArray = data
            .split(/\r?\n/)
            .filter(item => typeof item === "string" && item !== "")

          if (nameArray.length === 0) {
            return;
          } else if (nameArray.length === 1) {
            this.displayNames(nameArray)
            this.printNames(nameArray)
          } else {
            this.formatNames(nameArray)
          }
      } catch (err) {
        console.error(err);
      }
     },
    formatNames: function (namesArray) {
      if (namesArray.length) {
        let sortedBySurname = namesArray.sort(this.sortByLastName)
        this.displayNames(sortedBySurname)
        this.printNames(sortedBySurname)
      }
    },
    sortByLastName: function (fullNameA, fullNameB) {
          try {
        let nameA_array = fullNameA.trim().split(" ")
        let nameB_array = fullNameB.trim().split(" ")
        let lastNameA = nameA_array.pop().trim()
        let lastNameB = nameB_array.pop().trim()

        // Error-handling: if the first letter of surname is not alphabetical or empty space, then quit
        if (lastNameA === ""
          || lastNameB === ""
          || (/[a-zA-Z]/).test(lastNameA[0]) !== true
          || (/[a-zA-Z]/).test(lastNameB[0]) !== true ) return;
        if (lastNameA < lastNameB) {
          return -1
        } else if (lastNameA > lastNameB) {
          return 1
        } else {
          // sortByFirstGivenName()
          return 0
        }
      } catch (err) {
        console.error("Invalid input to sort by last name.")
        return; // quit entirely
      }
     },
    printNames: function (namesArray) {
      let file = fs.createWriteStream('sorted-names-list.txt');
      try {
        namesArray.forEach(name => {
          file.write(name + '\n')
        })
        file.end
      } catch (err) {
        console.error(err)
      }
    },
    displayNames: function (namesArray) {
      namesArray.forEach(name => {
        console.log(name)
      })
    }
  }
})
anotherSort.readFile()

// exports.readFile = async () => {
//   try {
//     const data = await readFile(fileName, { encoding: 'utf-8' });
//     let nameArray = data
//       .split(/\r?\n/)
//       .filter(item => typeof item === "string" && item !== "")

//     if (nameArray.length === 0) {
//       return;
//     } else if (nameArray.length === 1) {
//       this.displayNames(nameArray)
//       this.printNames(nameArray)
//     } else {
//       this.formatNames(nameArray)
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }

// /**
//  * Controller function to forward an array of names to be sorted, outputted and displayed
//  * @function {array} raw
//  */
// exports.formatNames = (namesArray) => {
//   if (namesArray.length) {
//       let sortedBySurname = namesArray.sort(this.sortByLastName)
//       this.displayNames(sortedBySurname)
//       this.printNames(sortedBySurname)
//     }
// }

// /**
//  * Controller function to forward an array of names to be sorted, outputted and displayed
//  * @function
//  * @param {string} fullNameA
//  * @param {string} fullNameB
//  */
// exports.sortByLastName = (fullNameA, fullNameB) => {
//   try {
//     let nameA_array = fullNameA.trim().split(" ")
//     let nameB_array = fullNameB.trim().split(" ")
//     let lastNameA = nameA_array.pop().trim()
//     let lastNameB = nameB_array.pop().trim()

//     // Error-handling: if the first letter of surname is not alphabetical or empty space, then quit
//     if (lastNameA === ""
//       || lastNameB === ""
//       || (/[a-zA-Z]/).test(lastNameA[0]) !== true
//       || (/[a-zA-Z]/).test(lastNameB[0]) !== true ) return;

//     // If the result is negative, a is sorted before b.
//     // If the result is positive, b is sorted before a.
//     // If the result is 0, nothing changes.
//     // lastname > first name > second name > third names

//     if (lastNameA < lastNameB) {
//       return -1
//     } else if (lastNameA > lastNameB) {
//       return 1
//     } else {
//       // sortByFirstGivenName()
//       return 0
//     }
//   } catch (err) {
//     console.error("Invalid input to sort by last name.")
//     return; // quit entirely
//   }
// }

// function sortByFirstName(array) { }
// function sortBySecondName(array) { }
// function sortbyThirdName(array) { }

// /**
//  * Save each name onto a line in the text file
//  * @function
//  * @param {array} namesArray
//  */
// exports.printNames = (namesArray) => {
//   console.log('namesArray:', namesArray)
//   let file = fs.createWriteStream('sorted-names-list.txt');
//   try {
//     namesArray.forEach(name => {
//       file.write(name + '\n')
//     })
//     file.end
//   } catch (err) {
//     console.error(err)
//   }
// }

// /**
//  *  display names on terminal
//  * @function
//  * @param {array} namesArray
//  */
// exports.displayNames = (namesArray) => {
//   // namesArray.forEach(name => {
//   //   console.log(name)
//   // })
// }