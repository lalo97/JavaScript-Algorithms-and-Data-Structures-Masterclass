export default class Fibonacci {
  // Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
  // Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, 
  // and where every number thereafter is equal to the sum of the previous two numbers.

  // fib(4) // 3
  // fib(10) // 55
  // fib(28) // 317811
  // fib(35) // 9227465

  constructor() {
    console.log(
      "Recursion - fib",
      "fib(4) => 3",
      "result: " + this.fibRecursion(4)
    );
    console.log(
      "Recursion - fib",
      "fib(10) => 55",
      "result: " + this.fibRecursion(10)
    );
    console.log(
      "Recursion - fib",
      "fib(28) => 317811",
      "result: " + this.fibRecursion(28)
    );
    console.log(
      "Recursion - fib",
      "fib(35) => 9227465",
      "result: " + this.fibRecursion(35)
    );
  }
  // 1, 1, 2, 3, 5 ,8 ,13, 21, 34, 55
  fibRecursion(numb = 0) {
    if (numb <= 2) {
      return 1;
    } 

    return this.fibRecursion(numb - 2) + this.fibRecursion(numb - 1);
  }
}
