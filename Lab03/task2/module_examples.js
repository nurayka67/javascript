// 1. Basic Module Pattern
const UserModule = (function(){
    let users = []
    return {
        addUser: (name) => users.push({ id: users.length + 1, name}),
        getUsers: () => [...users]
    };
})();

// 2.Revealing Module Pattern
const Calculator = (function(){
    let total = 0;
    const add = (x) => total += x;
    const getTotal = () => total;
    return {add, getTotal};
})();

// 3. ES6 Class Module
class Cart {
    #items = [];
    addItem(item) {this.#items.push(item);}
    getItems() {return [...this.#items]; }
}

console.log('=== Module Pattern Examples ===');
UserModule.addUser('John');
console.log('Users:', UserModule.getUsers());

Calculator.add(10);
Calculator.add(5);
console.log('Calculator total:', Calculator.getTotal());

const cart = new Cart();
cart.addItem('Book');
console.log('Cart items:', cart.getItems());