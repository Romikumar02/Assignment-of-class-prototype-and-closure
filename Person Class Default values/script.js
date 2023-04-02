class Person{
    constructor(name='Unknown',age=0){
        this.name =name
        this.age= age
    }
    getdetails(){
        return `Name:${this.name} , Age:${this.age}`
    }
}
const person1= new Person('Romi',23)
console.log(person1.getdetails());
const person2 = new Person()
console.log(person2.getdetails());
