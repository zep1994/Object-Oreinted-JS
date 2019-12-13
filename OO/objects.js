//Object
//Class 
//Encapsulation
//Inheritence

//Object contains properties and methods
//Object is an instance of a class

//A method is property of an object whose value is a function

//Use object literall to create Object
// let person = {
//     fistname: "Thomas",
//     lastname: "Matlock",

//     //methog
//     getFuntion : function() {
//         return (`${person.fistname} ${person.lastname}`)
//     },

//     //Object within an object  
//     phone_number : {
//         mobile: 6018128079
//     }
// }


// console.log(person.phone_number.mobile)
// console.log(person.getFuntion())

//USING AN OBJECT CONTSTRUCTOR
// function person(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
// }

// //creating a new instance of that object
// let person1 = new person('Tommy', 'John')
// let person2 = new person('Thomas', 'Matlock')

// console.log(person1.firstName)
// console.log(`${person2.firstName} ${person2.lastName}`)

//Use Object.create() 
const coder = {
    isStudying: false,
    printIntroduction : function() {
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`)
    }
}


const me = Object.create(coder) 

me.name = "Tom"
me.isStudying = "True"

me.printIntroduction()