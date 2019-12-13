//Classes are templates for objects
//Object are instances object Claseses
//There are no classes in JavaScript, obly the object
//Instead creat a constructor function and then reuse it using the prototype

//Define class suing es6
class Vechile {
    constructor(name, maker, model) {
        this.name = name
        this.maker = maker 
        this.model = model 
    }

    getDetails() {
        return (`The name of the bike is ${this.name}, ${this.model}`)
    }
}

let newVehicle1 = new Vechile("Acoord", "Honea", 2018)

console.log(newVehicle1.name)
console.log(newVehicle1.getDetails())