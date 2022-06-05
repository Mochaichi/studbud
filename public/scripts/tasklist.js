// Setting up variables for our HTML elements using DOM selection
let form = document.getElementById("taskform");
let button = document.querySelector("#taskform > button"); // Complex CSS query
let tasklist = document.getElementById("tasklist");
let taskInput = document.getElementById("taskInput");
let dueDateInput = document.getElementById("dueDateInput");
let completionTimeInput = document.getElementById("completionTimeInput");
let estimatedTimeInput = document.getElementById("estimatedTimeInput");
let priorityInput = document.getElementById("priorityInput");

// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Not as necessary for button, but needed for form submit

    let task = taskInput.value; // could be swapped out for line below
    //let task = taskInput.value;

    let date = (new Date()).toLocaleDateString('en-US') //Convert to short date format

    let dueDate = (new Date(dueDateInput.value)).toLocaleDateString('en-US');

    let completionTime = completionTimeInput.value;

    let estimatedTime = estimatedTimeInput.value;

    let priority = priorityInput.value

    // Call the addTask() function using
    addTask(task, date, dueDate, priority, completionTime, estimatedTime, false);

    // Log out the newly populated taskList everytime the button has been pressed
    console.log(taskList);
})

// Create an empty array to store our tasks
var taskList = [];

function addTask(taskDescription, createdDate, dueDate, priorityRating, completionTime, estimatedTime, completionStatus) {
    let task = {
        id: Date.now(),
        taskDescription,
        createdDate,
        dueDate,
        priorityRating,
        completionTime,
        estimatedTime,
        completionStatus
    };

    // Add the task to our array of tasks
    taskList.push(task);

    // Separate the DOM manipulation from the object creation logic
    renderTask(task);


}


// Function to display the item on the page
function renderTask(task) {

    updateEmpty();


    let item = document.createElement("div");
    item.classList.add("taskItem")
    item.setAttribute("data-id", task.id);
    item.innerHTML = "<p>" + task.taskDescription + " | " + "Created on: " + task.createdDate + " | " + "Due on: " + task.dueDate + " | " + "Priority rate: " + task.priorityRating + " | " + "Estimated time completed: " + task.estimatedTime + " minutes" + "</p>";
    let tasklist = document.getElementById('tasklist');
    tasklist.appendChild(item);


    // Setup delete button DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton); // Adds a delete button to every task

    // Listen for when the 
    delButton.addEventListener("click", function (event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute("data-id");
        let index = taskList.findIndex(task => task.id === Number(id));
        removeItemFromArray(taskList, index);

        console.log(taskList);

        updateEmpty();

        item.remove(); // Remove the task item from the page when button clicked
        // Because we used 'let' to define the item, this will always delete the right element
    })

    // Clear the value of the input once the task has been added to the page
    form.reset();
}

function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}

function updateEmpty() {
    if (taskList.length > 0) {
        document.getElementById("emptyList").style.display = "none";
    } else {
        document.getElementById("emptyList").style.display = "block";
    }
}

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}