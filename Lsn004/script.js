'use strict'
//1
let array2 = [14, 150, 'css', null, 'javascript', 25];
let newarray2 = array2.map(function (item) {
    if (item==number) {
        return
    
    }  
})

//5
let fruits = ["apple","mango","avocado","kiwi"]
let newfruits = fruits.splice(2,1,'strawberry');
console.log(fruits);

//6
let number=[5, 25, 89, 120, 36]
number.push("javascript","python");
number.unshift("html","css");
number.shift();
number.pop()
console.log(number.length);

//7
let fruits1=["ფორთოხალი","ბანანი","კივი"]
console.log(fruits1.length);
fruits1.push("ვაშლი" , "ანანასი");
fruits1.unshift("საზამთრო");
console.log(fruits1.length);
fruits1.splice(2,0,"mango");
fruits1.splice(0,1);
fruits1.splice(fruits1.length-1)
console.log(fruits1.length);

//8
let array3 =[1, 2, 3, 4, 5]
array3.splice(3,0,"a","b","c");
console.log(array3);

//9
let  array5 = [12, 25, 3, 6, 8, 14, 7, 23]
let newarrray5= array5.map(function(x) {return x/3;
    
})
console.log(newarrray5);

//10
let array7 =  [15, 100, 25, 10, 36]
array7.splice(3,1);
console.log(array7);

//11
let array8 = [1, 2, 3 , 4 , 5]
array8.splice(2,1,"three");
console.log(array8);

//12(numbers ver poulobs) ! 
let array1 =["hello1", 14,24, "hello2"]
let newarray1= array1.map(function (x) {
    if (x== number) {
        console.log(x); 
        
    }
    
})
console.log(newarray1);

//13
let array4 = [1, 2, 3, 4, 5]
array4.forEach(function (number) {
    let numbersum=0;

    
    
})

//14
let languages = ['html', 'css', 'javascript', "python", 'php']

let newlanguages= languages.filter(function (element) {
    if(element.length>3){
        console.log(element);
    }
    
})

//15
let words = ['madrid', 'rome', 'milan', 'berlin']
let newWords = words.filter(function (item) {
    
    
})
