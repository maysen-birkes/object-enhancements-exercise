// In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.

//Same keys and values

function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

// ES2015 Version

function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

//Compute Property Names

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
};

instructor[favoriteNumber] = "That is my favorite!";

//ES2015 Version

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

//Object Methods

var instructor = {
  firstName: "Colt",
  sayHi: function () {
    return "Hi!";
  },
  sayBye: function () {
    return this.firstName + "says bye!";
  },
};

//ES2015 Version

const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + "says bye!";
  },
};

//createAnimal function

const dog = createAnimal("dog", "bark", "woof");

const cow = createAnimal("cow", "moo", "Mooooooo");

function createAnimal(animal, verb, noise) {
  return {
    animal,
    [verb]() {
      return noise;
    },
  };
}
