const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculatePrice = () => {
    rl.question("Enter the price: ", (priceInput) => {
        rl.question("Enter the discount (leave blank for default 10%): ", (discountInput) => {
            let price = parseFloat(priceInput);
            let discount = discountInput === "" ? 10 : parseFloat(discountInput);

            if (isNaN(price) || price <= 0) {
                console.error("Invalid price. Please enter a positive number.");
                rl.close();
                return;
            }

            if (isNaN(discount) || discount < 0 || discount > 100) {
                console.error("Invalid discount. Please enter a positive number between 0 and 100.");
                rl.close();
                return;
            }

            const finalPrice = price * (1 - discount / 100);
            console.log(`The final price after a ${discount}% discount is: ${finalPrice.toFixed(2)}`);
            rl.close();
        });
    });
};

calculatePrice();
