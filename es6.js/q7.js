// Example Employees Array:
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

// Function for Highest Paid Employee:
function highestPaid(employees) {
    return employees.reduce((highest, current) => {
        const { salary: highestSalary } = highest;
        const { salary: currentSalary } = current;
        return currentSalary > highestSalary ? current : highest;
    });
}
console.log(highestPaid(employees));
// Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }


// Function for Destructuring to Swap
function destructuringToSwap(employees) {
    if (employees.length < 2) return employees;

    [employees[0], employees[employees.length - 1]] = [employees[employees.length - 1], employees[0]];

    return employees;
}
console.log(destructuringToSwap(employees));
// Output: [
//   { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
//   { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
//   { name: 'John Doe', age: 30, department: 'HR', salary: 50000 }
// ]