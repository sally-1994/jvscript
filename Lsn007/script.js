'use strict'

const div = document.getElementById('api-users');
function getUsers() {
    
const request = new XMLHttpRequest();

request.open('GET','https://reqres.in/api/unknown ');
request.addEventListener('load',function () {
    //console.log(this.responseText);
    const mosuliInfo = this.responseText;
    const mosuliInfojs = JSON.parse(mosuliInfo);
    console.log(mosuliInfojs);
    const ulElement = document.createElement('ul');

    mosuliInfojs.data.forEach(element => {
       // console.log(element);
       const li = document.createElement('li');
       li.textContent = `${element.name} ${element.color}`;
       ulElement.appendChild(li);

        
    });

    div.appendChild(ulElement);
})

request.send();
}


getUsers();