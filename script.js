let tasks = []; //empty array to store tasks
let completedTasks = []; //empty array to store completed tasks

document.getElementById('addTaskBtn').addEventListener('click', function () {
    // get value from input field
    let taskInput = document.getElementById('taskInput').value;
    // check if input is empty
    if (taskInput) {
        // add new task to task array
        tasks.push(taskInput);
        // add new value to completedTasks array
        completedTasks.push(false);
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
            completedTasks.push(false);
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



        if (completedTasks[index] === true) {
            li.classList.toggle('completed');
        }

        li.innerHTML = `
    <span>${task}</span>
    <div class="btn">
        <button class='btn check btn-sm' onclick='completeTask(${index})'><b>✓</b></button>
        <button class='btn x btn-sm' onclick='removeTask(${index})'><b>X</b></button>
    </div>
`;

        taskList.appendChild(li);
    });
    updateTaskCount();
}

// when click check once, remove task from list
function removeTask(index) {
    // remove task from array
    tasks.splice(index, 1);
    
    updateTaskCount();
    displayTasks();
}

function completeTask(index){
    completedTasks[index] = !completedTasks[index];
    displayTasks();
 
}

document.getElementById('clearTaskBtn').addEventListener('click', function () {
    // clear all tasks from array
    tasks = [];
    completedTasks = [];
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