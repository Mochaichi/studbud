const t=document.getElementById("taskform"),e=document.querySelector("#taskform > button"),n=document.getElementById("tasklist"),o=document.getElementById("taskInput"),a=document.getElementById("dueDateInput"),l=document.getElementById("completionTimeInput"),d=document.getElementById("estimatedTimeInput"),i=document.getElementById("priorityInput");e.addEventListener("click",(function(e){e.preventDefault();let u=o.value,m=(new Date).toLocaleDateString("en-US"),s=new Date(a.value).toLocaleDateString("en-US"),p=l.value,y=d.value;!function(e,o,a,l,d,i,u){let m={id:Date.now(),taskDescription:e,createdDate:o,dueDate:a,priorityRating:l,completionTime:d,estimatedTime:i,completionStatus:u};c.push(m),function(e){r();let o=document.createElement("li");o.setAttribute("data-id",e.id),o.innerHTML="<p>"+e.taskDescription+"<p>created on: "+e.createdDate+"<p>due on: "+e.dueDate+"<p>priority rate: "+e.priorityRating+"<p>estimated time completed: "+e.estimatedTime+"</p>",n.appendChild(o);let a=document.createElement("button"),l=document.createTextNode("Delete");a.appendChild(l),o.appendChild(a),a.addEventListener("click",(function(t){t.preventDefault();let e=t.target.parentElement.getAttribute("data-id"),n=c.findIndex((t=>t.id===Number(e)));!function(t,e){e>-1&&t.splice(e,1)}(c,n),console.log(c),r(),o.remove()})),t.reset()}(m)}(u,m,s,i.value,p,y,!1),console.log(c)}));var c=[];function r(){c.length>0?document.getElementById("emptyList").style.display="none":document.getElementById("emptyList").style.display="block"}let u,m,s=0;function p(t){document.getElementById("display").innerHTML=t}function y(t){const e="PLAY"===t?E:f;("PLAY"===t?f:E).style.display="block",e.style.display="none"}let g,f=document.getElementById("playButton"),E=document.getElementById("pauseButton"),I=document.getElementById("resetButton");f.addEventListener("click",(function(){u=Date.now()-s,m=setInterval((function(){s=Date.now()-u,p(function(t){let e=t/36e5,n=60*(e-Math.floor(e)),o=Math.floor(n),a=60*(n-o),l=Math.floor(a),d=100*(a-l),i=Math.floor(d);return`${o.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}(s))}),10),y("PAUSE")})),E.addEventListener("click",(function(){clearInterval(m),y("PLAY")})),I.addEventListener("click",(function(){clearInterval(m),p("00:00:00"),s=0,y("PLAY")}));let v,B=0;function L(t){document.getElementById("display").innerHTML=t}function S(t){const e="PLAY"===t?k:D;("PLAY"===t?D:k).style.display="block",e.style.display="none"}let D=document.getElementById("playButton"),k=document.getElementById("pauseButton"),h=document.getElementById("resetButton");D.addEventListener("click",(g=Date.now()-B,v=setInterval((function(){B=Date.now()-g,L(function(t){let e=t/36e5,n=60*(e-Math.floor(e)),o=Math.floor(n),a=60*(n-o),l=Math.floor(a),d=100*(a-l),i=Math.floor(d);return`${o.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}(B))}),10),void S("PAUSE"))),k.addEventListener("click",(clearInterval(v),void S("PLAY"))),h.addEventListener("click",(clearInterval(v),L("00:00:00"),B=0,void S("PLAY")));
//# sourceMappingURL=index.ae71192b.js.map