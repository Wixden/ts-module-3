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
      const newBalance = (this.balance += amount);
      return `$${amount} added and new balance $${newBalance}`;
    }

    getBalance() {
      return this.balance;
    }
  }

  const personOne = new BankAccount(134567, "John Smith", 56000);
  personOne.name = "Mark Benjamin"; // we can change the name because it is not readonly
  // personOne.id = 134567; // now here we can't modify the value of id, which is readonly.

  // personOne.balance = 2; // we can't change the value of balance because it is private, which can only be accessed inside the class scope.

  // now we created a function to add amount to the balance property:
  const addMoney = personOne.addBalance(5000);
  console.log(addMoney);

  const myBalance = personOne.getBalance();
  console.log(`My balance: $${myBalance}`);

  // ==============================================================
}
