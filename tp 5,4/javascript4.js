const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

function event_to_do(event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText !== "") {
      
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.textContent = taskText;

    const task_button = document.createElement('div');
    task_button.classList.add('task-button');


    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-button');
    function completeTask() {
      listItem.classList.toggle('completed');
    }
    completeButton.addEventListener('click', completeTask);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    function deleteTask() {
      listItem.remove();
    } 

    deleteButton.addEventListener('click', deleteTask);

    task_button.appendChild(completeButton);
    task_button.appendChild(deleteButton);
    listItem.appendChild(task_button);
    list.appendChild(listItem);

    input.value = '';

    }
}

  form.addEventListener('submit', event_to_do);
