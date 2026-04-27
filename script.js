let tasks = []; //empty array to store tasks

document.getElementById('addTaskBtn').addEventListener('click', function () {
    // get value from input field
    let taskInput = document.getElementById('taskInput').value;
    // check if input is empty
    if (taskInput) {
        // add new task to task array
        tasks.push({ text: taskInput, completed: false });
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
    let li = document.createElement('li');

    li.classList.add(
        'list-group-item',
        'd-flex',
        'justify-content-between',
        'align-items-center',
        'tasks'
    );

    // if completed make text white
    // had to look up how to do
    if (task.completed) {
        li.style.color = 'white';
    }

    li.innerHTML = `${task.text} 
    <button class='btn check btn-sm' onclick='toggleTask(${index})'><b>✓</b></button>`;

    taskList.appendChild(li);
});
    updateTaskCount();
}

// when click check once, turn text white and if click again, remove task from list
// had to look up some for help
function toggleTask(index) {
    if (!tasks[index].completed) {
        // first click marks complete
        tasks[index].completed = true;
    } else {
        // second click remove
        tasks.splice(index, 1);
    }

    displayTasks();
}

document.getElementById('clearTaskBtn').addEventListener('click', function () {
    // clear all tasks from array
    tasks = [];
    displayTasks();
})


// updates how many tasks
function updateTaskCount() {
    const count = tasks.length;
    document.getElementById('taskCount').textContent = `Total Tasks: ${count}`;
}



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