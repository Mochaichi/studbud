function tasklist(){const t=document.getElementById("taskform"),e=(document.querySelector("#taskform > button"),document.getElementById("tasklist")),n=document.getElementById("taskInput"),o=document.getElementById("dueDateInput"),i=document.getElementById("completionTimeInput"),a=document.getElementById("estimatedTimeInput"),d=document.getElementById("priorityInput");t.addEventListener("submit",(function(u){u.preventDefault();let r=n.value,m=(new Date).toLocaleDateString("en-US"),p=new Date(o.value).toLocaleDateString("en-US"),s=i.value,y=a.value;!function(n,o,i,a,d,u,r){let m={id:Date.now(),taskDescription:n,createdDate:o,dueDate:i,priorityRating:a,completionTime:d,estimatedTime:u,completionStatus:r};l.push(m),function(n){c();let o=document.createElement("li");o.setAttribute("data-id",n.id),o.innerHTML="<p>"+n.taskDescription+"<p>created on: "+n.createdDate+"<p>due on: "+n.dueDate+"<p>priority rate: "+n.priorityRating+"<p>estimated time completed: "+n.estimatedTime+"</p>",e.appendChild(o);let i=document.createElement("button"),a=document.createTextNode("Delete");i.appendChild(a),o.appendChild(i),i.addEventListener("click",(function(t){t.preventDefault();let e=t.target.parentElement.getAttribute("data-id"),n=l.findIndex((t=>t.id===Number(e)));!function(t,e){e>-1&&t.splice(e,1)}(l,n),console.log(l),c(),o.remove()})),t.reset()}(m)}(r,m,p,d.value,s,y,!1),console.log(l)}));var l=[];function c(){l.length>0?document.getElementById("emptyList").style.display="none":document.getElementById("emptyList").style.display="block"}}function timer(){let t,e,n=0;function o(t){document.getElementById("display").innerHTML=t}function i(t){const e="PLAY"===t?d:a;("PLAY"===t?a:d).style.display="block",e.style.display="none"}let a=document.getElementById("playButton"),d=document.getElementById("pauseButton"),l=document.getElementById("resetButton");a.addEventListener("click",(function(){t=Date.now()-n,e=setInterval((function(){n=Date.now()-t,o(function(t){let e=t/36e5,n=60*(e-Math.floor(e)),o=Math.floor(n),i=60*(n-o),a=Math.floor(i),d=100*(i-a),l=Math.floor(d);return`${o.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}`}(n))}),10),i("PAUSE")})),d.addEventListener("click",(function(){clearInterval(e),i("PLAY")})),l.addEventListener("click",(function(){clearInterval(e),o("00:00:00"),n=0,i("PLAY")}))}
//# sourceMappingURL=index.459f6ae6.js.map