{
  // ==============================================================

  // oop - class
  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      (this.name = name), (this.species = species), (this.sound = sound);
    }

    // function
    makeSound() {
      console.log(`The ${this.species} sound is ${this.sound}`);
    }
  }

  const animal1 = new Animal("Sparky", "Dog", "woof");
  const animal2 = new Animal("Tommy", "Cat", "Meow Meow");

  animal1.makeSound();
  animal2.makeSound();

  // parameter properties (here we don't need to define the property types, we can declare them directly in constructor with public keyword)
  class Person {
    constructor(
      public name: string,
      public age: number,
      public gender: string
    ) {}

    isMaleOrFemale() {
      console.log(`${this.name} is ${this.gender}`);
    }
  }

  const person = new Person("John", 30, "Gay");
  person.isMaleOrFemale();

  // ==============================================================
}
