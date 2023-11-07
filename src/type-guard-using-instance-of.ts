{
  // ==============================================================

  // instance of guard
  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log("Animal makes sound!");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string, sound: string) {
      super(name, species, sound);
    }

    dogSound() {
      console.log("Dog is barking!");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string, sound: string) {
      super(name, species, sound);
    }
    catSound() {
      console.log("Cat is Mewaoing!");
    }
  }

  const dog = new Dog("Peter", "Dog", "Woof");
  const cat = new Cat("Solaza", "Cat", "Meow");
  // dog.dogSound();
  // cat.catSound();

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      return animal.dogSound();
    } else if (animal instanceof Cat) {
      return animal.catSound();
    } else {
      return animal.makeSound();
    }
  };

  // getAnimal(dog);
  // getAnimal(cat);

  // Handling the instance in a smart way using function
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal2 = (animal: Animal) => {
    if (isDog(animal)) {
      return animal.dogSound();
    } else if (isCat(animal)) {
      return animal.catSound();
    } else {
      return animal.makeSound();
    }
  };

  // ==============================================================
}
