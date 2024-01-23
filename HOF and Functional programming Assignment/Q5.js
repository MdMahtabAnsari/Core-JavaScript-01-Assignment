/*
5. Using the same array of expense objects, use the reduce method to calculate the total amount of all
expenses.
*/
const expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
]

const expenseCalculator = (expenses) => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

console.log(expenseCalculator(expenses)); // Prints: 350