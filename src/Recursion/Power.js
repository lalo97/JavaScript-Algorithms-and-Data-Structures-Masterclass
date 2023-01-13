export default class Power {
    // Write a function called power which accepts a base and an exponent. 
    // The function should return the power of the base to the exponent. 
    // This function should mimic the functionality of Math.pow()  
    // - do not worry about negative bases and exponents.
  
    // power(2,0) => 1
    // power(2,2) => 4
    // power(2,4) => 16
  
    constructor() {
      console.log(
        "Recursion - power",
        "power(2,0) => 1",
        "result: " + this.power(2,0)
      );
      console.log(
        "Recursion - power",
        "power(2,2) => 4",
        "result: " + this.power(2,2)
      );
      console.log(
        "Recursion - power",
        "power(2,4) => 16",
        "result: " + this.power(2,4)
      );
    }
  
    power(numb = 0, exp = 0) {
      if (exp === 0) {
        return 1;
      }
      return numb * this.power(numb, exp - 1);
    }
  }
  