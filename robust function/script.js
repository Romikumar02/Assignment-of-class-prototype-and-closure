// Function to get the name and age of a person

function getperson(name,age){
    try{
const details ={
    Name: name,
    Age: age

}
if(isNaN(age) ||age===undefined|| typeof name!=='string'){
    throw new Error()
}
return details

} catch(error){
return "invalid parameter"
}
}


console.log(getperson("Romi",23));