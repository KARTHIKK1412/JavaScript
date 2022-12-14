function strike()
{
    let a=document.getElementById("strik");
    if(a.checked==true)
    {
        let a=document.getElementById("id1");
        a.style.textDecoration="line-through";
    }
    else
    {
        let id1=document.getElementById("id1");
        id1.style.textDecoration="none";
    }
}



      