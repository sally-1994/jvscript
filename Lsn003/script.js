'use strict'
//1
function sumnumbers(...numbers) {
    let numberssum=0;
    for (let item of numbers) {
        numberssum=numberssum + item
        
    }
    return numberssum   
}
let resultsumnumbers= sumnumbers(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(resultsumnumbers);

//2
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
function printname(obj) {
    if (obj.isloggedin) {
        return `${obj.firstname} ${obj.lastname}`
        
    }
    return false
    
} 
let result = printname(user);
console.log(result); 

//3

function getmax(...numbers) {
    let maxitem=0;
    for (let item of numbers) {
        if (item>maxitem) {
            maxitem=item;
            
        }
        
    }
    return maxitem
    
}
let resultmaxitem= getmax(4,5,20,22,15,30,120,57,)
console.log(resultmaxitem);


//4 

function numbers1(...numbers) {
    for (const item of numbers) {
        if (item%2==0) {
            return "even"    
        }
        return " this number is odd"
        
    }
    
}
let resultfnc=numbers1(1,32,4,5,7,9,56,3)
console.log(resultfnc);

//5
let array = [1,2,3,4,5];
for(let i= array.length -1; i>=0; i--){
    console.log(array[i]);
}

//6
let getage=(birthyeare,yearnow) =>{
    let age=yearnow-birthyeare;
    let ageresult = age>18 ?"srulwlovani" : "arasrulwlovani";
    return ageresult;
}
let resultgetage1=getage(1994,2014)
console.log(resultgetage1);