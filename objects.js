const person = {
    name: "Sparsh",
    walkFunction() { },
    talkFunction() { }
}

person.name = "Sparsh Chadha"
// console.log(person.talkFunction, " Hello");


// Changing the work done by function 
person.talkFunction = function () {
    console.log("Talking now");
}

// person.talkFunction()

// Another way of accessing object's fields - 
person['talkFunction']
// console.log(person['name']);


//  'this' keyword - 
const test = {
    prop: 42,
    func: function () {
        // return this.prop;
        console.log(this);
    },
};

// const hh = test.func
// hh()

// console.log(test.func());
// Expected output: 42


//   Another example - 

function getThis() {
    return this;
}

const obj1 = { 
    name: "obj1" 
};
const obj2 = { 
    name: "obj2" 
};

function helloJi(){
    console.log("Hello ji");
}

obj1.getThis = getThis;
obj2.getThis = getThis;

obj1.helloJi = helloJi; // Adds a new field to obj1

// console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
// console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

obj1.helloJi();


// Bind method - The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value
const demoVar = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = demoVar.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined
  
  const boundGetX = unboundGetX.bind(demoVar);
  console.log(boundGetX());
  // Expected output: 42