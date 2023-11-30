// Function to add a new task
function addTask() {
  // Get input values and task list container
  const taskInput = document.getElementById('taskInput');
  const categorySelect = document.getElementById('categorySelect');
  const dueDateInput = document.getElementById('dueDateInput');
  const taskList = document.getElementById('taskList');

  // Check if the task input is not empty
  if (taskInput.value.trim() !== '') {
      // Create a new task item
      const li = document.createElement('li');
      const category = categorySelect.value.toLowerCase();
      li.className = `task ${category}`;
      li.innerHTML = `
          <span>${taskInput.value}</span>
          <span>${dueDateInput.value}</span>
          <button onclick="toggleTaskCompletion(this)">Complete</button>
          <button onclick="deleteTask(this)">Delete</button>
      `;
      // Add the task to the task list and clear input values
      taskList.appendChild(li);
      taskInput.value = '';
      dueDateInput.value = '';
  }
}

// Function to toggle task completion status
function toggleTaskCompletion(button) {
  const task = button.parentNode.querySelector('span:first-child');
  task.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(button) {
  const task = button.parentNode;
  task.parentNode.removeChild(task);
}
