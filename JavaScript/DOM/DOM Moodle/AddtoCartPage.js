let a=document.getElementById("add1");
let ulid=document.getElementById("ulid");

function Add()
{
let item=a.value;
let li=document.createElement("li");
li.textContent=item;
a.value="";
ulid.appendChild(li);
}