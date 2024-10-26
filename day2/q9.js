const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const greetUser = () => {
    rl.question("Enter your name: ", (name) => {
        if (!name) {
            name = "Guest";
        }
        console.log(`Hello, ${name}`);
        rl.close();
    });
};

greetUser();