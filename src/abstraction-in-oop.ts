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

  // ===============================================================================
}
