export default class NestedEvenSum {
  // Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

  obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };

  obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  };

  constructor() {
    console.log(
      "Section9 - nestedEvenSum",
      "this.nestedEvenSum(obj1) => 6",
      this.nestedEvenSum(this.obj1)
    );
    console.log(
      "Section9 - nestedEvenSum",
      "this.nestedEvenSum(obj2) => 10",
      this.nestedEvenSum(this.obj2)
    );
  }

  nestedEvenSum(object = {}) {
    let sumResult = 0;

    const helperSum = (tempObject) => {
      for (const key in tempObject) {
        const element = tempObject[key];
        if (typeof element === "number" && element % 2 === 0) {
          sumResult += element;
        } else if (typeof element === "object") {
          helperSum(element);
        }
      }
    };

    helperSum(object);

    return sumResult;
  }
}
