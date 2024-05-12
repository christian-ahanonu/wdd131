// define variables that selects ids and tags 
const input = document.querySelector('#favchap'); //selects favchap id
const button = document.querySelector('button'); //selects button tag
const list = document.querySelector('#list'); //selects list id


button.addEventListener('click', function() {
    if (input.value.trim() !== '') {

        const li = document.createElement('li'); //creates a list element
        const deleteButton = document.createElement('button'); //creates a delete button
        
        li.textContent = input.value; //add a text content gotten from the user to the li variable
        deleteButton.textContent = '❌'; //add a delete button icon to the deleteButton variable 
        
        list.appendChild(li); // append the li variable to the list variable 
        li.appendChild(deleteButton); // append the deleteButton variable to the li variable
        input.value = '';
    }
}); 


list.addEventListener('click', function() {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove(); //removes the li element when the delete button is clicked
    }
    // list.remove(li); // removes the list items when the delete button is clicked
    // input.focus(); // the cursor will appear or focus on the input element
});

// input.focus();


