let inpp=document.getElementById("inpp");
let buu=document.getElementById("buu");
let ul=document.getElementById("ull");


function add()
{ 
    inp1=inpp.value;
    if(inpp.value!="")
    {
    let li=document.createElement("li");

    li.textContent=inp1;
    li.style.listStyleType="none";
    li.className="lii";
    li.style.color="white";
    inpp.value="";
    ul.appendChild(li);
   
    let del=document.createElement("button");
    del.textContent="delete";
    del.className="dell";
    del.onclick=function()
    {
        ul.removeChild(li);
        ul.removeChild(del);
    }
    ul.appendChild(del);
  
    }
else{
    alert("ENTER VALUE")
}

}