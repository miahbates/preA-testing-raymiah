test("input text added to list container as list item", () => {

  const itemToAdd = document.getElementById("addItem");
 	//test value
 	itemToAdd.value = ""; // step 2
 	const submitButton = document.querySelector("#submit");
 	// submit form
 	submitButton.click(); // step 3

 	//get UL element
 
 	//get all lI elementsm if they exist
 	let children = document.getElementsByTagName("LI");

 	// loop over collection with existing LI elements.
 	for (let i = 0; i < children.length; i++) {

	  //check if UL contains an LI element. If so result will be true.
 		let listItem = todoList.contains(children[i]);

 		// get any text submitted to label.
 		let listItemContent = children[i].firstChild.textContent;

 		// test whether LI element has been created
 		if(listItem){
			 equal(listItem, true, "LI element created"); // step 4
   		} else{
 				notEqual(listItem, false, "LI not element created");
 		}

 		// test whether text has been submitted or blank field.
 		if(listItemContent !== "" ){
 			equal(listItemContent, itemToAdd.value, "text inserted"); // step 5
 		} else{
      notEqual(listItemContent, itemToAdd.value, "text not inserted"); // step 5
 		}
  }
});

test("list item marked as completed and ready for deletion", () => {
	 // return html collection
 	const completeCheck = document.querySelector("#todoList").children;

  //loop over collection
 	for (let i = 0; i < completeCheck.length; i++) {
  	//console.log(completeCheck[i].childNodes[1]);

    // find checkbox and add event listener
    completeCheck[i].childNodes[1].addEventListener("change", function (e) {
  	//target selected checkbox using event object target property
 	  if (e.target.checked == true) {
		  equal(e.target.checked, true, "checkbox checked"); // step 4
      } else {
	 		  notEqual(e.target.checked, false, "checkbox not checked");
		  }
    }); // step 3
 	}
});

test("check if list item has been deleted", () => {
  // arrange - create varibles/input and pass in what you think you are going to get
  // delete button
  const deleteButton = document.querySelector("button[type='submit']");
  // console.log(deleteButton);
  // find all child elements in to-do-list
  const listItems = document.querySelector("#todoList").children;

  // store length of to-do-list in current length
  const currentLength = listItems.length;

  // act 
  // action delete button click
  deleteButton.click(); 
  // when click is performed 1 item will be removed from the list, assign this to new length to compare
  const expected = currentLength - 1;
  const result = document.querySelector("#todoList").children.length;

  // assert - call helper function
  equal(result, expected, "item has been deleted from list");
});
