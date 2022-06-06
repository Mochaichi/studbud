//Retrieving elements for the submit button and tasklist 
let subButton = document.getElementById("itemsubmit");
let tasklist = document.getElementById("tasklist");

//Render items from the local storage so that it always appears when the page reloads or loads
renderItems();

//Event listener that checks if the submit button has been clicked on
subButton.addEventListener("click", function () {

  //Retriving elements and placing them into variables to be used storage in arrays
  let taskName = document.getElementById("taskName").value;
  
  //Converts the date into YYYY-MM-DD
  let date = (new Date()).toLocaleDateString('en-US');
  let dueDate = document.getElementById("dueDate").value;
  let completionTime = document.getElementById("completionTime").value;
  let estimatedTime = document.getElementById("estimatedTime").value;
  let priorityRating = document.getElementById("priorityRating").value;

  //If the user does not input any task name, an error returns
  if (taskName == "") {
    document.getElementById("taskName").classList.add("error");
    return;
  }


  //A variable that will store keys and values for local storage
  let listItemObj = {

    //'taskname' = key || taskName = value
    'taskName': taskName,
    'dueDate': dueDate,
    'completionTime': completionTime,
    'estimatedTime': estimatedTime,
    'priorityRating': priorityRating

  };

  //A list to store the keys and values
  //the custom getItems(); function is called to retrieve the values from the local storage
  let existingItems = getItems();

  //Push/add new items into the list
  existingItems.push(listItemObj);

  //Turns the values into strings (JSON string)
  existingItems = JSON.stringify(existingItems);

  //Sets the value for each item in local storage
  localStorage.setItem('items', existingItems);

  //Rendering the items 
  renderItems();

});


//Retrieve items from local storage
function getItems() {

  //Double-checking if there are items in the local storage
  let items = localStorage.getItem('items');

  //An empty array is created if the local storage has not been used nor created
  if (items == null) {
    return [];
  }

  //Converts information into an array
  items = JSON.parse(items);

  //Returns value (items) to the code that called the function
  return items;
}

//Load items onto the screen using DOM manipulation methods
function renderItems() {

  //A variable that will store the custom function for item retrieval
  let items = getItems();

  //A loop that looks through all the items in the array
  items.forEach(function (item) {
    
    //Creating a div with the taskItem class to create cards for each task
    let taskitem = document.createElement("div");
    taskitem.classList.add("taskItem")

    //A span element to hold name of the item
    let taskName = document.createElement("span");
    //taskName given a taskNameItem class for styling
    taskName.setAttribute('class', 'taskNameItem');
    //Place value of item.taskName (from user input) into a span element
    taskName.innerText = item.taskName; 

    let dueDate = document.createElement("span");
    dueDate.setAttribute('class', 'dueDateItem');
    dueDate.innerText = item.dueDate; 

    let completionTime = document.createElement("span");
    completionTime.setAttribute('class', 'completionTimeItem');
    completionTime.innerText = item.completionTime; 

    let estimatedTime = document.createElement("span");
    estimatedTime.setAttribute('class', 'estimatedTimeItem');
    estimatedTime.innerText = item.estimatedTime; 
  
    let priorityRating = document.createElement("span");
    priorityRating.setAttribute('class', 'priorityRatingItem');
    priorityRating.innerText = item.priorityRating; 

    //An element for the remove task button
    let itemRemove = document.createElement('button');
    itemRemove.setAttribute('class', 'remove');
    itemRemove.innerText = 'x';

    //An event listener to check if the user has clicked the "remove" button to remove a task from the local storage
    itemRemove.addEventListener("click", function () {
    
      //Removes the elements: taskitem, and itemremove
      taskitem.remove();
      itemRemove.remove();

      //And the custom removeItem function helps us to remove it from local storage.
      removeItem(item.taskName, item.dueDate, item.completionTime, item.estimatedTime, item.priorityRating);
    });

    //Adding taskitem into the tasklist for display
    tasklist.appendChild(taskitem);

    //Adding the task information into the taskitem (cards)
    taskitem.appendChild(taskName);
    taskitem.appendChild(dueDate);
    taskitem.appendChild(completionTime);
    taskitem.appendChild(estimatedTime);
    taskitem.appendChild(priorityRating);
    taskitem.appendChild(itemRemove);
  });
}

//Removes a specific item, by name from local storage.
function removeItem(taskName, dueDate, completionTime, estimatedTime, priorityRating) {

  let items = getItems();

  //Find the index of the array that the user wants to remove, compares the information in the array, a number is retrieved if there is a match
  let itemIndex = items.findIndex(function (item) {
    return item.taskName == taskName;
    return item.dueDate == dueDate;
    return item.completionTime == completionTime;
    return item.estimatedTime == estimatedTime;
    return item.priorityRating == priorityRating;
  });

  //Removes an item from the array
  items.splice(itemIndex, 1);

  items = JSON.stringify(items);
  localStorage.setItem('items', items);
}

//Custom function to reveal the form, changes the display from (when pressed) block -> none 
function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}