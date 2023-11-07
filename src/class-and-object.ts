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
  }

  const dog = new Animal("Sparky", "Dog", "woof");
  const cat = new Animal("Tommy", "Cat", "Meow Meow");

  // ==============================================================
}
