function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");

    const taskText = taskInput.value.trim();
    const dateTime = taskDate.value;

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <div>
            <strong class="task-text">${taskText}</strong><br>
            <small>${dateTime || "No Date & Time"}</small>
        </div>

        <div class="actions">
            <button class="complete-btn">✓</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    const taskTextElement = li.querySelector(".task-text");

    // Complete Task
    li.querySelector(".complete-btn").addEventListener("click", () => {
        taskTextElement.classList.toggle("completed");
    });

    // Edit Task
    li.querySelector(".edit-btn").addEventListener("click", () => {
        let updatedTask = prompt("Edit Task", taskTextElement.textContent);

        if(updatedTask !== null && updatedTask.trim() !== ""){
            taskTextElement.textContent = updatedTask;
        }
    });

    // Delete Task
    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
}