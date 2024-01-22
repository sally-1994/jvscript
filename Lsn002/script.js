"use strict";

//(1)
let number=5;
while (true) {
    console.log(number);
    number++;
    if (number ==100) {
        break;
        
    }
    
}

//(2)
let array1=[1,2,4,-1,-3,8,7,0,-5,18,12]
for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    if (element>0) {
        
        console.log(element);
    }

    if (element<10) {
        console.log(element);
        
    }
   
}


//(3)
let array2=[1,2,3,4,5,6,7,8,9]
for (let index = 0; index < array2.length; index++) {
    const element = array2[index];
    if (element==5) {
        console.log("არის");
        break;
        
    }

    
}

let array=[1,2,3,4,5,6,7,8,9]
for (const element of array) {
    
    if (element==5) {
        console.log("არის");
        break;
        
    }

    
}

//(4) ვერ გავიგე სტრუქტურა როგორ დამეწერა

let array3=[1,2,3,4,5];
for (let index = 0; index < array3.length; index++) {
    const element = array3[index];
    
}
let sum=0
for (let index = 0; index <sum.length; index++) {
    console.log(sum);
    
}

//(5) როგორც წინა დავალება


//(6)
let array5=[1,2,3,7,6,9]
for (let index = 0; index < array5.length; index++) {
    const element = array5[index];
    if (element<7) {
        console.log(element);
        continue;
    }
    if (element>7){ 
            console.log(element);
            continue;
        }

}



//(7)
let user={
    firstname: "giorgi",
    lastname:"smith",
    age:25,
    studentstatus:"active"
}

     console.log(user.studentstatus);




//(8)
let user2={
        username:"anna",
        userage:20,
        studentstatus:"active"
    }
        if (userage <18 && studentstatus=="active" ) {
            console.log("hello user");
        
        if (username=="levani") {
            console.log("hallo levani")
            
        }
        if (studentstatus=="active" || userage<25) {
            console.log("hallo anna");
            
        }

        else {console.log("error");
            
        }
}
//(9)
let array6=[2,3,5,10,25,24,11,100,6,7,10]
       for (const element of array6) {
        
       

         if (element %2 ==0) {
                console.log(element);
                
            }

    for (let index = 0; index < array6.length; index++) {
        const element = array6[index];
        if(element % 2 ==0) {
            console.log(element);
            
        }
        
    }
 }
//10
let users=[
    {username:"giorgi",status: false},
    {username: "levani", status: false},
    {username:"anna", status: true}

]
for (const username of users) {
    console.log(username);
    for (const status in users) {
        if (users.status===true) {
           console.log(status);
           
            
            
        }
    }
} 
//11
let array7 = [32, 14, 10, "hello", null, "40", 50];
for (const element of array7) {
    if (element % 5 === 0){
        console.log(element);
    }
    
} 

//12
let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];
for (let index = 0; index < array8.length; index++) {
    const element = array8[index];
    if (element>0) {
        console.log(element);
        
    }
    
}

for (const element of array8) {
    if (element>0) {
        console.log(element);
        
    }
    
}

        

  

            
        
     







    



