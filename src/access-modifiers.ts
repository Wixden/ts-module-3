{
  // ==============================================================

  // access modifiers

  // to restrict access or to restrict modification we will use readonly before property name.
  class BankAccount {
    public readonly id: number;
    public name: string;
    private balance: number;

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

  // personOne.balance = 2; // we can't change the value of balance because it is private, which can only be accessed inside the class scope.

  // ==============================================================
}
