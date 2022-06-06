
//Mostly the same functionality in task list
let subButton = document.getElementById("itemsubmit");
let tasklist = document.getElementById("tasklist");

//Retrieving info from checkboxes
let interruptedYes = document.getElementById("interruptedYes");
let interruptedNo = document.getElementById("interruptedNo");


// Render the items from local storage so the page appears correct when it loads.
renderItems();

subButton.addEventListener("click", function () {

  //Creating variable to be given a value based on the user's checkbox input
  let interruptedWork = null;

  //Conditional that checks whether the checkbox has been ticked or not
  if (interruptedYes.checked == true) {
    interruptedWork = document.getElementById("interruptedYes").value;
  }
  else if (interruptedNo.checked == true) {
    interruptedWork = document.getElementById("interruptedNo").value;
  }

  //Creating workTime variable to calculate the start and end time input from the user  
  let workTime;


  let taskName = document.getElementById("taskName").value;
  let date = (new Date()).toLocaleDateString('en-US');
  let startTime = document.getElementById("startTime").value;
  let breakTime = document.getElementById("breakTime").value;
  let endTime = document.getElementById("endTime").value;

  //Converts the time inputs into mins
  function convertH2M(timeInHour){
    let timeParts = timeInHour.split(":");
    return Number(timeParts[0]) * 60 + Number(timeParts[1]);
  }

  timeDifference();
  //A function that calculates the difference between two times
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

    let itemRemove = document.createElement('button');
    itemRemove.setAttribute('class', 'remove');
    itemRemove.innerText = 'x'; // You can CSS this later to be pretty

    itemRemove.addEventListener("click", function () {

      trackerTaskItem.remove();
      itemRemove.remove();

      removeItem(item.taskName, item.startTime, item.endTime, item.interruptedWork, item.workTime, item.breakTime);
    });

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

function removeItem(taskName, startTime, endTime, interruptedWork, workTime, breakTime) {
  let trackeritems = getItems();
  let itemIndex = trackeritems.findIndex(function (item) {
    return item.taskName == taskName;
    return item.startTime == startTime;
    return item.endTime == endTime;
    return item.interruptedWork == interruptedWork;
    return item.workTime == workTime;
    return item.breakTime == breakTime;
  });

  trackeritems.splice(itemIndex, 1);

  trackeritems = JSON.stringify(trackeritems);
  localStorage.setItem('trackeritems', trackeritems);
}

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}