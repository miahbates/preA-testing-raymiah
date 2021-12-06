const submitButton = document.getElementById("submit");
const todoList = document.getElementById("todoList");

// id to append to checkbox id attribute and label's for attribute to link label to checkbox.
let idx = 0;

const addItemToList = (e) => {

  e.preventDefault();
 	// test value
  let itemToAdd = document.getElementById("addItem").value;

 	// LI element
 	const itemContainer = document.createElement("LI");
 	itemContainer.setAttribute("class", `list-item`);

	// label
 	const itemLabel = document.createElement("LABEL");
	itemLabel.setAttribute("title", itemToAdd);

 	// checkbox
 	const checkBox = document.createElement("INPUT");

 	// delete button
 	const deleteButton = document.createElement("BUTTON");
 	deleteButton.type = "submit";
 	deleteButton.setAttribute("class", "deleteButton");

	const deleteSpan = document.createElement("span");
	deleteSpan.classList.add("far", "fa-trash-alt");
	deleteButton.appendChild(deleteSpan);

	checkBox.addEventListener("change", event => {
	 if (checkBox.checked) {
		 itemContainer.classList.add('completed');
	 } else if (!checkBox.checked) {
		itemContainer.classList.remove('completed');
	 }
	
	});

	deleteButton.addEventListener("click", event => {
		itemContainer.remove();
	});

 	// label
 	// id number appended to for attribute value of label so that it matches id value of checkbox
 	itemLabel.setAttribute("for", `listitem-${idx}`);

 	// add input text to label
 	itemLabel.innerHTML = itemToAdd;
 
 	// set input type to checkbox
 	checkBox.type = "checkbox";

 	//id number appended to id value of checkbox so that it matches for attribute value in label
 	checkBox.setAttribute("id", `listitem-${idx}`);

 	// give checkbox a class for later retrieval
 	checkBox.setAttribute("class", "list_item");

 	itemContainer.appendChild(checkBox);
 	itemContainer.appendChild(itemLabel);
 	itemContainer.appendChild(deleteButton);
 	todoList.appendChild(itemContainer);

 	// increment id for every list item created
 	idx++;

 	// set searchbar back to empty
  document.getElementById("addItem").value = "";

 	// invoke completed task function
 	completedTasks();
};

const completedTasks = () => {
	// get all list items.
	let completeTask = todoList.children;

	// check there are any items in the list
	if (completeTask.length === 0) {
		// do nothing or something
		console.log("no items");
	}

	// if there are items in the list loop through items
	for (let i = 0; i < completeTask.length; i++) {

		// get label for item clicked
		let completeLabel = completeTask[i].childNodes[0];

		//get checkbox for item clicked
		let completeCheckBox = completeTask[i].childNodes[1];

		// if label clicked
		completeLabel.addEventListener("click", function (e) {
			// do something
			console.log("index : label clicked");
		});

		// check whether change event has been triggered for checkbox
		completeCheckBox.addEventListener("change", (e) => {
			//if checkbox checked
			if (completeCheckBox.checked == true) {
				// do something
				console.log("index : item checked as completed");
				// grab section
			} else {
				// do nothing
				console.log("index : item not checked as completed");
			}
		});
	}
};

const deleteTasks = () => {};

submitButton.addEventListener("click", addItemToList);

// Miah's old code

// // grab buttons
// const completeButton = document.querySelector("#complete");
// const deleteButton = document.querySelector("#delete");
// // console.log(checkbox);

// // grab section
// const completedSection = document.querySelector("#completed");

// completeButton.addEventListener("click", event => {
//   // get all heckboxes in todolist section
//   const checkbox = document.querySelectorAll('#todoList input[type="checkbox"]');
//   // console.log(checkbox);
//   // loop over to find checked checkbox
//   for (let i = 0; i < checkbox.length; i++) {
//     // console.log(i);
//     if (checkbox[i].checked) {
//       // target li which have data value = to checkbox ticked
//       const listItem = document.querySelector(`li[data-value=${checkbox[i].value}]`);
//       // append to new section
//       completedSection.appendChild(listItem);
//     }
//   }
// });

// deleteButton.addEventListener("click", event => {
//   const checkbox = document.querySelectorAll('#completed input[type="checkbox"]');
//   // console.log(checkbox);
//   for (let i = 0; i < checkbox.length; i++) {
//     if (checkbox[i].checked) {
//       const listItem = document.querySelector(`li[data-value=${checkbox[i].value}]`);
//       listItem.remove();
//     }
//   }
// });
