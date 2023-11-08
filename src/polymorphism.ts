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

  // ==============================================================
}
