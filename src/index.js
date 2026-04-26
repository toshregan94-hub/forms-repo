
  // Select the form and add the event listener
document. addEventListener("DOMContentLoaded", () => {
//select form element by id 
const form = document. getElementById("create-task-form");

const input = document. getElementById("new-task-description");
//get the list where tasks will be displayed
const taskList = document. getElementById("tasks");



form. addEventListener ("submit", (event) => {
event. preventDefault () ;


//creates a new list item for the task
const li = document.createElement ("li");
li.textContent = input. value;

taskList.appendChild(li);

console.log("New task added:", input.value);

form. reset () ;

});
});