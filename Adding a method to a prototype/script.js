// define a function called student
function student(name){
    this.name=name
}
 student.prototype.printDetails = function(){

return `hello my name is ${this.name}`}

// Instaniate a Student object

const Student = new student('Mithun')
const result =Student.printDetails();
console.log(result);

