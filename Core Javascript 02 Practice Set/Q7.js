/*
7. Tasks:
=>Create an object named calculator with methods add, subtract, and multiply.
=>Implement the calculater method in the calculator object, which takes an opeation ('add', 'subtact', or
'multiply') and two numbers.
=>Use call to perform an addition operation using the calculate method.
=>Use apply to peform a multiplication opeation using the calculate method with aguments as an array.
=>Ceate anothe object named discountCalculator with a discount percentage propety and a method
applyDiscount.
=>Use bind to ceate a new function calculateDiscount that is bound to the discountCalculato object and
can be reused.
*/

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    calculate: function (operation, a, b) {
        if (operation === 'add') {
            return this.add(a, b);
        } else if (operation === 'subtract') {
            return this.subtract(a, b);
        } else if (operation === 'multiply') {
            return this.multiply(a, b);
        }
    }
}
console.log(calculator.calculate.call(calculator,"add",5,7))
console.log(calculator.calculate.apply(calculator,["multiply",5,7]))
const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function (price) {
        return price - (price * this.discountPercentage / 100);
    }
}
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
console.log(calculateDiscount(100));