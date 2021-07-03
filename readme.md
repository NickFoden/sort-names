### Sort Names

> The premise of this personal exercise is to sort a list of names from a textfile by their surname, followed by their first name, second name, third name if exists. The sorted names should display on screen and in a text file.

Please note certain assumptions have been made:

1. all names will always have a given name and a surname (i.e. "Peekay" or "Cher" will not be checked for) and
2. surnames don't begin with an non-alphabetical character.

The input
```
Janet Parsons
Vaughn Lewis
Adonis Julius Archer
Shelby Nathan Yoder
Marin Alvarez
London Lindsey
Beau Tristan Bentley
Leo Gardner
Hunter Uriah Mathew Clarke
Mikayla Lopez
Frankie Conner Ritter
```

The expected output should look like

```
Marin Alvarez
Adonis Julius Archer
Beau Tristan Bentley
Hunter Uriah Mathew Clarke
Leo Gardner
Vaughn Lewis
London Lindsey
Mikayla Lopez
Janet Parsons
Frankie Conner Ritter
Shelby Nathan Yoder
```

### To run program

1. `npm install`
2. `node app.js`

### To run tests

1. `npm test`

### Extensible features

* Ability to run the script using the name of the file and a relative path to the unsorted-names-list.txt
* Ability to sort by given names
* Made more efficient if the list of names is very long
* could use modular javascript instead

### Persistent issues

* unable to use `sinon` to effectively watch for function calls. Attempted to resolve this issue by changing the structure of sort.js into modular javascript but did not work. The syntax for sinon.spy requires an object and a method name.

* Unsure how to use bad-names.txt test case to write test where there are two names nad one number in the textfile input. How can you check for whether namesArray has a length of 2 specifically.

### Helpful resources

https://stackoverflow.com/questions/29800733/verifying-function-call-and-inspecting-arguments-using-sinon-spies
https://stackoverflow.com/questions/20584233/mocha-pass-variable-to-the-next-test
