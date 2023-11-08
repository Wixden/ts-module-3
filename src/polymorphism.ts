{
  // ==============================================================

  // Polymorphism
  class Person {
    getSleep() {
      console.log("I am sleeping for 8 hours");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I am sleeping for 7 hours");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("I am sleeping for 6 hours");
    }
  }

  const getSleepingHours = (param: Person) => {
    return param.getSleep();
  };

  const person = new Person();
  const student = new Student();
  const developer = new Developer();

  getSleepingHours(person);
  getSleepingHours(student);
  getSleepingHours(developer);

  class Shapes {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shapes {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shapes {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shapes) => {
    console.log(param.getArea());
  };

  const shape = new Shapes();
  const circle = new Circle(10);
  const rectangle = new Rectangle(10, 20);

  getShapeArea(shape);
  getShapeArea(circle);
  getShapeArea(rectangle);

  // ==============================================================
}
