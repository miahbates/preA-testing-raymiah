const submitButton = document.getElementById("submit");


submitButton.addEventListener("click", function (e){
    
    e.preventDefault();
    // test value    
    let itemToAdd = document.getElementById("addItem").value; 
       
    const todoList = document.getElementById("todoList");      
         
    const itemContainer = document.createElement("LI");
    itemContainer.innerHTML = itemToAdd;
    todoList.appendChild(itemContainer); 
});

