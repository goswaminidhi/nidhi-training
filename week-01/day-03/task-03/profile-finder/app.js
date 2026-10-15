const searchBox = document.querySelector("#searchBox");
const button = document.querySelector('#button');
const suggestion = document.querySelector('#suggestion');
const errormessage = document.querySelector('#errormessage');

let list = JSON.parse(localStorage.getItem("username")) || [];

function showHistory(){
    suggestion.innerHTML = '';

    list.forEach(function(name){
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = name;
        a.href = `profile.html?user=${encodeURIComponent(name)}`;
        li.append(a);
        suggestion.append(li);

    });

    
}


showHistory();


button.addEventListener('click',async function(){
    let nameEntered = searchBox.value.trim();   

    if(button.click){
        button.disable = true;
    }
    if(nameEntered === ''){
        errormessage.textContent = 'Please Enter a username';
        return;
    }
   
    try{

        errormessage.textContent = 'Checking user';

        const response = await fetch(`https://api.github.com/users/${nameEntered}`);

        if(!response.ok){
            errormessage.textContent = 'User Not Found';
            return;
        }
       

        //Filterning the username
        list = list.filter(name => name !== nameEntered);
        //Adding the newest username first
        list.unshift(nameEntered);
        //storing 5 username 
        list = list.slice(0,5);
        

        localStorage.setItem("username",JSON.stringify(list));

        showHistory();

        errormessage.textContent = '';
     
        window.location.href = `profile.html?user=${encodeURIComponent(nameEntered)}`;
        
        }catch(error){

    }
   
})








