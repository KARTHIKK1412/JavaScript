let d1=document.getElementById("divid");

let ch=document.createElement("input");
ch.type="checkbox";
ch.id="chid";
ch.onclick=function()
{
    lbl.classList.toggle("strike-through"); //CSS
}
d1.appendChild(ch);

let lbl=document.createElement("label");
lbl.textContent="HTML";
lbl.classList.add("checkbox-lable") //CSS 
lbl.setAttribute("for","chid");
d1.appendChild(lbl);






























// let d1=document.getElementById("divid");
// let chid="checkbox";
// let lblid="checkboxlabel";

// function demo()
// {
//     lbl.classList.toggle("strike-through");
// }

// let c=document.createElement("input");
// c.type="checkbox";
// c.id= chid;
// c.onclick=function()
// {
//     demo();
// };

// d1.appendChild(c);

// let lbl=document.createElement("label");
// lbl.style.fontFamily="Roboto";
// lbl.style.marginLeft="5px";
// lbl.setAttribute("for",chid);
// lbl.id=lblid;
// lbl.textContent="html";

// d1.appendChild(lbl);


