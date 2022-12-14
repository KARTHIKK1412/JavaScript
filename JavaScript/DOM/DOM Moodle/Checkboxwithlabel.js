let a=document.getElementById("d1");
a.classList.add("text-center","bg-info","p-5");

let b=document.createElement("input");
b.type="checkbox";
b.style.width="25px";
b.style.height="25px";
b.id="inpid";
a.appendChild(b);

let lbl=document.createElement("label");
lbl.setAttribute("for","checkbox");
lbl.textContent="click me!";
lbl.id="labelid";
a.appendChild(lbl);     

