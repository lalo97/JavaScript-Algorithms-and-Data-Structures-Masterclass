export default class RecursiveRange {
  // Write a function called recursiveRange which accepts a
  // number and adds up all the numbers from 0 to the number passed to the function

  // SAMPLE INPUT/OUTPUT
  // recursiveRange(6) // 21
  // recursiveRange(10) // 55

  constructor() {
    console.log(
      "Recursion - recursiveRange",
      "recursiveRange(6) => 21",
      "result: " + this.recursiveRange(6)
    );
    console.log(
      "Recursion - recursiveRange",
      "recursiveRange(10) => 55",
      "result: " + this.recursiveRange(10)
    );
  }

  recursiveRange(numb = 0) {
    if (numb === 0) {
      return numb;
    }

    return numb + this.recursiveRange(numb - 1);
  }
}
