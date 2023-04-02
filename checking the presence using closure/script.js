const arr = [ 2,3,4,9,4,8,7,6,0,2,3,,1,5,4,7]


function numberchecker(arr){
    return function check(number){
       return arr.includes(number)
    } 
    
}
const checknumber = numberchecker(arr)

    
    console.log(checknumber(3));
