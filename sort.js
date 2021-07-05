var fs = require("fs");
const path = require('path');
const { readFile } = require("fs/promises");
const fileName = "./assets/unsorted-names-list.txt";

/**
 * Read in a text file
 * @function
 */
const processFile = async (f = fileName) => {
  try {
    // Check to be sure .txt file
    const {ext} = path.parse(f)
    
    if(ext !== ".txt"){
      throw new Error("Not a .txt file");
    }

    const data = await readFile(f, { encoding: "utf-8" });

    const result = data
      .split("\n")
      .map((I) => I.trim())
      .filter((I) => I);

    if (!result || result.length === 0) {
      throw new Error("Get file contents failed");
    }
    if (result.length === 1) {
      return result[0];
    }
    return displayNames(result);
  } catch (err) {
    return "";
  }
};

/**
 * Controller function to forward an array of names to be sorted, outputted and displayed
 * @function {array} raw
 */
const formatNames = (namesArray) => {
  return displayNames(namesArray.sort((A, B) => sortByLastName(A, B)));
};

/**
 * Controller function to forward an array of names to be sorted, outputted and displayed
 * @function
 * @param {string} fullNameA
 * @param {string} fullNameB
 */
const sortByLastName = (fullNameA, fullNameB) => {
  try {
    let nameA_array = fullNameA.trim().split(" ");
    let nameB_array = fullNameB.trim().split(" ");
    let lastNameA = nameA_array.pop().trim();
    let lastNameB = nameB_array.pop().trim();

    // Error-handling: if the first letter of surname is not alphabetical or empty space, then quit
    if (
      lastNameA === "" ||
      lastNameB === "" ||
      /[a-zA-Z]/.test(lastNameA.charAt(0)) !== true ||
      /[a-zA-Z]/.test(lastNameB.charAt(0)) !== true
    )
      return;

    // If the result is negative, a is sorted before b.
    // If the result is positive, b is sorted before a.
    // If the result is 0, nothing changes.
    // lastname > first name > second name > third names

    if (lastNameA < lastNameB) {
      return -1;
    } else if (lastNameA > lastNameB) {
      return 1;
    }
    // sortByFirstGivenName(fullNameA, fullNameB)
    return 0;
  } catch (err) {
    console.error("Invalid input to sort by last name.");
    return; // quit entirely
  }
};

// function sortByFirstName(fullNameA, fullNameB) {}
// function sortBySecondName(fullNameA, fullNameB) {}
// function sortbyThirdName(fullNameA, fullNameB) {}

/**
 * Save each name onto a line in the text file
 * @function
 * @param {array} namesArray
 */
const printNames = (namesArray) => {
  let file = fs.createWriteStream("sorted-names-list.txt");
  try {
    namesArray.forEach((name) => {
      file.write(name + "\n");
    });
    file.end;
  } catch (err) {
    console.error(err);
  }
};

/**
 *  return list of names
 * @function
 * @param {array} namesArray
 */
const displayNames = (namesArray) => namesArray.join();

module.exports = {
  displayNames,
  formatNames,
  printNames,
  processFile,
  sortByLastName,
};
