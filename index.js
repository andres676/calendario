import { addTask } from "./components/addTask";
import { displayTasks } from "./components/readTasks";

const btn = document.querySelector("[data-form-btn]");
 
btn.addEventListener("click", addTask);

displayTasks();