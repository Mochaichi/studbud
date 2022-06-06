function pageLoad() {
    
    let test = document.getElementById("test");
    let quad1 = document.getElementById("quad1");
    renderItems();
    function getItems() {

        let items = localStorage.getItem('items');

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

            quad1.appendChild(taskitem);
            taskitem.appendChild(taskName);
            taskitem.appendChild(dueDate);
            taskitem.appendChild(completionTime);
            taskitem.appendChild(estimatedTime);
            taskitem.appendChild(priorityRating);
        });
    }
}