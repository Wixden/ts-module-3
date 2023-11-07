{
  // ==============================================================

  // Type guard

  // typeof --> type guard

  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(5, 5);
  console.log(result1);
  console.log(5);

  // in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: string;
  };

  const getUser = (user: NormalUser | AdminUser) => {
    // You cannot access the role property in here.
    // user. // will suggest only name. because name property is common in both types of users.
    if ("role" in user) {
      // user.role // Now we will get suggestion for both the name and role. because we are using in guard to
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const user1: NormalUser = {
    name: "John",
  };

  const adminUser: AdminUser = {
    name: "John",
    role: "Admin",
  };

  getUser(user1);
  getUser(adminUser);

  // You can access the role property in here.

  // ==============================================================
}
