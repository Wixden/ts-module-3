{
  // ==============================================================

  // statics in OOP
  class Counter {
    count: number = 0;

    increment() {
      return (this.count = this.count + 1);
    }
    decrement() {
      return (this.count = this.count - 1);
    }
  }

  const instance1 = new Counter();
  console.log(instance1.increment());

  const instance2 = new Counter();
  console.log(instance2.increment());

  // in above code we will get two values with two different memory locations. changing one of them will not change the other. which means the "count" property will be stored in two different memory locations.

  // Below is an example of how to have "count" property value in one memory location with multiple instances:

  class Counter2 {
    static count: number = 0;

    increment() {
      return (Counter2.count = Counter2.count + 1);
    }

    decrement() {
      return (Counter2.count = Counter2.count - 1);
    }
  }

  const instance3 = new Counter2();
  console.log(instance3.increment());
  const instance4 = new Counter2();
  console.log(instance4.increment());
  const instance5 = new Counter2();
  console.log(instance5.increment());

  // Now we will try using static for methods
  class Counter3 {
    static count: number = 0;

    static increment() {
      return (Counter3.count = Counter3.count + 1);
    }
    static decrement() {
      return (Counter3.count = Counter3.count - 1);
    }
  }

  // to call the static method we will need to call it using the class name instead of creating any instance.
  console.log(Counter3.increment());
  console.log(Counter3.increment());
  console.log(Counter3.increment());

  // ==============================================================
}
