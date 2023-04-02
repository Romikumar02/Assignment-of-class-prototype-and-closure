class car{
   
    constructor(company,model,year){
        this.Company=company
        this.Model=model
        this.Year= year
    }
    getDescription(){
        return `This is a ${this.Year} ${this.Company} ${this.Model} car`
    }

}
const mycar = new car('mahindra','top-varient',2023)

// Result in console
console.log( mycar.getDescription());
console.log(mycar);