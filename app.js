
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let tasks = [];

function addTask() {
  if (inputBox.value === "") {
    alert("You have to write something");
  } else {
    const task = inputBox.value;
    if (!tasks.some((t) => t.task === task)) {
      tasks.push({ task, checked: false });
      displayTask();
      save();
    } else {
      alert("This task already added");
    }
  }
}

function displayTask() {
  listContainer.innerHTML = "";

  tasks.forEach((taskObj, index) => {
    const { task, checked } = taskObj;

    let li = document.createElement("li");
    li.textContent = task;
    if (checked) {
      li.classList.add("checked");
    }
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  });
}

function removeAll() {
  tasks = [];
  listContainer.innerHTML = "";
  save();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    const taskIndex = Array.from(listContainer.children).indexOf(e.target);
    tasks[taskIndex].checked = !tasks[taskIndex].checked;
    e.target.classList.toggle("checked");
    save();
  } else if (e.target.tagName === "SPAN") {
    const taskIndex = Array.from(listContainer.children).indexOf(
      e.target.parentElement
    );
    tasks.splice(taskIndex, 1);
    e.target.parentElement.remove();
    save();
  }
});

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function show() {
  const data = JSON.parse(localStorage.getItem("tasks"));
  if (data) {
    tasks = data;
    displayTask();
  }
}

window.onload = show;
