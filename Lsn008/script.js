'use strict'


const div = document.getElementById('api-users');
function getUsers() {
    
    const request = new XMLHttpRequest();

    request.open('GET','https://reqres.in/api/unknown ');
    request.addEventListener('load',function () {
        
        const mosuliInfo = this.responseText;
        const mosuliInfojs = JSON.parse(mosuliInfo);
        console.log(mosuliInfojs);
        const ulElement = document.createElement('ul');
    
        mosuliInfojs.data.forEach(element => {
           
           const li = document.createElement('li');
           li.textContent = `${element.name} ${element.color}`;
           ulElement.appendChild(li);
    
            
        });
    
        div.appendChild(ulElement);
    })
    
    request.addEventListener('error', function () {
        const pdesc= document.createElement('p');
        pdesc.textContent = "server error";
        div.appendChild(pdesc);
        
    });
    
    request.send();
}
    getUsers();


const div2 = document.getElementById('api-user');
const ullist= document.getElementById('ul-list');
const btnloadprev = document.getElementById('loadprev');
const btnload = document.getElementById('More');
const fragment = document.createDocumentFragment();
let currentPage = 1;
let totalPage;


function getusersinfo(page) {
     
    fetch('https://reqres.in/api/users?page=' + page, {
    method: 'GET',
    })
    .then(function (response) {
    console.log(response);
    if(response.status !== 200) {   // if (!response.ok)
        throw 'error';
    } 
    return response.json();  
    })

    .then(function (responseData) {
    console.log(responseData); 


    responseData.data.forEach(element => {
       
       const li = document.createElement('li');
       li.textContent = `${element.first_name} ${element.avatar}`;
       fragment.appendChild(li);

        
    });
    ullist.innerHTML= "";
    ullist.appendChild(fragment)

    totalPage=responseData.total_pages;
    if (currentPage == totalPage){
        btnload.disabled = true;
    } else if(currentPage < totalPage){
        btnload.disabled = false;
    }
    if (currentPage===1){
        btnloadprev.disabled = true;
    } else if(currentPage >1){
        btnloadprev.disabled = false;
    }
      
    })

    .catch(function (error) {
    console.log(error);   
    })
}
btnloadprev.addEventListener('click',function () {
        document.getElementById("loadprev")
    if (currentPage===1){
        return;
    }
    currentPage--;
    getusersinfo(currentPage);
    
})
btnload.addEventListener('click',function () {
    document.getElementById('More') 
    if (currentPage ==2){
        return;
    }
    currentPage +=1;
    //currentPage ++;
    getusersinfo(currentPage);
    
})
getusersinfo(currentPage);