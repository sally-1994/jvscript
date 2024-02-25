'use strict'


const divPostwraper = document.getElementById('postblock');
const postoverlay = document.getElementById('overlay');
const contentblock = document.getElementById('content');
const overlayclose = document.getElementById('close');
const btnadd =document.getElementById('add');
const addoverlay = document.getElementById('addoverlay');
const form = document.getElementById('form-addoverlay');

function ajax(url,callback) {    
    fetch(url, {
        method: "GET",
    })
    .then((response)=>{
        if (response.status !==200) {
         throw "error" ;         
        } 
        return response.json();
    })
    .then((responseData)=>{
        callback(responseData);
    })
    .catch((error)=> console.log(error))
}
    

ajax('https://jsonplaceholder.typicode.com/posts',function (data) {
    //console.log(data);
    data.forEach(element => {
        //  console.log(element);
          createPost(element);
        });
    
})


function createPost(item){
    const divcontainer = document.createElement('div');
    divcontainer.classList.add('post');
    divcontainer.setAttribute('data-id', item.id)
    const h1Post = document.createElement('h1');
    h1Post.innerText = item.id;

    const h2post = document.createElement('h2');
    h2post.innerText = item.title;
   
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete Post';
    deletebtn.setAttribute('data-id', item.id);


    divcontainer.appendChild(h1Post);
    divcontainer.appendChild(h2post);
    divcontainer.appendChild(deletebtn);

    deletebtn.addEventListener('click' ,function (e) {
        e.stopPropagation();
        console.log(e.target);
        const deleteId = e.target.getAttribute('data-id');
        console.log(deleteId);
        const deleteUrl = `https://jsonplaceholder.typicode.com/posts/${deleteId}`
        console.log(deleteUrl);

        fetch(deleteUrl,{
            method: "DELETE"
        })
        .then((response)=>response.json())
        .then(function(deleteData){
            console.log(deleteData);
            divcontainer.remove();
        });

    })


    divcontainer.addEventListener('click',function () {
        console.log(this);
        const postid = this.getAttribute('data-id');
        console.log(postid);
        postoverlay.classList.add("activoverlay"); 
        const newUrlpost = `https://jsonplaceholder.typicode.com/posts/${postid}`;
        ajax(newUrlpost, function (elementNew) {
            console.log(elementNew);
            overlaiInfo(elementNew);
        });  
    });

    divPostwraper.appendChild(divcontainer);

}

function overlaiInfo(item) {
    const pdesc = document.createElement('p');
    pdesc.innerText = item.body;

    contentblock.appendChild(pdesc);
    
}
overlayclose.addEventListener('click', function () {
    postoverlay.classList.remove("activoverlay");
    contentblock.innerText = "";
    
})


btnadd.addEventListener('click',function () {
    addoverlay.classList.add('activadd');
    
})

