//DOM Select the elements
function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  //Add an Event Listener
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    let deleteBtn = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    deleteBtn.textContent = 'Delete';
    newLi.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function(event){
      if (checkbox.type === 'checkbox' && checkbox.checked) {
        toDoList.removeChild(newLi);
      }

    });

  });

}


//event handler
window.onload = function() {
   alert("The window has loaded!");
   onReady();
 };
