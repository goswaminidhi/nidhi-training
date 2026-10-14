// const { use } = require("react");

const searchBox = document.querySelector("#searchBox");
const button = document.querySelector('#button');
const link = document.querySelector("#githubprofile");
const suggestion = document.querySelector('#suggestion');

;
let list = JSON.parse(localStorage.getItem("username")) || [];

button.addEventListener('click',function(){
    let nameEntered = searchBox.value.trim();
    // list.unshift(nameEntered);
    // list.slice(0,5);
    localStorage.setItem("username",JSON.stringify(list));


    if(nameEntered !== ""){
        window.location.href = `profile.html?user=${encodeURIComponent(nameEntered)}`;
    }
   
})




