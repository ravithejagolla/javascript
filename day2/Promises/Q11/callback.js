function calculate(num1, num2) {
    function operation(num1, num2, callback) {
        return callback(num1, num2);
    }
    console.log(operation(num1, num2, (a, b) => a + b));
    console.log(operation(num1, num2, (a, b) => a * b));
    
}
calculate(5,3)
