
function employeeInformation(employees) {
    

employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
    const secondEmployeeName = employees[1].name;
    const secondEmployeeDepartment = employees[1].department;
    return {
        secondEmployeeName: secondEmployeeName,
        secondEmployeeDepartment: secondEmployeeDepartment
    };
}

const result=employeeInformation();

console.log(result) //{secondEmployeeName: 'Jane Smith',secondEmployeeDepartment: 'Finance'}

    
    