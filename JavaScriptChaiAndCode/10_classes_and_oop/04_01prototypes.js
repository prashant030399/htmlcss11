/*

Why Use Prototypes?

Memory Efficiency: Methods defined in the prototype are shared among all instances 
instead of being duplicated in each object.
Performance: Reduces memory usage as only one function exists in memory.
Inheritance: Allows objects to inherit methods without explicitly defining them inside the constructor.

/*


 1. Memory Efficiency
If you define a method inside a constructor function, a new copy of that method is created for each instance. This wastes memory. Instead, defining the method on the prototype ensures all instances share the same function.

❌ Without Prototype (Inefficient)
javascript
Copy code
function Person(name) {
    this.name = name;
    this.sayHello = function() {  // New function created for each object
        return `Hello, my name is ${this.name}`;
    };
}

const p1 = new Person("Alice");
const p2 = new Person("Bob");

console.log(p1.sayHello === p2.sayHello); // false (different function instances)
Each instance (p1 and p2) has its own copy of sayHello(), consuming extra memory.



✅ With Prototype (Efficient)
javascript
Copy code
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() { // Shared method
    return `Hello, my name is ${this.name}`;
};

const p1 = new Person("Alice");
const p2 = new Person("Bob");

console.log(p1.sayHello === p2.sayHello); // true (same function instance)
✅ Only one copy of sayHello() is stored in memory and shared by all instances.





🔹 2. Performance Improvement
Since the method is not duplicated, the JavaScript engine uses less memory, leading to faster execution.




🔹 3. Inheritance
Prototypes allow objects to inherit methods and properties without explicitly defining them inside the constructor.



javascript
Copy code
function Animal(type) {
    this.type = type;
}

Animal.prototype.makeSound = function() {
    return `${this.type} makes a sound!`;
};

const dog = new Animal("Dog");
console.log(dog.makeSound()); // Output: "Dog makes a sound!"
Even though makeSound() is not inside the constructor, the dog object can inherit it from the prototype.