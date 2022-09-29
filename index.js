import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (e) => {
    e.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card")
    input.value = "";
//backticks `html dentro de javascript` ${variables js dentro de html en js}
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerHTML = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
};

//arrow function o funciones anonimas 
btn.addEventListener("click",createTask);
