import { createTask } from "./addTask.js";
import { uniqueDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const readTasks = () => {
    const list = document.querySelector("[data-list]");

    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasksList);
            dates,forEach(date => {
                const dateMoment = moment(date, "DD/MM/YYYY");
                list.appendChild(dateElement(date));
                tasksList.forEach((task) => {                
                    list.appendChild(createTask(task));
    });
});
};