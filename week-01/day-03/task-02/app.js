const button = document.querySelector('#button');
const inputItem = document.querySelector('#addTask')

button.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        const itmes = inputItem.value;
        const task = document.createElement("li");
        task.textContent = itmes;

        const list = document.createElement("li");
        list.append(itmes);
    
        inputItem.value = "";
    }
})

button.addEventListener("button" , function(event){
    event.preventDefault();
    const itmes = inputItem.value;
    const task = document.createElement("li");
    task.textContent = itmes;
    const list = document.createElement("li");
    list.append(itmes);    
    inputItem.value = "";
})