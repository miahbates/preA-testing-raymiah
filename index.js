const submitButton = document.getElementById("submit");
const todoList = document.getElementById("todoList");

let idx = 0;

const addItemToList = (e) => {
  //console.log(e);
  e.preventDefault();

  // get input value
  let itemToAdd = document.getElementById("addItem").value;
  //const todoList = document.getElementById("todoList");

  // add task to local storage
  if(window.localStorage) {
    localStorage.setItem("list-Item", itemToAdd);
	  const cat = localStorage.getItem("list-Item");
	  //console.log(cat);
  }

  // create li, label and checkbox
  const itemContainer = document.createElement("LI");
  itemContainer.setAttribute("class", `list-item`);
  const itemLabel = document.createElement("LABEL");
  const checkBox = document.createElement("INPUT");
	checkBox.setAttribute("aria-label", `check the checkbox to mark this task as completed`);

  // label - give label matching title of item to add
  itemLabel.setAttribute("title", itemToAdd);

  // grab error message and hide it
  const errorMessage = document.querySelector(".error");
  errorMessage.classList.add('hidden');

  // display message only if input input is empty string
  if (itemToAdd === '') {
    errorMessage.classList.remove('hidden');
    return;
  }

 	// delete button
 	const deleteButton = document.createElement("BUTTON");
 	deleteButton.type = "button";
 	deleteButton.setAttribute("class", "deleteButton");
  deleteButton.setAttribute("aria-label", "delete task");

  // add logo to delete button using span
  const deleteSpan = document.createElement("span");
  deleteSpan.classList.add("far", "fa-trash-alt");
  deleteButton.appendChild(deleteSpan);

  // label
  itemLabel.setAttribute("for", `listitem-${idx}`);
  itemLabel.innerHTML = itemToAdd;

 	itemContainer.appendChild(checkBox);
 	itemContainer.appendChild(itemLabel);
 	itemContainer.appendChild(deleteButton);
 	todoList.appendChild(itemContainer);

  checkBox.type = "checkbox";
  checkBox.setAttribute("id", `listitem-${idx}`);
  checkBox.setAttribute("class", "list_item");

	// see if checkbox is checked
  checkBox.addEventListener("change", event => {
		if (checkBox.checked) {
			itemContainer.classList.add('completed');
		} else if (!checkBox.checked) {
			 itemContainer.classList.remove('completed');
		}
	 });

	 // click delete button to remove item container
  deleteButton.addEventListener("click", event => {
		//move item to completed section
		moveItem();
	  itemContainer.remove();
  });

  idx++;
  document.getElementById("addItem").value = '';

	completedTasks();



};

const completedTasks = () => {
  // complete tasks
  let completeTask = todoList.children;

  if (completeTask.length === 0) {
    console.log("no items");
  }

  for (let i = 0; i < completeTask.length; i++) {
    // get label
    let completeLabel = completeTask[i].childNodes[1];

    //get checkbox
    let completeCheckBox = completeTask[i].childNodes[0];

    completeLabel.addEventListener("click", function (e) {
      console.log("label clicked");
    });

    completeCheckBox.addEventListener("change", (e) => {
      if (completeCheckBox.checked) {
        console.log("item checked as completed");
      } else {
        console.log("item not checked as completed");
      }
    });
  }


};

const moveItem = () => {

	// get all list items.
	let taskToDelete = document.querySelector("#todoList").children;

	// get completed task container
	const completedTasksList = document.querySelector("#complete");

	// filter out list item with check box checked and return item
	const completedListIt = Array.from(taskToDelete).filter(element => {

		return element.childNodes[0].checked ? element : false;

	});

	// conditional to prevent uncaught reference error as completedListIt not created yet.
	if(completedListIt.length > 0){

	// get checkbox
	const completedCheck = completedListIt[0].childNodes[0];

	// get label
	const completedLabel = completedListIt[0].childNodes[1];

	// create new list element
	const completedHeader = document.querySelector("H2");
	completedHeader.classList.remove('hidden');
	const completedListItem = document.createElement("LI");
	completedListItem.setAttribute("class", `list-item`);
	// // add completed check box
	completedListItem.appendChild(completedCheck);
	// // add label (strikethrough not showing)
	completedListItem.appendChild(completedLabel);
	// add completed list item to completed section
	completedTasksList.append(completedListItem);
}else{

	return console.error("completed item not created yet");

}

};



submitButton.addEventListener("click", addItemToList);


