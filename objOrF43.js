// Objects ---------------------------------------------------------------

let person = {
    firstName: "Joely",
    lastName: 'Vernier',
    age: 23
  }
  
  console.log(person.firstName)
  console.log(person['lastName'])
  
  // Classes ---------------------------------------------------------------
  
  class Animal {
    constructor(name, color, age){
      this.animalName = name;
      this.color = color;
      this.age = age;
    }
  }
  
  // We can make multiple objects with the same class! This saves time especially if you need to make a bunch of objects at once.
  let dallas = new Animal('Dallas', 'brown/black', 7)
  console.log(dallas.animalName)
  
  let koda = new Animal('Koda', 'brown/black/white', 4)
  console.log(koda['color'])
  
  // We can change the values of any property in an object using dot notation.
  dallas.age += 1
  console.log(dallas.age)
  
  // We can add properties to an object using dot notation as well as square brackets.
  dallas.clothes = 'bandana'
  console.log(dallas)
  
  // The delete keyword allows us to remove properties from objects. We can use dot notation and square brackets for this.
  delete dallas.clothes
  console.log(dallas)
  
  // We can use for in loops to loop over objects.
  for(let property in dallas){
    console.log(property, dallas[property])
  }
  
  for(let property in koda){
    console.log(koda[property])
    koda[property] = 'woof'
    console.log(koda[property])
  }
  
  // Extended Classes ---------------------------------------------------------------
  
  // When extending a class, the inherited properties must be passed into the super. The super will grab the information from the parent class for us. Any new properties must be declared with this.
  class Cat extends Animal{
    constructor(name, color, age, attacksBugs){
      super(name, color, age)
  
      this.attacksBugs = attacksBugs;
    }
  
    meow(){
      console.log(`Hi, my name is ${this.animalName} and it is ${this.attacksBugs} that I hunt bugs.`)
    }
  }
  
  let macy = new Cat('Macy', 'grey', 3, true)
  console.log(macy)
  macy.meow()
  
  // Double Extending ---------------------------------------------------------------
  
  class Kitten extends Cat{
    constructor(name, color, age, attacksBugs, howTiny){
      super(name, color, age, attacksBugs)
      this.howTiny = howTiny;
    }
  
    tinyMeow(){
      console.log('meow')
    }
  }
  
  let wisp = new Kitten('Wisp', 'white', 0, true, 'VERY')
  console.log(wisp)
  
  // Wisp has access to both the tinyMeow and meow functions because she inherits the meow functiion from the Cat parent class.
  wisp.tinyMeow()
  wisp.meow()
  
  // Macy does not have access to the tinyMeow function because it's only accessible to inctancees of the Kitten class. Macy is an instance of the Cat class.
  // macy.tinyMeow()