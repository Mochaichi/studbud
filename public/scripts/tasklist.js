////////////////////////////////////////
// This code runs in global scope. It gets executed when the <script> tag in the HTML is loaded.
////////////////////////////////////////

// Bind an event to the submit button to capture information from the form and store it into localStorage.
let subButton = document.getElementById("itemsubmit");
let tasklist = document.getElementById("tasklist");


// Render the items from local storage so the page appears correct when it loads.
renderItems();


subButton.addEventListener("click", function () {


  let taskName = document.getElementById("taskName").value;
  let date = (new Date()).toLocaleDateString('en-US');
  let dueDate = document.getElementById("dueDate").value;
  let completionTime = document.getElementById("completionTime").value;
  let estimatedTime = document.getElementById("estimatedTime").value;
  let priorityRating = document.getElementById("priorityRating").value;

  if (taskName == "") {
    document.getElementById("taskName").classList.add("error");
    return;
  }


  let itemObj = {
    'taskName': taskName,
    'dueDate': dueDate,
    'completionTime': completionTime,
    'estimatedTime': estimatedTime,
    'priorityRating': priorityRating

  };


  let existingItems = getItems();

  // Add the new item onto the end of the list.
  existingItems.push(itemObj);


  existingItems = JSON.stringify(existingItems);


  localStorage.setItem('items', existingItems);


  renderItems();

});


function getItems() {

  let items = localStorage.getItem('items');

  if (items == null) {
    return [];
  }

  items = JSON.parse(items);

  return items;
}


function renderItems() {

  let items = getItems();

  items.forEach(function (item) {
    
    let taskitem = document.createElement("div");
    taskitem.classList.add("taskItem")

    let taskName = document.createElement("span");
    taskName.setAttribute('class', 'taskNameItem');
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

    // Add an element to represent the remove button
    let itemRemove = document.createElement('button');
    itemRemove.setAttribute('class', 'remove');
    itemRemove.innerText = 'x'; // You can CSS this later to be pretty
  

    // Add an event handler to the remove button. To make this work properly we need to do two things. Remove the DOM element from the document _AND_ remove the correct item from the local storage list.
    itemRemove.addEventListener("click", function () {
      // This allows us to remove the list li element directly which takes care of the visual removal.

      taskitem.remove();
      itemRemove.remove();

      // And the custom removeItem function helps us to remove it from local storage.
      removeItem(item.taskName, item.dueDate, item.completionTime, item.estimatedTime, item.priorityRating);
    });

    tasklist.appendChild(taskitem);
    taskitem.appendChild(taskName);
    taskitem.appendChild(dueDate);
    taskitem.appendChild(completionTime);
    taskitem.appendChild(estimatedTime);
    taskitem.appendChild(priorityRating);
    taskitem.appendChild(itemRemove);
  });
}

// Removes a specific item, by name from local storage.
function removeItem(taskName, dueDate, completionTime, estimatedTime, priorityRating) {
  // Use our custom getItems() function to retrieve info from local storage. Since we need to do this in a few places, see how the custom function is more efficient?
  let items = getItems();

  // This helps us to find the array index for the item that we want to remove. It compares the information we pass in (via the itemName variable) to the information in the objects within the array. If it matches, we get a number back - i.e. items[3].
  let itemIndex = items.findIndex(function (item) {
    return item.taskName == taskName;
    return item.dueDate == dueDate;
    return item.completionTime == completionTime;
    return item.estimatedTime == estimatedTime;
    return item.priorityRating == priorityRating;
  });

  // We've talked about splice() in class before (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), it removes a specific item out of the array 
  items.splice(itemIndex, 1);

  // Now we do the same process of writing information back into local storage that we did earlier.
  items = JSON.stringify(items);
  localStorage.setItem('items', items);
}

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}