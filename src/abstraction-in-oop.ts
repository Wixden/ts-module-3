{
  // ===============================================================================

  // abstraction : interface - abstract

  // an idea:
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements Vehicle {
    startEngine(): void {
      console.log("Car startEngine is starting");
    }
    stopEngine(): void {
      console.log("Car stopEngine is stopping");
    }
    move(): void {
      console.log("Car is moving");
    }
  }

  const toyota = new Car();
  toyota.startEngine();
  toyota.stopEngine();
  toyota.move();

  // idea : abstract - interface - abstract
  // we cannot create instance of Abstract class. Instead we create a new class and extends it to inherit the properties
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("Toyota Car startEngine is starting");
    }
    stopEngine(): void {
      console.log("Toyota Car stopEngine is stopping");
    }
    move(): void {
      console.log("Toyota Car is moving");
    }
  }

  const toyota2 = new ToyotaCar();
  toyota2.startEngine();
  toyota2.stopEngine();
  toyota2.move();

  // ===============================================================================
}
