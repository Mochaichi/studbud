function navBar(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}const form=document.getElementById("taskform"),button=document.querySelector("#taskform > button"),tasklist=document.getElementById("tasklist"),taskInput=document.getElementById("taskInput");button.addEventListener("click",(function(e){e.preventDefault(),addTask(form.elements.task.value,(new Date).toLocaleDateString("en-US"),"26/03/2021","Low",["1","30"],!1),console.log(taskList)}));var taskList=[];function addTask(e,t,n,a,s,o){let d={taskDescription:e,createdDate:t,dueDate:n,priorityRating:a,estimatedTime:s,completionStatus:o};taskList.push(d),renderTask(d)}function renderTask(e){let t=document.createElement("li");t.innerHTML="<p>"+e.taskDescription+"</p>",tasklist.appendChild(t);let n=document.createElement("button"),a=document.createTextNode("Delete");n.appendChild(a),t.appendChild(n),n.addEventListener("click",(function(e){t.remove()})),form.reset()}
//# sourceMappingURL=index.cbf6a3f8.js.map