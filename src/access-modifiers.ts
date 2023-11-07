{
  // ==============================================================

  // access modifiers

  // to restrict access or to restrict modification we will use readonly before property name.
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    protected _type: string;

    constructor(id: number, name: string, balance: number, type: string) {
      this.id = id;
      this.name = name;
      this._balance = balance;
      this._type = type;
    }

    addBalance(amount: number) {
      const newBalance = (this._balance += amount);
      return `$${amount} added and new balance $${newBalance}`;
    }

    getBalance() {
      return this._balance;
    }
  }

  // if we want any property to be accessible by child classes but unaccessible to instances we declare that property with "protected" modifier.
  class StudentAccount extends BankAccount {
    test() {
      this._type = "Student Account"; // now we have access to the "_type" property which is protected from instances
    }
  }

  const personOne = new BankAccount(134567, "John Smith", 56000, "Savings");
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
