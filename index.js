//🚀🚀🚀  Topic #1 Closures 🚀🚀🚀//
/* 🚀🚀🚀🤓 Task 1: 🤓🚀🚀🚀 
Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

//🚀🚀🚀 ⬇️ 📝 Explanation ⬇️ 📝 🚀🚀🚀: 

// EXPLANATION: The function *nestedFunction* can access the 'internal' variable because they are both within the function scope of *myFunction*.  For this same reason, *nestedFunction* cannot be invoked outside of myFunction. Scopes can only look out, not in. In other words, a child can pull from a parent, but a parent cannot pull from a child.




/* 🚀🚀🚀 Task 2: Counter 🚀🚀🚀 */
/* Use summation to do the following:
    1. Receive a number 
    2. Use a counter to return the summation of that number. 
    
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. Note, you may use a for loop for this function if you wish */

function summation(num) {
  let result = 0;
  for (let i = 0; i < num + 1; i++){
    result += i;
  }
  return result;
}

//TEST
// console.log(summation(10));

// 🦁🦁🦁 Topic 2: ADVANCED Array Methods 🦁🦁🦁
// Given this zoo data from around the United States, follow the instructions below. Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
    { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
    { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
    { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
    { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
    { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
    { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
    { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
    { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
    { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
    { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
  ];
  
  /* 🦁🦁🦁 Request 1: .forEach() 🦁🦁🦁
  The zoos want to display both the scientific name and the animal name in front of the habitats. 
  Use animalNames to populate and return the displayNames array with only the animal name and scientific name of each animal. 
  displayNames will be an array of strings, and each string should follow this pattern: "name: {name}, scientific: {scientific name}"
  */

function animalNames(arr) {
  // Initialize empty array. This is where our desired strings will be pushed into
  const displayNames = [];

  // For each loop is passing over each exhibit in the inputted array (in this case, zooAnimals), and pushing the appropriate name and scientific name into the displayNames array
  arr.forEach((exhibit) =>
    displayNames.push(
      `name: ${exhibit.animal_name}, scientific: ${exhibit.scientific_name}`
    )
  );

  //function spits out our desired array of strings after our forEach loop has passed in each exhibit's animal name and scientific name
  return displayNames;
}

//Request 1 TEST
// console.log(animalNames(zooAnimals));
  

  /* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
  The zoo needs a list of all their animal's names converted to lower case. 
  Using lowerCaseNames use .map() to create a new array of strings with the animal's names in lowercase and return the new array. 
  For example: ['jackal, asiatic', .....]
  */

function lowerCaseNames(arr) {
  //declare variable that map will return an array filled with lowercase animal names from passed in array (zooAnimals)
  const lowerCaseNames = arr.map((exhibit) =>
    exhibit.animal_name.toLowerCase()
  );

  // returns the array created from .map
  return lowerCaseNames;
}

// Request 2 TEST
// console.log(lowerCaseNames(zooAnimals));
  
  
  /* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
  The zoo is concerned about animals with a lower population count. 
  Using lowPopulationAnimals use .filter() to create a new array of objects which contains only the animals with a population of less than 5.
  */

function lowPopulationAnimals(arr) {
  // declare new variable that uses filter method to only pass in objects in array from argument that have a population less than 5.
  const lowPopulationAnimals = arr.filter((exhibit) => exhibit.population < 5);

  // return array of objects with populations less than 5
  return lowPopulationAnimals;
}

// Request 3 TEST
// console.log(lowPopulationAnimals(zooAnimals));
  

  /* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
  The zoo needs to know their total animal population across the United States. 
  Using USApop find the total population from the zoos array using the .reduce() method. 
  Remember the reduce method takes two arguments: a callback (which itself takes two args - the accumulator and the item), and an initial value for the count.
  */

function USApop(arr) {
  // reduce method starts with initial value of zero, and additively compounds each exhibit's population as it passes through each object in the argument array
  const totalPop = arr.reduce((acc, exhibit) => acc + exhibit.population, 0);

  //returns single value
  return totalPop;
}
  
// Request 4 TEST
// console.log(USApop(zooAnimals));


// 🦁🦁🦁 Callbacks 🦁🦁🦁  
/* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
  * Use the higher-order function consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as an argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb) {
  return cb(a, b);
}
 
  
/* 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁 */
// 🦁🦁🦁 Use add to return the sum of two numbers 🦁🦁🦁
  
function add(a,b){
  return a + b;
}

// add TEST
// console.log(consume(2, 4, add));


// 🦁🦁🦁 Use multiply to return the product of two numbers 🦁🦁🦁
  
function multiply(a, b) {
  return a * b;
}

// multiply TEST
// console.log(consume(4, 10, multiply));

// 🦁🦁🦁 Use greeting to accept a first and last name and return "Hello {first-name} {last-name}, nice to meet you!" 🦁🦁🦁
  
function greeting(firstName, lastName){
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}
  
// greeting TEST
// console.log(consume('John', 'Smith', greeting));
  
// 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁 
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //
//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴
/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
 Use the constructor function named CuboidMaker to accept properties for length, width, and height which can be initialized as an object
*/
function CuboidMaker(obj) {
  this.length = obj.length;
  this.width = obj.width;
  this.height = obj.height;
}



/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
Create a method called volume using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
Formula for cuboid volume: length * width * height   */

CuboidMaker.prototype.volume = function () {
  return this.length * this.width * this.height;
}





/* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
Create another method called surfaceArea using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
Formula for cuboid surface area of a cube: 
2 * (length * width + length * height + width * height)  */

CuboidMaker.prototype.surfaceArea = function () {
  return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
}




/* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker 🐴🐴🐴
Create an object called cuboid that uses the new keyword to use our CuboidMaker constructor
Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});




// 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
 

// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //
//🦄🦄🦄 1. Take your prototypes from above and refactor into class syntax. Please rename your class CuboidMakerTwo and your object cuboidTwo 🦄🦄🦄
class CuboidMakerTwo{

}


//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄
// console.log(cuboidTwo.volume()); // 100
// console.log(cuboidTwo.surfaceArea()); // 130





  


  /* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
  function foo(){
    console.log('its working');
    return 'bar';
  }
  foo();
  module.exports = {
    foo,
    summation,
    animalNames,
    lowerCaseNames,
    lowPopulationAnimals,
    USApop,
    consume, 
    add,
    multiply,
    greeting,
    CuboidMaker,
    CuboidMakerTwo
  }
