var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should;
var sortName = require('../sort.js')
var fs = require('fs')

var readFile = require('../sort.js').readFile
var readFileResult = require('../sort.js').readFile
var formatNamesResult = require('../sort.js').formatNames
var sortByLastNameResult = require('../sort.js').sortByLastName
var printNamesResult = require('../sort.js').printNames

const fileName = './assets/unsorted-names-list.txt'

describe('sortNames', function () {
  describe('readFile()', () => {



    it('should have a txtfile with .txt file extension', () => {
      expect(fs.existsSync(fileName)).to.be.true
    })
    it('should contain a string', () => {
      expect(fs.readFileSync(fileName)).to.not.be.null
    })
    // it('should have list of names separated by line break', () => {
    //   expect(fs.readFileSync(fileName)).to.contain.a('string')
    // })

    it("should print the names and display the names if there is only one name in the file", () => {
      // Given text file is read in
      // When there is only one name
      // Then name should be printed and displayed
    })

    it("should quit program if there are no names", () => {
      // Given text file is read in
      // When there is nothing in the file
      // Then the program should quit
    })

    it("should quit program if there are numbers in the file", () => {
      // Given text file is read in
      // When there are numbers and objects in the file
      // Then the program should quit
    })
  })

  // unit tests for formatNames function
  describe('formatNames()', () => {
    it('should receive an array', () => {
      // input should be an array
      // // should I test for this ?
    })
    it('should call displayNames & printName if an array is provided', () => {
      // Given it receives an array
      // When array has length more than 1 (which is always)
      // Then two string names should be the output
      const testResult = require('../sort.js').formatNames(["John Smith", "Mary Smith"])
      
    })
  })

  describe('sortByLastName()', () => {
    it('should skip current name if it has a non-alphabetical first character', () => {
      // Given it receives name a name of "John 4Smith" and name of "Mary Chan"
      // "John 4Smith" should not be included in the final list
      // "Mary Chan" will compare with the next name
    })

    it('should return 1 when fullNameA is "John Smith" and fullNameB is "Mary Chan"', () => {
      // Given fullNameA is "John Smith" and fullNameB is "Mary Chan"
      // Then 1 should be returned
      const testResult = require('../sort.js').sortByLastName("John Smith", "Mary Chan")
      expect(testResult).to.equal(1)
    })

    it('should return -1 when fullNameA is "Mary Chan" and fullNameB is "John Smith"', () => {
      // Given fullNameA is "Mary Chan" and fullNameB is "John Smith"
      // Then -1 should be returned
      const testResult = require('../sort.js').sortByLastName("Mary Chan", "John Smith")
      expect(testResult).to.equal(-1)
    })

    it('should return 0 when lastNameA is the same letter as lastNameB and no change to position ', () => {
      // Given fullNameA is "John Smith" and fullNameB is "Tom Smith"
      // Then 0 should be returned
      const testResult = require('../sort.js').sortByLastName("John Smith", "Tom Smith")
      expect(testResult).to.equal(0)
    })
  })

  describe('printNames()', () => {
    it('should receive an array', () => {
      // input is expected to be an array
      // then sorted-names-list.txt should be created
    })
    it('should quit if it receives a string', () => {
      // given a single string as input
      // nothing shoudl be done and program quits
     })
  })

  describe('displayNames()', () => {
    it('should receive an array', () => {
      // Given input is expected to be an array
      // Then array should be looped and displayed on screen
    })
    it('should display nothing if it receives a string', () => {
      // Given input is a string
      // Then nothing is displayed on screen and program quits
    })
  })
})