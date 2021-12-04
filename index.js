const submitButton = document.getElementById("submit");
const todoList = document.getElementById("todoList");

// id to add to checkbox and list item.
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

 	// checkbox
 	const checkBox = document.createElement("INPUT");

 	// delete button
 	const deleteButton = document.createElement("BUTTON");
 	deleteButton.type = "submit";
 	deleteButton.setAttribute("class", "deleteButton");
 	deleteButton.textContent = "X";

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

 	itemContainer.appendChild(itemLabel);
 	itemContainer.appendChild(checkBox);
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
 	// complete tasks
 	let completeTask = todoList.children;

 	if (completeTask.length === 0) {
 		console.log("no items");
 	}

 	for (let i = 0; i < completeTask.length; i++) {
 		// get label
 		let completeLabel = completeTask[i].childNodes[0];

 		//get checkbox
 		let completeCheckBox = completeTask[i].childNodes[1];

 		completeLabel.addEventListener("click", function (e) {
 			console.log("index : label clicked");
 		});

 		completeCheckBox.addEventListener("change", (e) => {
 			if (completeCheckBox.checked == true) {
  				console.log("index : item checked as completed");
 			} else {
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
