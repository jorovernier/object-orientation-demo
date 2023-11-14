// Objects ---------------------------------------------------------------

const dog = {
    name: 'Freida',
    color: 'brown/black',
    hunger: 40,
    mood: 'feisty',
    age: 9,
    puppies: {
      pup1: 'Freida Jr.',
      pup2: 'Smokey',
      pup3: 'Charlie'
    }
  }
  
  console.log(dog.hunger)
  console.log(`The dog's name is ${dog['hunger']}.`);
  
  // Since the dog variable is defined with const, we cannot change it directly.
  dog = ['Freida', 9]
  
  // We can change the properties in the object it is equal to.
  dog.color = 'brown/grey'
  
  // We can use destructuring to make variables easier to access.
  let {age, name, color: freidaColor, hunger, mood} = dog
  
  console.log(dog.age)
  console.log(age)
  
  console.log(`This is my dog ${name}. She is ${age} years old and she is ${color}.`)
  
  // Here's another example of why we'd want to use destructuring:
  let req = {
    body: {
      item: {
        prices: {
          basePrice: 5,
          salePrice: 4
        }
      }
    },
    params: ''
  }
  
  // Instead of typing req.body.item.prices.basePrice every time, we type this instead:
  let {basePrice: bp} = req.body.item.prices
  console.log(bp)
  
  // We can add properties with this syntax:
  dog.nickname = 'Puppers';
  
  // And remove them like this:
  delete dog.puppies
  
  // You can loop over an object for every property it has.
  for (let key in dog) {
    console.log(`The dog's ${key} is ${dog[key]}.`);
  }
  
  // You can also loop over nested objects the same way.
  
  // With dot notation:
  for (let puppy in dog.puppies){
    console.log(dog.puppies[puppy])
  }
  
  // Or by destructuring the nested property:
  let {puppies} = dog
  for (let puppy in puppies){
    console.log(puppies[puppy])
  }
  
  // To grab just the values or properties in an object, the Object class methods can be used.
  let dogValues = Object.values(dog)
  console.log(dogValues)
  
  console.log(Object.keys(dog))
  
  // Classes ---------------------------------------------------------------
  
  class Animal {
    constructor(name, animalAge, color){
      this.name = name
      this.age = animalAge
      this.color = color
    }
  
    sayAge(){
      console.log('My age is '+this.age)
    }
  }
  
  let bunny = new Animal('Thumper', 2, 'grey')
  
  console.log(bunny.name)
  console.log(bunny['color'])
  bunny.sayAge()
  
  // The class object can be interacted with just like a normal object.
  delete bunny.age
  bunny.movie = 'Bambi'
  
  console.log(bunny)
  
  for (let prop in bunny){
    console.log(`The bunny's ${prop} is ${bunny[prop]}.`)
  }
  
  class Cat extends Animal {
    constructor(name, animalAge, color, meowVolume){
      super(name, animalAge, color)
  
      this.meowVolume = meowVolume
    }
  
    meow(){
      console.log(`Meow, my name is ${this.name} and I meow very ${this.meowVolume}.`)
    }
  }
  
  let macy = new Cat('Macy', 4, 'grey', 'loudly')
  
  // Macy has access to the Cat function and the Animal function.
  macy.meow()
  macy.sayAge()
  
  class Kitten extends Cat {
    constructor(name, animalAge, color, meowVolume, isPotato){
      super(name, animalAge, color, meowVolume)
  
      this.isPotato = isPotato
      this.isCute = true
    }
  
    potatoStatus(){
      console.log(this.isPotato)
    } 
  }
  
  let kitten = new Kitten('Gary', .5, 'teal/pink', 'loudly', false)
  
  kitten.sayAge()
  kitten.meow()
  kitten.potatoStatus()
  
  // Macy doesn't have access to the Kitten function since the parent class can't grab functions from the child class.
  macy.potatoStatus()