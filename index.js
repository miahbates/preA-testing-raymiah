const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (e){
    
  e.preventDefault();
  // test value    
  let itemToAdd = document.getElementById("addItem").value; 
      
  const todoList = document.getElementById("todoList");      
        
  const itemContainer = document.createElement("LI");
  
  // add data target to be the item added on the li
  itemContainer.dataset.value = itemToAdd;
    
  // create input element
  const checkbox = document.createElement("input");

  checkbox.value = itemToAdd;

  // assign type to checkbox
  checkbox.setAttribute("type", "checkbox");
  // create span element to wrap li and checkbox inside 
  const span = document.createElement("span");
  // add input item to span
  span.innerHTML = itemToAdd;

  // append span and checkbox to Li element
  itemContainer.appendChild(checkbox);
  itemContainer.appendChild(span);
  todoList.appendChild(itemContainer); 

  // set searchbar back to empty 
  document.getElementById("addItem").value = "";
});

// grab buttons
const completeButton = document.querySelector("#complete");
const deleteButton = document.querySelector("#delete");
// console.log(checkbox);

// grab section
const completedSection = document.querySelector("#completed");

completeButton.addEventListener("click", event => {
  // get all heckboxes in todolist section
  const checkbox = document.querySelectorAll('#todoList input[type="checkbox"]');
  // console.log(checkbox);
  // loop over to find checked checkbox
  for (let i = 0; i < checkbox.length; i++) {
    // console.log(i);
    if (checkbox[i].checked) {
      // target li which have data value = to checkbox ticked
      const listItem = document.querySelector(`li[data-value=${checkbox[i].value}]`);
      // append to new section
      completedSection.appendChild(listItem);
    }
  }
});

deleteButton.addEventListener("click", event => {
  const checkbox = document.querySelectorAll('#completed input[type="checkbox"]');
  // console.log(checkbox);
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      const listItem = document.querySelector(`li[data-value=${checkbox[i].value}]`);
      listItem.remove();
    }
  }
});