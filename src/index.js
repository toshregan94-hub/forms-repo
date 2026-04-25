
  // Select the form and add the event listener
document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.querySelector("#create-task-form");
  if (taskForm) {
        taskForm.addEventListener("submit", (event) => {
            //Prevent default reload
            event.preventDefault();

            // Getting the value using "new-task-description"
            const taskDescription = event.target["new-task-description"].value;

            // Call the function
            buildToDo(taskDescription);

            // Reset form
            event.target.reset();
        });
    }
});

// Define buildToDo 
function buildToDo(task) {
    // Create the li
    const li = document.createElement("li");
    li.textContent = task;

    // Select the list 
    const taskList = document.querySelector("#tasks");

    // Appending it
    if (taskList) {
        taskList.appendChild(li);
    }
}