var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should;
var sortName = require('../sort.js')
var fs = require('fs')
var sinon = require('sinon');
var readFile = require('../sort.js').readFile
var formatNames = require('../sort.js').formatNames
var sortByLastName = require('../sort.js').sortByLastName
var printNames = require('../sort.js').printNames
var displayNames = require('../sort.js').displayNames

const incomingFile = './assets/unsorted-names-list.txt'
const emptyFile = './assets/empty.txt'

describe('sortNames', function () {
  describe('readFile()', () => {

    it('should have a txtfile with .txt file extension', () => {
      expect(fs.existsSync(incomingFile)).to.be.true
    })

    it('should contain a string', () => {
      expect(fs.readFileSync(incomingFile)).to.not.be.null
    })
    // it('should have list of names separated by line break', () => {
    //   expect(fs.readFileSync(fileName)).to.contain.a('string')
    // })

    context("should stop program if there is nothing in the textfile", () => {
      // Given an empty file is
      // When it is read in
      // It does not call the next function formatNamesand there is no output
      before(function(done){
         fs.readFile(emptyFile, 'utf8', function(err, fileContents) {
            if (err) throw err;
            testvalue = JSON.parse(fileContents);
            done();
         });

        it("should quit program if file is empty", () => {
          let spy = sinon.spy(formatNames)
          expect(spy.calledOnce).to.be.false

          expect(fs.existsSync('sorted-names-list.txt')).to.be.false
        })
    });
    })
  })

  // unit tests for formatNames function
  describe('formatNames()', () => {
    it('should call displayNames & printName if an array is provided', () => {
      // Given it receives an array
      // When array has length more than 1 (which is always)
      // Then displayNames and printNames should be called
      const testResult = formatNames(["John Smith", "Mary Smith"])
      let spy = sinon.spy(displayNames)
      let spy2 = sinon.spy(printNames)
      expect(spy.calledOnce).to.be.true
      expect(spy2.calledOnce).to.be.true
    })

    it("should print and display name if there is only one name passed", () => {
      // Given text file is read in
      // When there is only one name
      // Then name should be printed and displayed
      const testResult = formatNames(["John Smith"])
      expect(fs.existsSync('/sorted-names-list.txt')).to.be.true
      expect(fs.readFileSync('/sorted-names-list.txt')).to.equal('John Smith')
    })

    it("it should not print and display name if there is only no name passed", () => {
      // Given text file is read in
      // When there is only one name
      // Then name should be printed and displayed
      const testResult = formatNames([])
      expect(fs.existsSync('/sorted-names-list.txt')).to.be.false
    })
  })

  describe('sortByLastName()', () => {

    // this test should never be needed because the data is sanitised much earlier
    it('should skip current name if it has a non-alphabetical first character', () => {
      // Given it receives name a name of "John 4Smith" and name of "Mary Chan"
      // "John 4Smith" should not be included in the final list
      // then nothing will be returned, program quits
      const testResult = sortByLastName("7om Smith", "Mary Chan")
      expect(testResult).to.be.null;
    })

    it('should return 1 when the first name is alphabetically lower than the second name in this specific order', () => {
      // Given fullNameA is "John Smith" and fullNameB is "Mary Chan"
      // Then 1 should be returned
      const testResult = require('../sort.js').sortByLastName("John Smith", "Mary Chan")
      expect(testResult).to.equal(1)
    })

    it('should return -1 when first name is alphabetically higher than the second name in this specific order', () => {
      // Given fullNameA is "Mary Chan" and fullNameB is "John Smith"
      // Then -1 should be returned
      const testResult = require('../sort.js').sortByLastName("Mary Chan", "John Smith")
      expect(testResult).to.equal(-1)
    })

    it('should return 0 when both names start with the same letter ', () => {
      // Given fullNameA is "John Smith" and fullNameB is "Tom Smith"
      // Then 0 should be returned
      const testResult = require('../sort.js').sortByLastName("John Smith", "Tom Smith")
      expect(testResult).to.equal(0)
    })
  })

  describe('printNames()', () => {
    it('should output a file if it receives an array', () => {
      // input is expected to be an array
      // then sorted-names-list.txt should be created
      const test = printNames(["Mary Chan", "John Smith "])
      expect(fs.existsSync('sorted-names-list.txt')).to.be.true
      // expect(fs.readFileSync('sorted-names-list.txt')).to.equal('Mary Chan John Smith")
    })

    it('should quit if it receives a string', () => {
      // given a single string as input
      // nothing should be done and program quits
      const test = printNames("Mary Chan")
      expect(fs.existsSync('sorted-names-list.txt')).to.be.false
    })

    // Have chosen to delete this as it does not work
    afterEach(() => {

      // delete sorted-names-list.txt

      // it("deletes file", (done) => {
      //   fs.writeFile('/sorted-names-list.txt', "!", function (err) {
      //       if (err) console.log(err);
      //       fs.readdir(proess.cwd(), function(err, list) {
      //           assert.isTrue(list.indexOf('/sorted-names-list.txt') > -1)
      //           fs.unlinkSync(newFile);
      //           fs.readdir(process.cwd(), function(err, list) {
      //               if (err) throw err;
      //               assert.isTrue(list.indexOf(newFile) === -1);
      //               done()
      //           });
      //       });
      //   });
      // })
    })
  })

  // describe('displayNames()', () => {
  //   it('should receive an array', () => {
  //     // Given input is expected to be an array
  //     // Then array should be looped and displayed on screen
  //   })
  //   it('should display nothing if it receives a string', () => {
  //     // Given input is a string
  //     // Then nothing is displayed on screen and program quits
  //   })
  // })
})