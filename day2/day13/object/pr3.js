
function thirdEmployeeInfo(employees) {
    employees = [
        { name: "John Doe", age: 30, department: "HR", salary: 50000 },
        { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
        { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
      ];

    const thirdEmployeeName = employees[2].name;
    const thirdEmployeeAge = employees[2].age;
    const thirdEmployeeSalary = employees[2].salary;
    const bonus = thirdEmployeeSalary * 0.1;
    return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus};`
}

const result =thirdEmployeeInfo()

console.log(result) // output: Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000;