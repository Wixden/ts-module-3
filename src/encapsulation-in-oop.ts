{
  // ===============================================================================

  // Encapsulation

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

    // making this method private will restrict it's access only inside the class.
    private getBalance() {
      return this._balance;
    }

    // Encapsulation: private
    // Now we can access the getBalance method from any children classes using getPrivateMethod method.
    getPrivateMethod() {
      return this.getBalance();
    }
  }

  // if we want any property to be accessible by child classes but unaccessible to instances we declare that property with "protected" modifier.
  class StudentAccount extends BankAccount {
    test() {
      this._type = "Student Account"; // now we have access to the "_type" property which is protected from instances

      // Now if we want to access the "getBalance" method we will call the getPrivateMethod method
      console.log(this.getPrivateMethod());
    }
  }

  // ===============================================================================
}
