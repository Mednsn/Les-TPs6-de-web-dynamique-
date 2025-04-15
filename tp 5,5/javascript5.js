const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Empêche le rechargement

  const taskText = input.value.trim();
  if (taskText === '') return;

  // Créer un élément <li>
  const li = document.createElement('li');
  li.textContent = taskText;

  // Créer les boutons
  const actions = document.createElement('span');
  actions.classList.add('actions');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.title = "Marquer comme accomplie";
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.title = "Supprimer";
  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
  });

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(actions);

  list.appendChild(li);
  input.value = '';
});
