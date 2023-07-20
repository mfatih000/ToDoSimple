

const taskForm = document.getElementById("task-form");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const removeButton = document.getElementById("removeButton");
let tasks = [];

function form_submit(e) {
  e.preventDefault(); 
  addTask(); 
}

function addTask() {
  // e.preventDefault(); 
  if (inputBox.value.trim() === "") {
    alert("You have to write something");
  } else {
    const task = inputBox.value;
    if (!tasks.some((t) => t.task === task)) {
      tasks.push({ task, checked: false });
      displayTask();
      save();
      inputBox.value = ""; // Görev eklendikten sonra metin kutusunu temizle.
    } else {
      alert("This task already added");
    }
  }
  document.getElementById("test").innerHTML = "<pre>"+JSON.stringify(tasks)+"</pre>"
}

function displayTask() {
  listContainer.innerHTML = "";
  var html_for_ui = ""
  tasks.forEach((taskObj, index) => {
    const { task, checked } = taskObj;
    var className = ''
    if(checked==true) {
      className = 'checked';
    }
    html_for_ui = html_for_ui + "<div class='d-flex justify-content-between'><span class='"+className+"' onclick='check_item("+index+")'>&bull;&nbsp;"+task+"</span>";
    html_for_ui = html_for_ui + "<span onclick='remove_item("+index+")'>\u00d7</span></div>";

  });
  listContainer.innerHTML = html_for_ui;
  console.log(tasks)
}
function check_item(item_index){
  tasks[item_index]['checked'] = !tasks[item_index]['checked']
  displayTask()
  save();
}

function remove_item(item_index){
  tasks.splice(item_index, 1);
  displayTask()
  save();
}

function removeAll() {
  tasks = [];
  listContainer.innerHTML = "";
  save();
}

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

