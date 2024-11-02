

function cloningObjects(person){
    person = { name: "John", age: 30, address: "123 Main St" };

    let clone={...person}

    return clone;
}
let result=cloningObjects();

console.log(result)  //{ name: 'John', age: 30, address: '123 Main St' }

