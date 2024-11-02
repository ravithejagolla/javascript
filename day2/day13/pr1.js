
function combiningArrays(fruits,vegetables){
    fruits = ["apple", "banana", "orange"];
    vegetables = ["carrot", "broccoli", "spinach"];

   const groceries=[...fruits,...vegetables];

   return groceries

}
let result=combiningArrays()
console.log(result); //[ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]
