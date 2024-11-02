function employeeSummary(employees) {
    return employees.map(employee => 
      `Employee ${employee.name} works in ${employee.department} department and earns $${employee.salary} annually.`
    );
  }
  
  const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
  ];
  
  console.log(employeeSummary(employees));