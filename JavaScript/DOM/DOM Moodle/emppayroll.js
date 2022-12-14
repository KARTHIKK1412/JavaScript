
function nam()
{
    let n=document.getElementById("inpid");
    let sp=document.getElementById("spanid");
    let total;
    n=n.value;
    if(n.length>5)
    {
        total="Good";
    }
    else
    {
        total="Poor";
    }
    sp.innerText=total;
}
function emp()
{
    let emp=document.getElementById("inpid1");
    let sp1=document.getElementById("spanid1");
    let total1;
    emp=emp.value;
    if(emp!="")
    {
        total1="Ok";
    }
    else{
        total1="Enter Emp-id";
    }
    sp1.innerText=total1;
}
function des()
{
    let des=document.getElementById("inpid2").value;
    let sp2=document.getElementById("spanid2");
    let total2;
    des=des.value;
    if(des!="")
    {
        total2="Ok";
    }
    else{
        total2="No Value";
    }
    sp2.innerText=total2;
}

function check()
{
let nam=document.getElementById("inpid").value;
let emp=document.getElementById("inpid1").value;
let des=document.getElementById("inpid2").value;
let bp=document.getElementById("inpid3").value;
let hra=document.getElementById("inpid4").value;
let da=document.getElementById("inpid5").value;
let pf=document.getElementById("inpid6").value;
let gp=document.getElementById("inpid7").value;
let np=document.getElementById("inpid8").value;

p1.innerText=("Name:"+nam+"\n"+"Employee-id:"+emp+"\n"+"Designation:"+des+"\n"+"Basic Pay:"+bp+"\n"+"HRA:"+hra+"\n"+"DA:"+da+"\n"+"PF:"+pf+"\n"+"Gross pay:"+gp+"\n"+"Net pay:"+np);
}

function sal(){
    let bp=document.getElementById("inpid3").value;
    bp=parseInt(bp);
    let hra=document.getElementById("inpid4").value=0.15*bp;
    hra=parseInt(hra);
    let da=document.getElementById("inpid5").value=0.1*bp;
    da=parseInt(da);
    let pf=document.getElementById("inpid6").value=0.05*bp;
    let gp=document.getElementById("inpid7").value=(bp+hra+da);
    let np=document.getElementById("inpid8").value=gp-pf;
    np=parseInt(np);
}