const form = document.querySelector('#todo');
const inputItem = document.querySelector('#addTask')
const list = document.querySelector("#itemList");
const count = document.querySelector('#count')

function updateCount(){
    const total = list.querySelectorAll('li').length;
    const checked = list.querySelectorAll('input[type = "checkbox"]:not(:checked)').length;

    count.textContent = `${checked} of ${total} left`;

}



form.addEventListener("submit",function(event){
    event.preventDefault()
   
    const text = inputItem.value;

    if(text !== ''){
        
        const task = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener('click',function(){
            updateCount();
        })


        const del = document.createElement("button");
        del.textContent = 'Delete';

        task.textContent = text;

        task.appendChild(checkbox);
        task.appendChild(del);
        list.appendChild(task);
    
        del.addEventListener('click',function(){
            task.remove();
            updateCount();
        })


        inputItem.value = '';
        updateCount();

        localStorage.setItem("items",list);
    }
})
