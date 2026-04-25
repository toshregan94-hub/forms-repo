// Step 2: Connect forms html to Javascript
document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.querySelector("#create-task-form");
    const taskList = document.querySelector("#tasks"); 

    // Add event listener to form
    taskForm.addEventListener("submit", (event) => {
        // Add preventDefault()
        event.preventDefault();

        const taskDescription = event.target["new-task-description"].value;

        // Call buildToDo and pass in the saved task
        buildToDo(taskDescription);

        // Clear the input field for the next task
        event.target.reset();
    });

    // Step 4: Add item to list and display
    function buildToDo(task) {
        // Create a new li element
        const li = document.createElement("li");

        // Adding task as the textContent
        li.textContent = task;

        // Append the li element to the task list
        taskList.appendChild(li);
    }
});

