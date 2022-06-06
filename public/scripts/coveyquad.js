
//Function for when the HTML page first loads up
function pageLoad() {

    //Retrieving elements for each quadrant
    let quad1 = document.getElementById("quad1");
    let quad2 = document.getElementById("quad2");
    let quad3 = document.getElementById("quad3");
    let quad4 = document.getElementById("quad4");

    //Sets new date
    let date = (new Date())

    //Most of the same functionality in tasklist.js
    renderItems();
    function getItems() {

        let items = localStorage.getItem('items');

        items = JSON.parse(items);

        return items;
    }


    function renderItems() {

        let items = getItems();

        items.forEach(function (item) {
            
            //Calling the dateDifference to commence date subtraction once the information is retrieved
            dateDifference();

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

            let itemRemove = document.createElement('button');
            itemRemove.setAttribute('class', 'remove');
            itemRemove.innerText = 'x';


            itemRemove.addEventListener("click", function () {

                taskitem.remove();
                itemRemove.remove();

                removeItem(item.taskName, item.dueDate, item.completionTime, item.estimatedTime, item.priorityRating);
            });

            //Custom function to subtract the due date and today's date
            function dateDifference() {
                let todayDate = date;
                let duedateConvert = new Date(item.dueDate);
                let diffTime = Math.abs(duedateConvert - todayDate);
                //removes the time included when creating new Date();
                let dateSubtract = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return dateSubtract

            }

            dateRequirement = dateDifference();
            
            //Conditionals for each quadrants
            //Looks at the result from the date subtraction, priority rating, and estimated time it takes to complete task
            //If a task falls under a condition, it will be appended into a quadrant
            if (dateRequirement < 15 && item.priorityRating == "Medium" && item.estimatedTime > 61) {
                quad1.appendChild(taskitem);
            }

            else if (dateRequirement > 15 && (item.priorityRating == "Medium" || item.priorityRating == "High") && item.estimatedTime < 61) {
                quad2.appendChild(taskitem);
            }
            else if (dateRequirement < 15 && item.priorityRating == "Low" && item.estimatedTime > 61) {
                quad3.appendChild(taskitem);
            }

            else if (dateRequirement > 15 && item.priorityRating == "Low" && item.estimatedTime < 61) {
                quad4.appendChild(taskitem);
            }

            taskitem.appendChild(taskName);
            taskitem.appendChild(dueDate);
            taskitem.appendChild(completionTime);
            taskitem.appendChild(estimatedTime);
            taskitem.appendChild(priorityRating);
        });
    }
}