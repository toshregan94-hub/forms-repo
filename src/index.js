
  // Connect forms html to Javascript
document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.querySelector("#create-task-form");

    taskForm.addEventListener("submit", (event) => {
        //Preventing the default behavior
        event.preventDefault();

        // Handle form data 
        const input = event.target.querySelector('[name="new-task-description"]');
        const taskDescription = input.value;

        // Calling the function 
        buildToDo(taskDescription);

        // Reset the form
        event.target.reset();
    });

    // Add item to list and display
    function buildToDo(task) {
        const taskList = document.querySelector("#task"); // Using the ID 'task'
        const li = document.createElement("li");
        
        li.textContent = task;
        taskList.appendChild(li);
    }
});