const first = [1, 2, 3]
const second = [4, 5, 6]

const combined = first.concat(second) // Normally
const combined2 = [...first, ...second] // Using spread operator. 

console.log(combined2);

// Difference between both of them is that using spread operator, we can add elements in between

const clone = [...first] // We can also clone an array like this

console.log("Clone arr : ", clone);

const firstObj = {name: 'Sparsh'}
const secondObj = {job: 'Engineer'}

const combinedObj = {...firstObj, ...secondObj, location: 'India'}

console.log(combinedObj);

const cloneObj = {...firstObj}
console.log(cloneObj);

