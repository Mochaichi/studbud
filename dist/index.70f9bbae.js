function tasklist(){const t=document.getElementById("taskform"),e=(document.querySelector("#taskform > button"),document.getElementById("tasklist")),n=document.getElementById("taskInput"),o=document.getElementById("dueDateInput"),i=document.getElementById("completionTimeInput"),l=document.getElementById("estimatedTimeInput"),d=document.getElementById("priorityInput");t.addEventListener("submit",(function(u){u.preventDefault();let m=n.value,r=(new Date).toLocaleDateString("en-US"),s=new Date(o.value).toLocaleDateString("en-US"),p=i.value,y=l.value;!function(n,o,i,l,d,u,m){let r={id:Date.now(),taskDescription:n,createdDate:o,dueDate:i,priorityRating:l,completionTime:d,estimatedTime:u,completionStatus:m};a.push(r),function(n){c();let o=document.createElement("li");o.setAttribute("data-id",n.id),o.innerHTML="<p>"+n.taskDescription+" | created on: "+n.createdDate+" | due on: "+n.dueDate+" | priority rate: "+n.priorityRating+" | estimated time completed: "+n.estimatedTime+"</p>",e.appendChild(o);let i=document.createElement("button"),l=document.createTextNode("Delete");i.appendChild(l),o.appendChild(i),i.addEventListener("click",(function(t){t.preventDefault();let e=t.target.parentElement.getAttribute("data-id"),n=a.findIndex((t=>t.id===Number(e)));!function(t,e){e>-1&&t.splice(e,1)}(a,n),console.log(a),c(),o.remove()})),t.reset()}(r)}(m,r,s,d.value,p,y,!1),console.log(a)}));var a=[];function c(){a.length>0?document.getElementById("emptyList").style.display="none":document.getElementById("emptyList").style.display="block"}}function openForm(){document.getElementById("popupForm").style.display="block"}function closeForm(){document.getElementById("popupForm").style.display="none"}function timer(){let t,e,n=0;function o(t){document.getElementById("display").innerHTML=t}function i(t){const e="PLAY"===t?d:l;("PLAY"===t?l:d).style.display="block",e.style.display="none"}let l=document.getElementById("playButton"),d=document.getElementById("pauseButton"),a=document.getElementById("resetButton");l.addEventListener("click",(function(){t=Date.now()-n,e=setInterval((function(){n=Date.now()-t,o(function(t){let e=t/36e5,n=60*(e-Math.floor(e)),o=Math.floor(n),i=60*(n-o),l=Math.floor(i),d=100*(i-l),a=Math.floor(d);return`${o.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`}(n))}),10),i("PAUSE")})),d.addEventListener("click",(function(){clearInterval(e),i("PLAY")})),a.addEventListener("click",(function(){clearInterval(e),o("00:00:00"),n=0,i("PLAY")}))}$(document).ready((function(){$("button.plus").on("click",(function(){$("div:last").after("<div class=item><p>Title</p></div>")}))}));
//# sourceMappingURL=index.70f9bbae.js.map
