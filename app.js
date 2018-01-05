function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;
    // create a new li
   let newLi = document.createElement('li');
   //add attribute id to newLi
   //use time stamp for id data
   // date.now()
   let timeStamp = Date.now();
   newLi.setAttribute('id',timeStamp);
   // create a new input
   let checkbox = document.createElement('input');

   //create delete button
  let button = document.createElement('button');

  // modify the code so that the delete function is tied to id

   // set the input's type to checkbox
   checkbox.type = "checkbox";
   // set the title
    newLi.textContent = title;

    // set delete button text

   button.textContent = "delete";

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the delete button to the li
    newLi.appendChild(button);

    // attach the li to the ul
    toDoList.appendChild(newLi);


    button.addEventListener("click", event => {
      // change this line
      let elem = document.getElementById(timeStamp);
      elem.remove();
    });

    //empty the input
    newToDoText.value = '';


});

}


window.onload = function() {
  onReady();
};
