

function calculateFinalGrades(students) {
    return students
        .map(student => ({
            id: student.id,
            name: student.name,
            finalGrade: Math.round(student.scores.reduce((a, b) => a + b, 0) / student.scores.length)
        }))
        .filter(student => student.finalGrade >= 60);
}

const students = [
    { id: 1, name: "Alice", scores: [85, 90, 92] },
    { id: 2, name: "Bob", scores: [70, 68, 72] },
    { id: 3, name: "Charlie", scores: [60, 65, 58] },
    { id: 4, name: "David", scores: [75, 80, 78] },
];

const passedStudents = calculateFinalGrades(students);
console.log(passedStudents);
  /*Output:
   [
  { id: 1, name: "Alice", finalGrade: 89 },
    { id: 2, name: "Bob", finalGrade: 70 },
    { id: 4, name: "David", finalGrade: 78 }
  ]*/
  
  