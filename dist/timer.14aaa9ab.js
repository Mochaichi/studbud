const form=document.getElementById("taskform"),button=document.querySelector("#taskform > button"),tasklist=document.getElementById("tasklist"),taskInput=document.getElementById("taskInput"),dueDateInput=document.getElementById("dueDateInput"),completionTimeInput=document.getElementById("completionTimeInput"),estimatedTimeInput=document.getElementById("estimatedTimeInput"),priorityInput=document.getElementById("priorityInput");button.addEventListener("click",(function(t){t.preventDefault();let e=taskInput.value,n=(new Date).toLocaleDateString("en-US"),a=new Date(dueDateInput.value).toLocaleDateString("en-US"),o=completionTimeInput.value,i=estimatedTimeInput.value;addTask(e,n,a,priorityInput.value,o,i,!1),console.log(taskList)}));var taskList=[];function addTask(t,e,n,a,o,i,r){let u={id:Date.now(),taskDescription:t,createdDate:e,dueDate:n,priorityRating:a,completionTime:o,estimatedTime:i,completionStatus:r};taskList.push(u),renderTask(u)}function renderTask(t){updateEmpty();let e=document.createElement("li");e.setAttribute("data-id",t.id),e.innerHTML="<p>"+t.taskDescription+"<p>created on: "+t.createdDate+"<p>due on: "+t.dueDate+"<p>priority rate: "+t.priorityRating+"<p>estimated time completed: "+t.estimatedTime+"</p>",tasklist.appendChild(e);let n=document.createElement("button"),a=document.createTextNode("Delete");n.appendChild(a),e.appendChild(n),n.addEventListener("click",(function(t){t.preventDefault();let n=t.target.parentElement.getAttribute("data-id"),a=taskList.findIndex((t=>t.id===Number(n)));removeItemFromArray(taskList,a),console.log(taskList),updateEmpty(),e.remove()})),form.reset()}function removeItemFromArray(t,e){return e>-1&&t.splice(e,1),t}function updateEmpty(){taskList.length>0?document.getElementById("emptyList").style.display="none":document.getElementById("emptyList").style.display="block"}function timeToString(t){let e=t/36e5,n=60*(e-Math.floor(e)),a=Math.floor(n),o=60*(n-a),i=Math.floor(o),r=100*(o-i),u=Math.floor(r);return`${a.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`}let startTime,timerInterval,elapsedTime=0;function print(t){document.getElementById("display").innerHTML=t}function start(){startTime=Date.now()-elapsedTime,timerInterval=setInterval((function(){elapsedTime=Date.now()-startTime,print(timeToString(elapsedTime))}),10),showButton("PAUSE")}function pause(){clearInterval(timerInterval),showButton("PLAY")}function reset(){clearInterval(timerInterval),print("00:00:00"),elapsedTime=0,showButton("PLAY")}function showButton(t){const e="PLAY"===t?pauseButton:playButton;("PLAY"===t?playButton:pauseButton).style.display="block",e.style.display="none"}let playButton=document.getElementById("playButton"),pauseButton=document.getElementById("pauseButton"),resetButton=document.getElementById("resetButton");playButton.addEventListener("click",start),pauseButton.addEventListener("click",pause),resetButton.addEventListener("click",reset);
//# sourceMappingURL=timer.14aaa9ab.js.map