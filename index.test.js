test("input text added to list container as list item", () => {
    
    const itemToAdd = document.getElementById("addItem");
    itemToAdd.value = "test"; // step 2
    const submitButton = document.querySelector("input[type='submit']");
    submitButton.click(); // step 3   
    const todoList = document.getElementById("todoList");
    let children = document.getElementsByTagName("Li");

    for (let i = 0; i < children.length; i++) {
        if(todoList.contains(children[i])){
            equal(!children[i], false, "LI element created"); // step 4
            
        }

        if(children[i].textContent === itemToAdd.value){
            equal(children[i].textContent, itemToAdd.value, "text inserted"); // step 5
        }       
    }  

  });