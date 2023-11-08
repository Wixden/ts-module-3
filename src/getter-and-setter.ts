{
  // ==============================================================

  // getter and setter
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

    // addBalance(amount: number) {
    //   const newBalance = (this._balance += amount);
    //   return `$${amount} added and new balance $${newBalance}`;
    // }

    // doing above function using getter and setter
    // getter
    get balance() {
      return this._balance;
    }

    // setter
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }

    // getBalance() {
    //   return this._balance;
    // }
  }

  const personOne = new BankAccount(134567, "John Smith", 56000, "Savings");
  personOne.name = "Mark Benjamin";

  // const addMoney = personOne.addBalance(5000);
  // console.log(addMoney);

  // const myBalance = personOne.getBalance();
  // console.log(`My balance: $${myBalance}`);

  const addMoney = (personOne.deposit = 78000);
  console.log("Money added: $", addMoney);

  const myBalance2 = personOne.balance; // using the function as property.
  console.log("My balance is: $", myBalance2);

  // ==============================================================
}
