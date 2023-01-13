export default class Factorial {
  // Write a function factorial which accepts a number and returns the factorial
  // of that number. A factorial is the product of an integer and all the integers below it;
  // e.g., factorial four ( 4! )
  // is equal to 24, because 4 * 3 * 2 * 1 equals 24.
  // factorial zero (0!) is always 1.

  // factorial(1) // 1
  // factorial(2) // 2
  // factorial(4) // 24
  // factorial(7) // 5040

  constructor() {
    console.log(
      "Recursion - factorial",
      "factorial(1) => 1",
      "result: " + this.factorial(1)
    );
    console.log(
      "Recursion - factorial",
      "factorial(2) => 2",
      "result: " + this.factorial(2)
    );
    console.log(
      "Recursion - factorial",
      "factorial(4) => 24",
      "result: " + this.factorial(4)
    );
    console.log(
      "Recursion - factorial",
      "factorial(7) => 5040",
      "result: " + this.factorial(7)
    );
  }

  factorial(factorial = 0) {
    if (factorial === 0) {
      return 1;
    }
    return factorial * this.factorial(factorial - 1);
  }
}
