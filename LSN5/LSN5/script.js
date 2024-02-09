'use strict'

//1 ვერ გავაკეთე
//2
let newelement = document.createElement('div');

document.getElementById("wraper").appendChild(newelement);

let newimg = document.createElement("img");
newimg.setAttribute("scr","https://www.pexels.com/photo/green-tree-268533/");
newimg = setAttribute("alt","img");

let newtitle = document.createElement("h2");
newtitle.classList.add("title");
newtitle.textContent="image title";
newtitle.style.color="red";
newtitle.style.fontSize = "30px";

document.getElementById("wraper") .appendChild(newelement);

//3
let newdiv = document.querySelectorAll(".text");
newdiv.forEach(function (item) {
    let newpar= document.createElement("p");
    newpar.textContent="hello";
    item.appendChild(newpar)

    
})

//4
let array6 = [-1, -2, -3, 4];
let condition= (number) => number <0;
let result= array6.some(condition);
console.log(result);

//5 & //6 ვერ გავაკეთე და იქნებ ლექციზე მოხერხდეს