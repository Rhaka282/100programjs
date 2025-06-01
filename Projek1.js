const taskInput = document.getElementById("taskInput");
function addTask() {
  if (taskInput.value === "") return;
  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.innerHTML = `${taskInput.value} <button onclick="this.parentNode.remove()">Hapus</button>`;
  taskList.appendChild(li);
  taskInput.value = "";
}