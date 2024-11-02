
function averageSalary(employees){
    employees = [
        { name: "John Doe", age: 30, department: "HR", salary: 50000 },
        { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
        { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
      ];
      let  sum=0
      let count=0
      for(let i=0;i<employees.length;i++){
        sum+=employees[i].salary
        count++
      }
      const avgsalary=sum/count

      return avgsalary
}

const result=averageSalary()

console.log(result) //60000





  