'use strict'


const divPostwraper = document.getElementById('postblock');
const postoverlay = document.getElementById('overlay');
const contentblock = document.getElementById('content');
const overlayclose = document.getElementById('close');

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
    divcontainer.appendChild(h1Post);
    divcontainer.appendChild(h2post);

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
    
})

