{
  // ==============================================================

  // OOP - Inheritance
  class User {
    name: string;
    email: string;
    gender: string;
    address: string;

    constructor(name: string, email: string, gender: string, address: string) {
      this.name = name;
      this.email = email;
      this.gender = gender;
      this.address = address;
    }

    sleepHour(hours: number) {
      console.log(`${this.name} will sleep ${hours}`);
    }
  }

  class Student extends User {
    roll: number;
    constructor(
      name: string,
      email: string,
      gender: string,
      address: string,
      roll: number
    ) {
      super(name, email, gender, address);
      this.roll = roll;
    }

    studyHour(hours: number) {
      console.log(`${this.name} will study for ${hours}`);
    }
  }

  const student1 = new Student(
    "John Doe",
    "johndoe@gmail.com",
    "Male",
    "Chicago",
    55
  );

  // ==============================================================
}
