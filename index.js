const submitButton = document.getElementById("submit");
const todoList = document.getElementById("todoList");

let idx = 0;

const addItemToList = (e) => {
  console.log(e);
  e.preventDefault();

  // get input value
  let itemToAdd = document.getElementById("addItem").value;
  //const todoList = document.getElementById("todoList");

  // add task to local storage
  if(window.localStorage) {
    localStorage.setItem("list-Item", itemToAdd);
	  const cat = localStorage.getItem("list-Item");
	  console.log(cat);
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
	  itemContainer.remove();

  });

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

  idx++;
  completedTasks();

  document.getElementById("addItem").value = '';


	completedTasks();

	moveItem();

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
      if (completeCheckBox.checked == true) {
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
	//console.log(taskToDelete);

	// get completed task container
	const completedTasksList = document.querySelector("#complete");

	for( i = 0; i < taskToDelete.length; i++){
		//get checkbox for item clicked
		const completedCheck = taskToDelete[i].childNodes[0];
		//console.log(completedCheck);
		// get delete button
		const completeddeleteBtn = taskToDelete[i].childNodes[2];
		//console.log(completeddeleteBtn);
		// get checkbox
		const completedLabel = taskToDelete[i].childNodes[1];
		//console.log(completedLabel);
		// get list item
		const completedListIt = taskToDelete[i];
		//console.log(completedListIt);

		// add click event listener to delete button
		completeddeleteBtn.addEventListener("click",(e)=>{
			e.preventDefault();
			// check if checkbox checked
			if(completedCheck.checked){
				//console.log(e)
				console.log(completedListIt);
				// create new list element
        const completedHeader = document.querySelector("H2");
        completedHeader.classList.remove('hidden');
				const completedListItem = document.createElement("LI");
				completedListItem.setAttribute("class", `list-item`);
				// add completed check box
				completedListItem.appendChild(completedCheck);
				// add label (strikethrough not showing)
				completedListItem.appendChild(completedLabel);
				// add completed list item to completed section
				completedTasksList.append(completedListItem);
			}
		});
	}
};

submitButton.addEventListener("click", addItemToList);


