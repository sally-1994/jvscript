'use strict'

const inputelement = document.getElementById('username');
const addbuton = document.querySelector('.btn');
const ulitems = document.querySelector('.ul-list');
const deleteall = document.getElementById('clear all');
const formElement = document.getElementById("formElement");


formElement.addEventListener("submit",function(e){
    e.preventDefault();
    const valueEnput = inputelement.value;
    const li = document.createElement("li");

    const deleteicon = document.createElement('icon');
    deleteicon.classList("fa-light fa-trash-can") 
    deleteicon.addEventListener('click',function () {
        li.remove()
        
    })

  
    li.textContent = valueEnput;
    li.appendChild(deleteicon);
    ulitems.appendChild(li);
    inputelement.value = "";
})

deleteall.addEventListener('click',function () {
    ulitems.innerHTML = "";
    
})