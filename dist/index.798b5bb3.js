function tasklist(){const e=document.getElementById("taskform"),t=(document.querySelector("#taskform > button"),document.getElementById("tasklist"),document.getElementById("taskInput")),n=document.getElementById("dueDateInput"),o=document.getElementById("completionTimeInput"),d=document.getElementById("estimatedTimeInput"),i=document.getElementById("priorityInput");e.addEventListener("submit",(function(c){c.preventDefault();let u=t.value,m=(new Date).toLocaleDateString("en-US"),r=new Date(n.value).toLocaleDateString("en-US"),s=o.value,p=d.value;!function(t,n,o,d,i,c,u){let m={id:Date.now(),taskDescription:t,createdDate:n,dueDate:o,priorityRating:d,completionTime:i,estimatedTime:c,completionStatus:u};l.push(m),function(t){a();let n=document.createElement("div");n.classList.add("taskItem"),n.setAttribute("data-id",t.id),n.innerHTML="<p>"+t.taskDescription+" | Created on: "+t.createdDate+" | Due on: "+t.dueDate+" | Priority rate: "+t.priorityRating+" | Estimated time completed: "+t.estimatedTime+" minutes</p>";let o=document.getElementById("tasklist");o.appendChild(n),o.appendChild(n);let d=document.createElement("button"),i=document.createTextNode("Delete");d.appendChild(i),n.appendChild(d),d.addEventListener("click",(function(e){e.preventDefault();let t=e.target.parentElement.getAttribute("data-id"),o=l.findIndex((e=>e.id===Number(t)));!function(e,t){t>-1&&e.splice(t,1)}(l,o),console.log(l),a(),n.remove()})),e.reset()}(m)}(u,m,r,i.value,s,p,!1),console.log(l)}));var l=[];function a(){l.length>0?(document.getElementById("emptyList").style.display="none",document.getElementById("taskHeading").style.display="none"):(document.getElementById("emptyList").style.display="block",document.getElementById("taskHeading").style.display="none")}}function openForm(){document.getElementById("popupForm").style.display="block"}function closeForm(){document.getElementById("popupForm").style.display="none"}function timer(){let e,t,n=0;function o(e){document.getElementById("display").innerHTML=e}function d(e){const t="PLAY"===e?l:i;("PLAY"===e?i:l).style.display="block",t.style.display="none"}let i=document.getElementById("playButton"),l=document.getElementById("pauseButton"),a=document.getElementById("resetButton");i.addEventListener("click",(function(){e=Date.now()-n,t=setInterval((function(){n=Date.now()-e,o(function(e){let t=e/36e5,n=60*(t-Math.floor(t)),o=Math.floor(n),d=60*(n-o),i=Math.floor(d),l=100*(d-i),a=Math.floor(l);return`${o.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`}(n))}),10),d("PAUSE")})),l.addEventListener("click",(function(){clearInterval(t),d("PLAY")})),a.addEventListener("click",(function(){clearInterval(t),o("00:00:00"),n=0,d("PLAY")}))}
//# sourceMappingURL=index.798b5bb3.js.map
