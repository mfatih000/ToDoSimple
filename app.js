const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const Button = document.getElementById("removebutton");
let tasks = [];

function addTask() {
    if (inputBox.value === '') {
        alert("You have to write something");
    }

    else {
        const task = inputBox.value;
        if (!tasks.includes(task)) {
            tasks.push(task);
            displayTask();
        }
        else {
            alert("This task already added");
        }

    }

    save();
}

function displayTask() {

    listContainer.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    })
}

function clearInput() {
    inputBox.value = '';
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();
    }
}, false);

function removeAll() {
    while (listContainer.firstChild) listContainer.removeChild(listContainer.firstChild);
    save();
}

function save() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function show() {
    listContainer.innerHTML = localStorage.getItem("data");
}
show();
