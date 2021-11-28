const submitButton = document.getElementById("submit");


submitButton.addEventListener("click", function (e){
    
    e.preventDefault();
    // test value    
    let itemToAdd = document.getElementById("addItem").value; 
       
    const todoList = document.getElementById("todoList");      
         
    const itemContainer = document.createElement("LI");
     
    // create  input element
    const checkbox = document.createElement("input")
    // assign type to checkbox
    checkbox.setAttribute("type", "checkbox");
    // create span element to wrap li and checkbox inside 
    const span = document.createElement("span")
    // add input item to span
    span.innerHTML = itemToAdd;

    // append span and checkbox to Li element
    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(span);
    todoList.appendChild(itemContainer); 
});

