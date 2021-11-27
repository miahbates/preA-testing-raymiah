test("input text added to list container as list item", () => {
    
    const itemToAdd = document.getElementById("addItem");
    itemToAdd.value = "test"; // step 2
    const submitButton = document.querySelector("input[type='submit']");
    submitButton.click(); // step 3   
    
    //get Ul element
    const todoList = document.getElementById("todoList");
    
    //get all existing li elements 
    let children = document.getElementsByTagName("Li");

    // loop over collection with existing LI elements.
    for (let i = 0; i < children.length; i++) {
        //check if UL contains an LI element
        if(todoList.contains(children[i])){
            // compare LI element with first LI element in collection if it exists, if both are true element has been created.
            equal(children[i], children[0], "LI element created"); // step 4            
        }

        if(children[i].textContent === itemToAdd.value){
            equal(children[i].textContent, itemToAdd.value, "text inserted"); // step 5
        }       
    }  

  });