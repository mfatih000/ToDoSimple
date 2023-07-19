const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const Button = document.getElementById("removebutton");

function addTask() {
    if (inputBox.value === '') {
        alert("You have to write something");
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }


    save();
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
}

function save() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function show() {
    listContainer.innerHTML = localStorage.getItem("data");
}
show();
