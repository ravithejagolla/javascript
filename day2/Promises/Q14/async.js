

function sayhello(time){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Hello,world!")
        resolve()

        }, time);
        
    })
}
function howareu(time){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("How are You?")
        resolve()

        }, time);
        
    })
}
function goodbye(time){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Goodbye!")
        resolve()

        }, time);
        
    })
}





async function delayedMultiGreeting(messages) {
    await sayhello(2000)
    await howareu(1000)
    await goodbye(3000)
}

const messages = [
    { message: "Hello, world!", delay: 2000 },
    { message: "How are you?", delay: 1000 },
    { message: "Goodbye!", delay: 3000 }
];

delayedMultiGreeting(messages);
// Logs "Hello, world!" after 2 seconds, "How are you?" after 3 seconds, "Goodbye!" after 6 seconds

