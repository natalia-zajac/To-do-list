{
    const tasks = [
    ];

const reset = () => {
    const input = document.querySelector(".js.input");
    input.value = "";
    input.focus();
}


    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-removeButton");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-doneButton");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const render = () => {
        let taskListHTMLContent = "";

        for (const task of tasks) {
            taskListHTMLContent += `
        <li class="tasks__item">
            <button class="tasks__button tasks__button--done js-doneButton">
        ${task.done ? "✔️" : ""}
            </button>
        <span class="tasks__text ${task.done ? "tasks__text--done" : ""}">
        ${task.content}
        </span>
            <button class="tasks__button tasks__button--remove js-removeButton">🗑️</button>
        </li>
        `;
        }

        document.querySelector(".js-tasks").innerHTML = taskListHTMLContent;

        bindEvents();

    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();

    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

}