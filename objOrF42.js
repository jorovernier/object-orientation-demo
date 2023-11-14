// OBJECTS ------------------------------------

let person = {
  firstName: "Joely",
  lastName: "Vernier",
  age: "almost 23"
}

// Dot Notation and Bracket Notation
console.log(person.firstName)
console.log(person['firstName'])

// Properties can be created with or without single quotes. You'll see the quotes omitted more often since it's easier to type:
let menu = {
  item1: 'mozzarella sticks',
  item2: 'prime rib',
  item3: 'buffalo wings',
  'item4': 'tacos'
}

// You can reference properties in other objects to give value to new properties:
let meal = {
  appetizer: menu.item1,
  entree: 'prime rib',
  dessert: 'ice cream',
  drink: 'water'
}

// You can also reference the other properties outside of the object:
meal.appetizer = menu.item1

// You can destructure one property at a time:
let {drink} = meal
console.log(meal)

// Or you can destructure multiple in the same line:
let {entree, dessert} = meal
console.log(entree)
console.log(dessert)

// If a property name is annoying to type out, even after destructuring, you can take it a step further and call it something completely different:
let {appetizer: app} = meal
console.log(app)

// Additionally, you can make a new variable without destructuring:
let bestDessertEver = meal.dessert
console.log(bestDessertEver)

// We can use a for in loop to dynamically access the property values in an object:

for(key in person){
  console.log(person[key])
}

// We can use the spread operator (...) to make a copy of an object's properties and save it to a new variable:
let meal2 = {...meal}
console.log(meal2)

// If we need to add more properties later on, we can do so with dot and bracket notation:
meal.togo = 'chicken nuggies'
meal['togo'] = 'chicken nuggies'
console.log(meal)

// If we decided to 86 those nuggies, we can remove the togo order with the delete keyword:
delete meal.togo
console.log(meal)

// CLASSES ------------------------------------

// Instead of having to retype all of the properties for each new object we make, we can use Classes to make the objects for us. All it requires is a little bit of setup:
class Pet {
  constructor(name, breed, age){
    this.name = name;
    this.breed = breed;
    this.age = age;
  }

  greeting(){
    console.log(`Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed}.`)
  }
}

// Now that we've created our Class, we can make new instances of it saved to variables:
let pet1 = new Pet('Macy', 'shorthair tabby', 3)
console.log(pet1.name)

let pet2 = new Pet('Gogi', 'tuxedo', 14)
console.log(pet2.name)

// Based on the information passed in as arguments above, the greetings will print something different to the console:
pet1.greeting()
pet2.greeting()

// Additionally, we can make a new Class that extends from the previous one. The extension will have it's own specific properties and methods and it will also inherit all of the properties and methods from the parent Class:
class Dog extends Pet {
  constructor(name, breed, age, barkCount){
    // The super will only include the parameters received from the parent Class:
    super(name, breed, age)
    // The name after "this" does not have to match the one from the constructor:
    this.barks = barkCount;
    // We can even make properties with default values. Since this isn't included in the constructor, we won't need to receive information for this property as an argument:
    this.isGoodBoy = true;
  }

  // It's important to note that this function is only accessible by the Dog Class. Even though Dog can access Pet's greeting method, Pet cannot access Dog's speak method:
  speak(){
    this.barks += 1
    console.log('SQUIRREL!')
  }
}

let dog1 = new Dog('Dallas', "German Shephard", 7, 0)
dog1.greeting()

dog1.speak()
dog1.speak()
dog1.speak()

console.log(dog1.barks)
console.log(dog1.isGoodBoy)