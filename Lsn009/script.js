'use strict'


const divPostwraper = document.getElementById('postblock');
const postoverlay = document.getElementById('overlay');
const contentblock = document.getElementById('content');
const overlayclose = document.getElementById('close');

function ajax(url, callback) {    
    const request = new XMLHttpRequest();
    request.open('GET','url');
   request.addEventListener('load', function () {
    //console.log(this.responseText);
        const textData = this.responseText;
        const jsData = JSON.parse(this.responseText);
        //console.log(jsData);

        callback(jsData);

       jsData.forEach(element => {
       //  console.log(element);
         createPost(element);
       });
    })
    request.send();
}
    

ajax('https://jsonplaceholder.typicode.com/posts'){ 
    data.forEach(element => {
        // console.log(element);
       createPost(element);
     });
    
};


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


        
    })

    divPostwraper.appendChild(divcontainer);

}


overlayclose.addEventListener('click', function () {
    postoverlay.classList.remove("activoverlay");
    
})

