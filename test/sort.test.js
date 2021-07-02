var assert = require('assert');
var sortName = require('../sort.js')

describe('Reading txtfile', () => {
  it('should have a txtfile with .txt file extension', () => { })
  it('should not be empty', () => { })
  it('should have list of names separated by line break', () => { })
})

describe('Formatting names', () => {
  before(() => { })
  it('should receive an array', () => { })
})

describe('Sorting names', () => {
  it('should receive two strings', () => { })
  it('should return 1 when lastNameA is lower in order than lastNameB', () => { })
  it('should return -1 when lastNameA is higher in order than lastNameB', () => { })
  it('should return 0 when lastNameA is the same letter as lastNameB and no change to position ', () => { })
})

describe('Outputting file', () => {
  it('should receive an array', () => { })
  it('should have strings inside the array', () => { })
  it('should create a file called sorted-names-list.txt', () => { })
  it('should add lines to a file called sorted-names-list.txt', () => { })
})

