class Employee{
    name;
    position;
    salary;

constructor(name,position,salary){
    this.name=name
    this.position=position
    this.salary = salary
}
getsalary(){
    return `Employee ${this.name} is ${this.salary}.`
}
}
const Employee1 = new Employee('Romi','Web Developer',12000)
console.log(Employee1.getsalary());