'use strict'

const postWraper = document.getElementById('postblock');
const Owerlay =document.getElementById('overlay');
const postcontent = document.getElementById('content');
const close = document.getElementById('close');



function ajax(url,callback) {
    fetch(url, {
        method: "GET"
    })
    .then((response)=>{
        if(response.status !==200){
            throw "error";
        }
        return response.json(); 

    })
    .then((responsData)=>{
        callback(responsData);

    })
    .catch((error)=>console.log(error))

    
}

ajax('https://jsonplaceholder.typicode.com/posts', function (data) {
    data.forEach(element => {
        //console.log(element);
        createPost(element);
        
        
    });
    
})

function createPost(item) {
    console.log(item);
    const divcontainer = document.createElement('div');
    divcontainer.classList.add('post');
    divcontainer.setAttribute("post-id",item.id);
    
    const posth1=document.createElement('h1');
    posth1.innerText = item.id;
    const posth2 = document.createElement('h2');
    posth2.innerText = item.title;
    const dltbtn = document.createElement('button');
    dltbtn.setAttribute("post-id",item.id);

    divcontainer.appendChild(posth1);
    divcontainer.appendChild(posth2);
    divcontainer.appendChild(dltbtn);


    
}
    
    
