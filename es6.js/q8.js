const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
        math: { teachers: 5, students: 150 },
        science: { teachers: 4, students: 120 },
        history: { teachers: 3, students: 100 },
        english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
        {
            name: "Alice",
            className: "Grade 5",
            scores: { math: 95, science: 88, history: 85, english: 92 },
        },
        {
            name: "Bob",
            className: "Grade 4",
            scores: { math: 80, science: 78, history: 92, english: 85 },
        },
        {
            name: "Charlie",
            className: "Grade 5",
            scores: { math: 88, science: 90, history: 78, english: 88 },
        },
        {
            name: "Diana",
            className: "Grade 4",
            scores: { math: 92, science: 85, history: 88, english: 90 },
        },
    ],
};

// Problem 10: countCalculation
function countCalculation(school) {
    const {
        departments: {
            math: { teachers: mathTeachersCount, students: mathStudentsCount },
            history: { teachers: historyTeachersCount, students: historyStudentsCount }
        }
    } = school;

    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };

}
console.log(countCalculation(school));
// Output:
// {
//     mathTeachersCount: 5,
//     historyTeachersCount: 3,
//     mathStudentsCount: 150,
//     historyStudentsCount: 100
// }


// Problem 11: findTopStudent
function findTopStudent(school, courseName) {
    const { students } = school;
    let topStudent = students[0];

    for (const student of students) {

        const { scores } = student;
        
        if (scores[courseName] > topStudent.scores[courseName]) {
            topStudent = student;
        }

    }

    return topStudent;

}
console.log(findTopStudent(school, 'math'));
// Output:
// { name: 'Alice', className: 'Grade 5', scores: { math: 95, science: 88, history: 85, english: 92 } }


// Problem 12: addNewDept
function addNewDept(school, newDepartment) {
    return {
        ...school,
        departments: {
            ...school.departments,
            ...newDepartment
        }
    };
}
const newDepartment = { art: { teachers: 2, students: 50 } };
console.log(addNewDept(school, newDepartment));
// Output:
// {
//     name: 'XYZ School',
//     establishYear: 1990,
//     departments: {
//         math: { teachers: 5, students: 150 },
//         science: { teachers: 4, students: 120 },
//         history: { teachers: 3, students: 100 },
//         english: { teachers: 4, students: 130 },
//         art: { teachers: 2, students: 50 }
//     },
//     courses: [ 'math', 'science', 'history', 'english' ],
//     students: [
//         { name: 'Alice', className: 'Grade 5', scores: [Object] },
//         { name: 'Bob', className: 'Grade 4', scores: [Object] },
//         { name: 'Charlie', className: 'Grade 5', scores: [Object] },
//         { name: 'Diana', className: 'Grade 4', scores: [Object] }
//     ]
// }


// Problem 13: highestStudentCountDepartment
function highestStudentCountDepartment(school) {
    const { departments } = school;
    let highestDept = '';
    let maxStudents = 0;

    for (const [dept, { students }] of Object.entries(departments)) {
        
        if (students > maxStudents) {
            maxStudents = students;
            highestDept = dept;
        }

    }

    return highestDept;
}
console.log(highestStudentCountDepartment(school));
// Output: math


// Problem 14: Greeting Message
function generateGreeting(name, language = 'English') {
    const greetings = {
        English: "Hello",
        Spanish: "¡Hola",
        French: "Bonjour",
        Hindi: "Namaste",
        Arabic: "Assalamualikum"
    };

    const greeting = greetings[language] || greetings['English'];
    return `${greeting}, ${name}!`;
}
console.log(generateGreeting("Alice")); // Output: Hello, Alice!
console.log(generateGreeting("Bob", "Spanish")); // Output: ¡Hola, Bob!
console.log(generateGreeting("Charlie", "French")); // Output: Bonjour, Charlie!
console.log(generateGreeting("Chandra", "Hindi")); // Output: Namaste, Chandra!
console.log(generateGreeting("Armash", "Arabic")); // Output: Assalamualikum, Armash!
