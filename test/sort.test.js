var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should;
var sortName = require('../sort.js')
var fs = require('fs')

const fileName = './assets/unsorted-names-list.txt'

describe('sortNames', function () {
  describe('readFile()', () => {
    it('should have a txtfile with .txt file extension', () => {
      expect(fs.existsSync(fileName)).to.be.true
    })
    it('should contain a string', () => {
      expect(fs.readFileSync(fileName)).to.not.be.null
    })
    it('should have list of names separated by line break', () => {
      // expect(fs.readFileSync(fileName)).to.contain.a('string')
    })
    it('should return an array', () => { })
  })

  // unit tests for formatNames function
  describe('formatNames()', () => {
    it('should return two strings', () => { })
  })

  describe('sortByLastName()', () => {
    it('should not have non-alphabetical characters as the first character of the surname', () => { })
    it('should return 1 when lastNameA is lower in order than lastNameB', () => { })
    it('should return -1 when lastNameA is higher in order than lastNameB', () => { })
    it('should return 0 when lastNameA is the same letter as lastNameB and no change to position ', () => { })
  })

  describe('printNames()', () => {
    it('should receive an array', () => { })
    it('should have strings inside the array', () => { })
    it('should create a file called sorted-names-list.txt', () => { })
    it('should add lines to a file called sorted-names-list.txt', () => { })
  })
})