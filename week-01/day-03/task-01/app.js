const button1 = document.getElementById('myButton1');
const paragraph = document.querySelector('p');

let count = 0;

//Increasing the Count till 10
button1.addEventListener("click",function(){
    
    count++;
     
    paragraph.textContent = `Count is ${count}`;

    if(count > 0){
        paragraph.classList.remove("highlight2")
        paragraph.classList.add("highlight1")
    }

    if(count >= 10){
        button1.disabled = true;
    }
    
   
});

//Decreasing the count 
const button2 = document.getElementById('myButton2');

button2.addEventListener("click",function(){
    
    count--;
     
    paragraph.textContent = `Count is ${count}`;
    if(count < 0){
        paragraph.classList.remove("highlight1")
        paragraph.classList.add("highlight2")
    }

    if(count <= -10){
        button2.disabled = true;
    }
     
   
});

//Resting the Button

const button3 = document.getElementById('reset');

button3.addEventListener("click",function(){
    count = 0;
    paragraph.textContent = `Count is ${count}`;
    paragraph.classList.remove("highlight1")
    paragraph.classList.remove("highlight2")

});

document.addEventListener("keydown",function(event){
    if(event.key === "ArrowUp"){
        if(count < 10){
            count++;
        }
        if(count > 0){
            paragraph.classList.remove("highlight2")
            paragraph.classList.add("highlight1")
        }
    } 
    if(event.key === "ArrowDown"){
        if(count > -10){
            count--;
        }
        if(count < 0){
            paragraph.classList.remove("highlight1")
            paragraph.classList.add("highlight2")
        }
    }  
    
    if(event.key === 'r'){
        count = 0;
        paragraph.classList.remove("highlight1")
        paragraph.classList.remove("highlight2")
    }

    paragraph.textContent = `Count is ${count}`;
});

