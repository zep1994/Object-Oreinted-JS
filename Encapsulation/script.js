//The process of wrapping proooerty and function within a single unit

//excapsulation 
class person{ 
    constructor(name,id){ 
        this.name = name; 
        this.id = id; 
    } 
    add_Address(add){ 
        this.add = add; 
    } 
    getDetails(){ 
        console.log(`Name is ${this.name},Address is: ${this.add}`); 
    } 
} 
let person1 = new person("Tom", 12)

console.log(person1.add_Address('Delhi'))
console.log(person1.getDetails())