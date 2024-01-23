/*
 4. Using the same array of expense objects, use the filter method to create a new array that includes only
the expenses related to the category "Groceries."
 */

const expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },

]

const filterByCategory = (expenses, category) => {
    return expenses.filter(expense => expense.category === category);
}

console.log(filterByCategory(expenses, "Groceries"));