let tasks = []; //empty array to store tasks

document.getElementById('addTaskBtn').addEventListener('click', function () {
    // get value from input field
    let taskInput = document.getElementById('taskInput').value;
    // check if input is empty
    if (taskInput) {
        // add new task to task array
        tasks.push(taskInput);
        // clear input field value
        document.getElementById('taskInput').value = '';
        // update task list display
        displayTasks();
    }


})

document.getElementById('taskInput').addEventListener('keydown', (e) => {

    if (e.key === 'Enter') {

        // get value from input field
        let taskInput = document.getElementById('taskInput').value;
        // check if input is empty
        if (taskInput) {
            // add new task to task array
            tasks.push(taskInput);
            // clear input field value
            document.getElementById('taskInput').value = '';
            // update task list display
            displayTasks();
        }

    }
})


function displayTasks() {
    // select our task list in html
    let taskList = document.getElementById('taskList');
    // clear existing html list
    taskList.innerHTML = '';
    // loop through each task in the array and create a list item for each
    tasks.forEach((task, index) => {
        // create <li> element for each task in array
        let li = document.createElement('li');

        // add styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )

        // set inner html of list item with a task and remove btn
        li.innerHTML = `${task} <button class='btn btn-warning btn-sm' onclick='removeTask(${index})'>✓</button>`;

        // append new task list to html
        taskList.appendChild(li);
    })
}

function removeTask(index) {
    // when click check, remove task
    tasks.splice(index, 1);
    displayTasks();
}

document.getElementById('clearTaskBtn').addEventListener('click', function () {
    // clear all tasks from array
    tasks = [];
    displayTasks();
})




//BACKGROUND FROM AI

const NUM_CLOUDS = 12;

  for (let i = 0; i < NUM_CLOUDS; i++) {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");

    // random vertical placement
    cloud.style.top = Math.random() * window.innerHeight + "px";

    // random size
    const scale = Math.random() * 0.8 + 0.8;
    cloud.style.transform = `scale(${scale})`;

    // slower, smooth drift (10–30s)
    const duration = Math.random() * 20 + 10;
    cloud.style.animationDuration = duration + "s";

    // delay so they don't all start together
    cloud.style.animationDelay = (-Math.random() * duration) + "s";

    document.body.appendChild(cloud);
  }