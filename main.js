// Ensure this script is linked properly in the HTML file under the correct name

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select elements from the DOM
    const taskInput = document.querySelector(".main form input");
    const addTaskButton = document.querySelector(".task input");
    const mainContainer = document.querySelector(".main");

    // Create a container for the task list
    const taskListContainer = document.createElement("div");
    taskListContainer.classList.add("task-list");
    taskListContainer.style.marginTop = "10px";
    taskListContainer.style.padding = "10px";
    taskListContainer.style.fontFamily = "Poppins, serif";

    // Add the task list container to the main section
    mainContainer.appendChild(taskListContainer);

    // Function to add a new task
    const addTask = () => {
        const taskValue = taskInput.value.trim();

        if (taskValue === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a task element
        const taskElement = document.createElement("div");
        taskElement.style.display = "flex";
        taskElement.style.justifyContent = "space-between";
        taskElement.style.marginBottom = "10px";
        taskElement.style.border = "1px solid black";
        taskElement.style.padding = "10px";
        taskElement.style.borderRadius = "4px";
        taskElement.style.backgroundColor = "#f9f9f9";

        // Create a span for the task text
        const taskText = document.createElement("span");
        taskText.textContent = taskValue;
        taskText.style.flexGrow = "1";

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.backgroundColor = "rgb(213, 159, 213)";
        deleteButton.style.border = "none";
        deleteButton.style.borderRadius = "4px";
        deleteButton.style.padding = "5px 10px";
        deleteButton.style.cursor = "pointer";
        deleteButton.style.color = "white";
        deleteButton.style.fontFamily = "Poppins, serif";

        deleteButton.addEventListener("click", () => {
            taskListContainer.removeChild(taskElement);
        });

        // Append the text and button to the task element
        taskElement.appendChild(taskText);
        taskElement.appendChild(deleteButton);

        // Add the task element to the task list container
        taskListContainer.appendChild(taskElement);

        // Clear the input field
        taskInput.value = "";
    };

    // Add event listener to the add task button
    addTaskButton.addEventListener("click", (e) => {
        e.preventDefault();
        addTask();
    });

    // Allow pressing Enter to add a task
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTask();
        }
    });
});