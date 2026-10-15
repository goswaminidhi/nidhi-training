const form = document.querySelector('#todo');
const inputItem = document.querySelector('#addTask')
const list = document.querySelector("#itemList");
const count = document.querySelector('#count')

let items = JSON.parse(localStorage.getItem("items")) || [];

function updateCount(){
    const total = list.querySelectorAll('li').length;
    const checked = list.querySelectorAll('input[type = "checkbox"]:not(:checked)').length;

    count.textContent = `${checked} of ${total} left`;

}

function saveItems(){
    localStorage.setItem("items",JSON.stringify(items));
}


form.addEventListener("submit",function(event){
    event.preventDefault()
   
    const text = inputItem.value;

    if(text !== ''){

        const item = {
        text: text,
        completed: false
    };

    items.push(item);
    saveItems();

    const task = document.createElement("li");

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.addEventListener('click',function(){
        item.completed = checkbox.checked;
        saveItems();
        updateCount();
    })


    const del = document.createElement("button");
    del.textContent = 'Delete';

    task.textContent = text;

    task.appendChild(checkbox);
    task.appendChild(document.createTextNode(text));
    task.appendChild(del);
    list.appendChild(task);
    
    del.addEventListener('click',function(){
        task.remove();
         items = items.filter(function(currentItem) {
            return currentItem !== item;
        });

        saveItems();
        updateCount();
    })


    inputItem.value = '';
    updateCount(); 


    }
})
