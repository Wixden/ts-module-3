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

  // ==============================================================
}
