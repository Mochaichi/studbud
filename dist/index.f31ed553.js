function tasklist(){const t=document.getElementById("taskform"),e=document.querySelector("#taskform > button"),n=document.getElementById("tasklist"),o=document.getElementById("taskInput"),i=document.getElementById("dueDateInput"),a=document.getElementById("completionTimeInput"),l=document.getElementById("estimatedTimeInput"),d=document.getElementById("priorityInput");e.addEventListener("click",(function(e){e.preventDefault();let r=o.value,m=(new Date).toLocaleDateString("en-US"),p=new Date(i.value).toLocaleDateString("en-US"),s=a.value,y=l.value;!function(e,o,i,a,l,d,r){let m={id:Date.now(),taskDescription:e,createdDate:o,dueDate:i,priorityRating:a,completionTime:l,estimatedTime:d,completionStatus:r};c.push(m),function(e){u();let o=document.createElement("li");o.setAttribute("data-id",e.id),o.innerHTML="<p>"+e.taskDescription+"<p>created on: "+e.createdDate+"<p>due on: "+e.dueDate+"<p>priority rate: "+e.priorityRating+"<p>estimated time completed: "+e.estimatedTime+"</p>",n.appendChild(o);let i=document.createElement("button"),a=document.createTextNode("Delete");i.appendChild(a),o.appendChild(i),i.addEventListener("click",(function(t){t.preventDefault();let e=t.target.parentElement.getAttribute("data-id"),n=c.findIndex((t=>t.id===Number(e)));!function(t,e){e>-1&&t.splice(e,1)}(c,n),console.log(c),u(),o.remove()})),t.reset()}(m)}(r,m,p,d.value,s,y,!1),console.log(c)}));var c=[];function u(){c.length>0?document.getElementById("emptyList").style.display="none":document.getElementById("emptyList").style.display="block"}}function timer(){let t,e,n=0;function o(t){document.getElementById("display").innerHTML=t}function i(t){const e="PLAY"===t?l:a;("PLAY"===t?a:l).style.display="block",e.style.display="none"}let a=document.getElementById("playButton"),l=document.getElementById("pauseButton"),d=document.getElementById("resetButton");a.addEventListener("click",(function(){t=Date.now()-n,e=setInterval((function(){n=Date.now()-t,o(function(t){let e=t/36e5,n=60*(e-Math.floor(e)),o=Math.floor(n),i=60*(n-o),a=Math.floor(i),l=100*(i-a),d=Math.floor(l);return`${o.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`}(n))}),10),i("PAUSE")})),l.addEventListener("click",(function(){clearInterval(e),i("PLAY")})),d.addEventListener("click",(function(){clearInterval(e),o("00:00:00"),n=0,i("PLAY")}))}
//# sourceMappingURL=index.f31ed553.js.map