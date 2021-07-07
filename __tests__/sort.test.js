const nameSort = require("../sort.js");

const unsortedNames = "./assets/unsorted-names-list.txt";
const emptyFile = "./assets/empty.txt";
const oneNameFile = "./assets/one-name.txt";
const badNames = "./assets/badNames.txt";
const wrongFileType = "./assets/wrong-type.md";

describe("sortNames", () => {
  describe("readFile()", () => {
    it("Should return empty string if file is empty", async () => {
      const data = await nameSort.processFile(emptyFile);
      expect(data).toBe("");
    });

    it("Should return empty string if file isn't .txt", async () => {
      const data = await nameSort.processFile(wrongFileType);
      expect(data).toBe("");
    });

    it("Should contain a string", async () => {
      const data = await nameSort.processFile(unsortedNames);
      expect(typeof data).toBe("string");
    });

    it("Should display and print single name", async () => {
      const result = await nameSort.processFile(oneNameFile);
      expect(result).toBe("James Bond");
    });

    it("should display and print many names", async () => {
      const result = await nameSort.processFile(unsortedNames);
      expect(result).toBe(
        "Janet Parsons,Vaughn Lewis,Adonis Julius Archer,Shelby Nathan Yoder,Marin Alvarez,London Lindsey,Beau Tristan Bentley,Leo Gardner,Hunter Uriah Mathew Clarke,Mikayla Lopez,Frankie Conner Ritter"
      );
    });
  });

  describe("sortByLastName()", () => {
    it("Should sort names alphabetically by lastname", async () => {
      const result = await nameSort.processFile(unsortedNames);
      const namesArray = result.split(",");
      namesArray.sort((A, B) => nameSort.sortByLastName(A, B));
      expect(namesArray).toStrictEqual([
        "Marin Alvarez",
        "Adonis Julius Archer",
        "Beau Tristan Bentley",
        "Hunter Uriah Mathew Clarke",
        "Leo Gardner",
        "Vaughn Lewis",
        "London Lindsey",
        "Mikayla Lopez",
        "Janet Parsons",
        "Frankie Conner Ritter",
        "Shelby Nathan Yoder",
      ]);
    });
  });


  describe("empty tests", () => {
    it("empty 1", async () => {
      const myFunction = (X) => {
        return typeof X === "string"
      }
      const inputs = ["stuff", 6, "junk" ]
      const expected = [true, false, true]

      for(let i =0; i < inputs.length; i++){
        const result = myFunction(inputs[i])
        expect(result).toBe(expected[i])
      }
      // const result = myFunction("stuff")

      // const expected = true

      // expect(result).toBe(expected)
    })
    xit("empty 2", async () => {
    })
  })

});

// FAIL (before hook)
//xdescribe("should stop program if there is nothing in the textfile", () => {
// Given an empty file is
// When it is read in
// It does not call the next function formatNamesand there is no output
// xbefore(function(done){
//     fs.readFile(emptyFile, 'utf8', function(err, fileContents) {
//       if (err) throw err;
//       testvalue = JSON.parse(fileContents);
//       done();
//     });
// });
//xit("should quit program if file is empty", () => {
// let spy = sinon.spy(formatNames)
// expect(spy.calledOnce).to.be.false

// expect(fs.existsSync('sorted-names-list.txt')).to.be.false
//     })
//   })
// })

// describe('formatNames()', () => {

//   //FAIL
//   it('should call displayNames & printName if an array is provided', () => {
//     // Given it receives an array
//     // When array has length more than 1 (which is always)
//     // Then displayNames and printNames should be called
//     const testResult = formatNames(["John Smith", "Mary Smith"])
//     // let spy = sinon.spy(displayNames)
//     // let spy2 = sinon.spy(printNames)
//     // expect(spy.calledOnce).to.be.true
//     // expect(spy2.calledOnce).to.be.true
//   })

//   // FAIL
//   xit("should print and display name if there is only one name passed", () => {
//     // Given text file is read in
//     // When there is only one name
//     // Then name should be printed and displayed
//     const testResult = formatNames(["John Smith"])
//     // expect(fs.existsSync('/sorted-names-list.txt')).to.be.true
//     // expect(fs.readFileSync('/sorted-names-list.txt')).to.equal('John Smith')
//     // let spy = sinon.spy(displayNames)
//     // expect(spy.calledOnce).to.be.true
//   })

//   // PASS
//   xit("it should not print and display name if there is only no name passed", () => {
//     // Given text file is read in
//     // When there is only one name
//     // Then name should be printed and displayed
//     const testResult = formatNames([])
//     // expect(fs.existsSync('/sorted-names-list.txt')).to.be.false
//     // let spy = sinon.spy(displayNames)
//     // expect(spy.calledOnce).to.be.false
//   })
// })

// describe('sortByLastName()', () => {

//   // this test should never be needed because the data is sanitized much earlier
//   // it('should skip current name if it has a non-alphabetical first character', () => {
//   //   // Given it receives name a name of "John 4Smith" and name of "Mary Chan"
//   //   // "John 4Smith" should not be included in the final list
//   //   // then nothing will be returned, program quits
//   //   const testResult = sortByLastName("7om Smith", "Mary Chan")
//   //   expect(testResult).to.be.null;
//   // })

//   // PASS
//   xit('should return 1 when the first name is alphabetically lower than the second name in this specific order', () => {
//     // Given fullNameA is "John Smith" and fullNameB is "Mary Chan"
//     // Then 1 should be returned
//     const testResult = sortByLastName("John Smith", "Mary Chan")
//     expect(testResult).to.equal(1)
//   })

//   // PASS
//   xit('should return -1 when first name is alphabetically higher than the second name in this specific order', () => {
//     // Given fullNameA is "Mary Chan" and fullNameB is "John Smith"
//     // Then -1 should be returned
//     const testResult = sortByLastName("Mary Chan", "John Smith")
//     expect(testResult).to.equal(-1)
//   })

//   // PASS
//   xit('should return -1 when both names start with the same letter but the first name shorter', () => {
//     // Given fullNameA is "Mary Chan" and fullNameB is "John Smith"
//     // Then -1 should be returned
//     const testResult = sortByLastName("John Smit", "John Smith")
//     expect(testResult).to.equal(-1)
//   })

//   // PASS
//   xit('should return 0 when both names start with the same letter ', () => {
//     // Given fullNameA is "John Smith" and fullNameB is "Tom Smith"
//     // Then 0 should be returned
//     const testResult = sortByLastName("John Smith", "Tom Smith")
//     expect(testResult).to.equal(0)
//   })
// })

// describe('printNames()', () => {
//   // PASS
//   xit('should output a file if it receives an array', () => {
//     // input is expected to be an array
//     // then sorted-names-list.txt should be created
//     const test = printNames(["Mary Chan", "John Smith "])
//     // expect(fs.existsSync('sorted-names-list.txt')).to.be.true
//     // expect(fs.readFileSync('sorted-names-list.txt')).to.equal('Mary Chan John Smith")
//   })

//   // FAIL
//   xit('should quit if it receives a string', () => {
//     // given a single string as input
//     // nothing should be done and program quits
//     const test = printNames("Mary Chan")
//     // expect(fs.existsSync('sorted-names-list.txt')).to.be.false
//   })

//   // Have chosen to delete this as it does not work
//   afterEach(() => {

//     // delete sorted-names-list.txt

//     // it("deletes file", (done) => {
//     //   fs.writeFile('/sorted-names-list.txt', "!", function (err) {
//     //       if (err) console.log(err);
//     //       fs.readdir(proess.cwd(), function(err, list) {
//     //           assert.isTrue(list.indexOf('/sorted-names-list.txt') > -1)
//     //           fs.unlinkSync(newFile);
//     //           fs.readdir(process.cwd(), function(err, list) {
//     //               if (err) throw err;
//     //               assert.isTrue(list.indexOf(newFile) === -1);
//     //               done()
//     //           });
//     //       });
//     //   });
//     // })
//   })
// })

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
