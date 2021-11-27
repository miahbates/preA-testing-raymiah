test("input text added to list container as list item", () => {
    
    const itemToAdd = document.getElementById("addItem");
    //test value
    itemToAdd.value = ""; // step 2
    const submitButton = document.querySelector("input[type='submit']");
    // submit form
    submitButton.click(); // step 3   
    
    //get UL element
    const todoList = document.getElementById("todoList");
    
    //get all lI elementsm if they exist 
    let children = document.getElementsByTagName("LI");
    
    // loop over collection with existing LI elements.
    for (let i = 0; i < children.length; i++) {

        //check if UL contains an LI element. If so result will be true.
        let listItem = todoList.contains(children[i]);
        
        // get any text submitted.
        let listItemContent = children[i].textContent;
        
        // test whether LI element has been created
        if(listItem){

            equal(listItem, true, "LI element created"); // step 4            
        }else{
            
            notEqual(listItem, false, "LI not element created");
        }

        // test whether text has been submitted or blank field.
        if(listItemContent !== "" ){
            equal(listItemContent, itemToAdd.value, "text inserted"); // step 5
        }else{
            notEqual(listItemContent, itemToAdd.value, "text not inserted"); // step 5
        }      
    }  

  });