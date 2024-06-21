(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))k(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&k(f)}).observe(document,{childList:!0,subtree:!0});function v(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function k(o){if(o.ep)return;o.ep=!0;const l=v(o);fetch(o.href,l)}})();const b=()=>{let r=document.querySelector(".taskName"),g=document.querySelector(".addTask"),v=document.querySelector(".setBtn"),k=document.querySelector(".tasks"),o=document.querySelector(".dateTime1");function l(s){const e=document.createElement("div");e.textContent=s,e.classList.add("toastCss"),document.body.appendChild(e),setTimeout(()=>{e.remove()},2e3)}g.addEventListener("click",()=>{r.value.trim()!==""?o.style.visibility="visible":alert("Input field is empty")}),v.addEventListener("click",()=>{if(r.value.trim()===""){alert("Please enter a task");return}let s=document.getElementById("date"),e=document.getElementById("time"),a=Date.now().toString(),n=f(r.value.trim(),s.value||"",e.value||"",a);k.append(n),o.style.visibility="hidden",x(r.value.trim(),s.value||"",e.value||"",a),r.value="",s.value="",e.value="",l("Task added Successfully"),setTimeout(()=>{window.location.reload()},2e3)});function f(s,e,a,n){let t=document.createElement("article");t.classList.add("flex","flex-row","justify-between","align-center","gap15"),t.dataset.id=n,t.innerHTML=`<div class="flex flex-row justify-between align-center width100">
            <div class="flex flex-row align-center gap15 mainTaskDiv">
        
              <i class="fa-regular fa-circle circle"></i>
              <div class="flex flex-column gap5 justify-center inputText">
         
                <p class="taskInput">${s}</p>
                <div class="flex flex-row gap15 dateTime">
                  ${e?`<small class = "date1">${e}</small>`:""}
                  ${a?`<small class = "time1">${a}</small>`:""}
                </div>
              </div>
            </div>
            <span class="flex flex-row gap5 justify-center align-center notifyIcon">
    
              <i class="fa-regular fa-bell"></i>
              <i class="fa-regular fa-bookmark"></i>
              <i class="fa-regular fa-pen-to-square edit"></i>
            </span>
          </div>
          <button class="deleteBtn">x</button>`;const c=t.querySelector(".circle");c.addEventListener("click",()=>{let m=t.querySelector(".taskInput"),u=t.querySelector(".date1"),i=t.querySelector(".time1");c.classList.toggle("fa-regular"),c.classList.toggle("fa-circle"),c.classList.toggle("fa-solid"),c.classList.toggle("fa-circle-check"),c.classList.contains("fa-solid")?(l("Task Completed"),m.style.textDecoration="line-through",u&&(u.style.textDecoration="line-through"),i&&(i.style.textDecoration="line-through")):(l("Task Incomplete"),m.style.textDecoration="none",u&&(u.style.textDecoration="none"),i&&(i.style.textDecoration="none"))});const d=t.querySelector(".fa-bell");d.addEventListener("click",()=>{d.classList.toggle("fa-regular"),d.classList.toggle("fa-solid"),d.classList.contains("fa-solid")?l("You will be Notified"):l("Notification off")});const y=t.querySelector(".fa-bookmark");return y.addEventListener("click",()=>{y.classList.toggle("fa-regular"),y.classList.toggle("fa-solid"),y.classList.contains("fa-solid")?(l("Saved"),I(t)):(l("Unsaved"),h(t))}),t.querySelector(".edit").addEventListener("click",()=>{const m=t.querySelector(".taskInput"),u=m.textContent,i=document.createElement("input");i.type="text",i.value=u,i.classList.add("editInput"),m.replaceWith(i),i.focus(),i.addEventListener("blur",()=>{const p=i.value.trim();if(p!==u){L(n,p);const S=document.createElement("p");S.textContent=p,S.classList.add("taskInput"),i.replaceWith(S),l("Task updated successfully")}else i.replaceWith(m)}),i.addEventListener("keypress",p=>{p.key==="Enter"&&i.blur()})}),t.querySelector(".deleteBtn").addEventListener("click",()=>{E(n),l("Task removed")}),t}function I(s){document.querySelector(".tasks").prepend(s),T()}function h(s){const e=document.querySelector(".tasks"),a=Array.from(e.children),n=s.dataset.id,c=(JSON.parse(localStorage.getItem("tasks"))||[]).findIndex(d=>d.id===n);c>-1&&(c===a.length-1?e.appendChild(s):e.insertBefore(s,a[c+1]),T())}function T(){const s=document.querySelector(".tasks"),a=Array.from(s.children).map(n=>{const t=n.dataset.id;return(JSON.parse(localStorage.getItem("tasks"))||[]).find(d=>d.id===t)||{id:t,task:"",date:"",time:""}});localStorage.setItem("tasks",JSON.stringify(a))}function x(s,e,a,n){let t=JSON.parse(localStorage.getItem("tasks"))||[];t.push({id:n,task:s,date:e,time:a}),localStorage.setItem("tasks",JSON.stringify(t))}function L(s,e){let a=JSON.parse(localStorage.getItem("tasks"))||[];const n=a.findIndex(t=>t.id===s);n!==-1&&(a[n].task=e,localStorage.setItem("tasks",JSON.stringify(a)))}function E(s){const e=document.querySelector(`article[data-id="${s}"]`);e&&e.remove();let a=JSON.parse(localStorage.getItem("tasks"))||[];a=a.filter(n=>n.id!==s),localStorage.setItem("tasks",JSON.stringify(a))}function O(){(JSON.parse(localStorage.getItem("tasks"))||[]).forEach(e=>{if(e&&e.task&&e.id){let a=f(e.task,e.date||"",e.time||"",e.id);k.append(a)}})}O()},q=r=>{r.style.height="auto",r.style.height=r.scrollHeight+"px"};document.addEventListener("DOMContentLoaded",()=>{b();const r=document.getElementById("auto-resize-textarea");r&&r.addEventListener("input",()=>q(r))});
