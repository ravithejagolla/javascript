
function mergingObjects(student, course){
    student = { name: "Alice", age: 20 };
    course = { courseName: "Math", teacher: "Mr. Smith" };

const merge={...student,...course}

return merge

}

const result=mergingObjects()
console.log(result); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }
