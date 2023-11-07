{
  // ==============================================================

  // access modifiers

  // to restrict access or to restrict modification we will use readonly before property name.
  class BankAccount {
    readonly id: number;
    name: string;
    readonly balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    addBalance(amount: number) {
      console.log(amount);
    }
  }

  const personOne = new BankAccount(134567, "John Smith", 56000);
  personOne.name = "Mark Benjamin"; // we can change the name because it is not readonly
  // personOne.id = 134567; // now here we can't modify the value of id, which is readonly.

  // ==============================================================
}
