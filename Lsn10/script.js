'use strict'

const postwraper = document.getElementById('postblock');
const overlay = document.getElementById('overlay');
const postcontent = document.getElementById('content');
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
    data.forEach(element => {
       //console.log(element);
       post(element) 
    });
    
})


function post(item) {
    const divcontainer= document.createElement('div');
    divcontainer.classList.add('post');
    divcontainer.setAttribute('data-id', item.id);

    const posth1 = document.createElement('h1');
    posth1.innerText = item.id;
    const posth2 = document.createElement('h2');
    posth2.innerText= item.title;
    const deletebtn = document.createElement('button');
    deletebtn.textContent = "delete post";

    divcontainer.appendChild(posth1);
    divcontainer.appendChild(posth2);
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

    divcontainer.addEventListener('click', function () {
        console.log(this);
        const postid = this.getAttribute('data-id');
        overlay.classList.add('activoverlay');
        const newUrlpost = `https://jsonplaceholder.typicode.com/posts/${postid}`;
        ajax(newUrlpost, function (elementNew) {
            console.log(elementNew);
            overlaiInfo(elementNew);
        });
    })

    postwraper.appendChild(divcontainer);
    
}

function overlaiInfo(item) {
    const pdesc = document.createElement('p');
    pdesc.innerText = item.body;

    content.appendChild(pdesc);
    
}

overlayclose.addEventListener('click', function () {
    overlay.classList.remove("activoverlay");
    content.innerText = "";
    
})

btnadd.addEventListener('click',function () {
    addoverlay.classList.add('activadd');
    document.getElementById('titlepost').value ="";
    
})

form.addEventListener('submit',function (e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
    let formDatasend = {
        title:e.target[0].value
        
    }
   console.log(formDatasend);
   
   
   fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(formDatasend),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((sendedobj) => {
      post(sendedobj)
      addoverlay.classList.remove("activeadd");
      console.log(sendedobj);
    });
});


const imageContainer = document.querySelector(".imag");
let currentImage;

//promisifying
let wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImgElement = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const imgElement = document.createElement("img");
    imgElement.src = imagePath;

    imgElement.addEventListener("load", function () {
      imageContainer.appendChild(imgElement);
      resolve(imgElement);
    });

    imgElement.addEventListener("error", function () {
      reject(new Error(" not found"));
    });
  });
};

createImgElement("images/img1.webp")
  .then((image) => {
    currentImage = image;
    console.log("loaded");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImgElement("images/img2.jpg");
  })
  .then((image) => {
    currentImage = image;
    console.log("loaded");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
  })
  .catch((e) => console.log(e));



