test("list item created with text from text field added as list item", () => {
	const itemToAdd = document.getElementById("addItem");
	//test with a value
	itemToAdd.value = "Go to the shops for some milk!"; // step 2
	const submitButton = document.querySelector("input[type='submit']");
	// submit form
	submitButton.click(); // step 3
	submitButton.click(); // step 3
	submitButton.click(); // step 3
	submitButton.click(); // step 3

	//get UL element
	const todoList = document.getElementById("todoList");

	//get all existing LI elements.
	let children = document.getElementsByTagName("LI");

	// loop over collection with any existing LI elements.
	for (let i = 0; i < children.length; i++) {
		//check if UL contains an LI element is true.
		let listItem = todoList.contains(children[i]);

		// get any text submitted to label.
		let listItemContent = children[i].firstChild.textContent;

		// test whether LI element has been created is true
			equal(listItem, true, "LI element created"); // step 4

		// test whether text field has not been left blank.
			equal(listItemContent, itemToAdd.value, "text inserted"); // step 5

	}
});

test("list item marked as completed and ready for deletion", () => {
	// return html collection
	const completeCheck = document.querySelector("#todoList").children;

	//loop over collection
	for (let i = 0; i < completeCheck.length; i++) {

		// find checkbox and add event listener
		completeCheck[i].childNodes[1].addEventListener("change", function (e) {

			//target selected checkbox using event object target property
				equal(e.target.checked, true, "checkbox checked"); // step 4

		}); // step 3
	}
});

test("list item has or has not been deleted", () => {

	// return html collection
	const completeDeleteItem = document.querySelector("#todoList").children;

	// get collection length before deletion
	const currlength = completeDeleteItem.length;

	for ( i =0; i < completeDeleteItem.length; i++){

		if(completeDeleteItem[i].childNodes[1].checked){

			// add click event to button in list item with checkbox checked
			completeDeleteItem[i].childNodes[2].click(); // step 3

		}

	}

	// collection length minus 1 to represent item deleted from list.
	equal(currlength, currlength - 1, "item has been deleted"); // step 4


});
