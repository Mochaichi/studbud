//TIMER
// Convert time to a format of hours, minutes, seconds, and milliseconds
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}
// Declare variables to use in our functions below
let startTime;
let elapsedTime = 0;
let timerInterval;
// Create function to modify innerHTML
function print(txt) {
    document.getElementById("display").innerHTML = txt;
}
// Create "start", "pause" and "reset" functions
function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
}
function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
}
function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
}
// Create function to display buttons
function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}
// Create event listeners
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");
playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
//NAVIGATION
function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") x.className += " responsive";
    else x.className = "topnav";
}
//TASKLIST
// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const completionTimeInput = document.getElementById("completionTimeInput");
const estimatedTimeInput = document.getElementById("estimatedTimeInput");
const priorityInput = document.getElementById("priorityInput");
// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
button.addEventListener("click", function(event) {
    event.preventDefault(); // Not as necessary for button, but needed for form submit
    let task = taskInput.value; // could be swapped out for line below
    //let task = taskInput.value;
    let date = new Date().toLocaleDateString("en-US") //Convert to short date format
    ;
    let dueDate = new Date(dueDateInput.value).toLocaleDateString("en-US");
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priority = priorityInput.value;
    // Call the addTask() function using
    addTask(task, date, dueDate, priority, completionTime, estimatedTime, false);
    // Log out the newly populated taskList everytime the button has been pressed
    console.log(taskList);
});
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
function renderTask(task1) {
    updateEmpty();
    let item = document.createElement("li");
    item.setAttribute("data-id", task1.id);
    item.innerHTML = "<p>" + task1.taskDescription + "<p>" + "created on: " + task1.createdDate + "<p>" + "due on: " + task1.dueDate + "<p>" + "priority rate: " + task1.priorityRating + "<p>" + "estimated time completed: " + task1.estimatedTime + "</p>";
    tasklist.appendChild(item);
    // Setup delete button DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton); // Adds a delete button to every task
    // Listen for when the 
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute("data-id");
        let index = taskList.findIndex((task)=>task.id === Number(id));
        removeItemFromArray(taskList, index);
        console.log(taskList);
        updateEmpty();
        item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will always delete the right element
    });
    // Clear the value of the input once the task has been added to the page
    form.reset();
}
function removeItemFromArray(arr, index) {
    if (index > -1) arr.splice(index, 1);
    return arr;
}
function updateEmpty() {
    if (taskList.length > 0) document.getElementById("emptyList").style.display = "none";
    else document.getElementById("emptyList").style.display = "block";
}

//# sourceMappingURL=reading.f3bd186e.js.map
