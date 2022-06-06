////////////////////////////////////////
// This code runs in global scope. It gets executed when the <script> tag in the HTML is loaded.
////////////////////////////////////////

// Bind an event to the submit button to capture information from the form and store it into localStorage.
let subButton = document.getElementById("itemsubmit");
let tasklist = document.getElementById("tasklist");
let interruptedYes = document.getElementById("interruptedYes");
let interruptedNo = document.getElementById("interruptedNo");


// Render the items from local storage so the page appears correct when it loads.
renderItems();

subButton.addEventListener("click", function () {

  let interruptedWork = null;

  if (interruptedYes.checked == true) {
    interruptedWork = document.getElementById("interruptedYes").value;
  }
  else if (interruptedNo.checked == true) {
    interruptedWork = document.getElementById("interruptedNo").value;
  }

  let workTime;


  let taskName = document.getElementById("taskName").value;
  let date = (new Date()).toLocaleDateString('en-US');
  let startTime = document.getElementById("startTime").value;
  let breakTime = document.getElementById("breakTime").value;
  let endTime = document.getElementById("endTime").value;


  function convertH2M(timeInHour){
    let timeParts = timeInHour.split(":");
    return Number(timeParts[0]) * 60 + Number(timeParts[1]);
  }
  timeDifference();

  function timeDifference() {
    let startTimeMin = convertH2M(startTime);
    let endTimeMin = convertH2M(endTime);
    let diffTime = Math.abs(endTimeMin - startTimeMin);
    workTime = diffTime;

  }



  if (taskName == "") {
    document.getElementById("taskName").classList.add("error");
    return;
  }


  let trackerItemObj = {
    'taskName': taskName,
    'startTime': startTime,
    'endTime': endTime,
    'interruptedWork': interruptedWork,
    'workTime': workTime,
    'breakTime': breakTime

  };


  let trackerExistingItems = getItems();

  // Add the new item onto the end of the list.
  trackerExistingItems.push(trackerItemObj);


  trackerExistingItems = JSON.stringify(trackerExistingItems);


  localStorage.setItem('trackeritems', trackerExistingItems);


  renderItems();

});


function getItems() {

  let trackeritems = localStorage.getItem('trackeritems');

  if (trackeritems == null) {
    return [];
  }

  trackeritems = JSON.parse(trackeritems);

  return trackeritems;
}


function renderItems() {

  let trackeritems = getItems();

  trackeritems.forEach(function (item) {

    let trackerTaskItem = document.createElement("div");
    trackerTaskItem.classList.add("trackerTaskItem")

    let taskName = document.createElement("span");
    taskName.setAttribute('class', 'taskNameItem');
    taskName.innerText = item.taskName;

    let startTime = document.createElement("span");
    startTime.setAttribute('class', 'startTimeItem');
    startTime.innerText = item.startTime;

    let endTime = document.createElement("span");
    endTime.setAttribute('class', 'endTimeItem');
    endTime.innerText = item.endTime;

    let interruptedWork = document.createElement("span");
    interruptedWork.setAttribute('class', 'interruptedWorkItem');
    interruptedWork.innerText = item.interruptedWork;

    let workTime = document.createElement("span");
    workTime.setAttribute('class', 'workTimeItem');
    workTime.innerText = item.workTime;

    let breakTime = document.createElement("span");
    breakTime.setAttribute('class', 'breakTimeItem');
    breakTime.innerText = item.breakTime;

    // Add an element to represent the remove button
    let itemRemove = document.createElement('button');
    itemRemove.setAttribute('class', 'remove');
    itemRemove.innerText = 'x'; // You can CSS this later to be pretty

    // Add an event handler to the remove button. To make this work properly we need to do two things. Remove the DOM element from the document _AND_ remove the correct item from the local storage list.
    itemRemove.addEventListener("click", function () {
      // This allows us to remove the list li element directly which takes care of the visual removal.

      trackerTaskItem.remove();
      itemRemove.remove();

      // And the custom removeItem function helps us to remove it from local storage.
      removeItem(item.taskName, item.startTime, item.endTime, item.interruptedWork, item.workTime, item.breakTime);
    });
    
    // let startTimeMin = convertH2M(item.startTime);
    // let endTimeMin = convertH2M(item.startTime);

    
    // console.log(startTimeMin);

    tasklist.appendChild(trackerTaskItem);
    trackerTaskItem.appendChild(taskName);
    trackerTaskItem.appendChild(startTime);
    trackerTaskItem.appendChild(endTime);
    trackerTaskItem.appendChild(interruptedWork)
    trackerTaskItem.appendChild(workTime);
    trackerTaskItem.appendChild(breakTime);
    trackerTaskItem.appendChild(itemRemove);
  });
}

// Removes a specific item, by name from local storage.
function removeItem(taskName, startTime, endTime, interruptedWork, workTime, breakTime) {
  // Use our custom getItems() function to retrieve info from local storage. Since we need to do this in a few places, see how the custom function is more efficient?
  let trackeritems = getItems();

  // This helps us to find the array index for the item that we want to remove. It compares the information we pass in (via the itemName variable) to the information in the objects within the array. If it matches, we get a number back - i.e. items[3].
  let itemIndex = trackeritems.findIndex(function (item) {
    return item.taskName == taskName;
    return item.startTime == startTime;
    return item.endTime == endTime;
    return item.interruptedWork == interruptedWork;
    return item.workTime == workTime;
    return item.breakTime == breakTime;
  });

  // We've talked about splice() in class before (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), it removes a specific item out of the array 
  trackeritems.splice(itemIndex, 1);

  // Now we do the same process of writing information back into local storage that we did earlier.
  trackeritems = JSON.stringify(trackeritems);
  localStorage.setItem('trackeritems', trackeritems);
}

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}