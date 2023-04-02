// Function to convert string in a number
function converttonumber(str){
try{
    const num = Number(str);
    if(isNaN(num)){
        throw new Error();
    }
    return num;
}
catch(error){
    return 'invalid number';
}
}
 console.log(converttonumber("two"));