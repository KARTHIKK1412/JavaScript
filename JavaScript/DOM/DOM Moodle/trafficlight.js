let btt1=document.getElementById("bt1");
let btt2=document.getElementById("bt2");
let btt3=document.getElementById("bt3");

let btt4=document.getElementById("red1");
let btt5=document.getElementById("yellow");
let btt6=document.getElementById("green");


function stop()
{
    btt1.style.backgroundColor="red";
    btt2.style.backgroundColor="black";
    btt3.style.backgroundColor="black";

    btt4.style.backgroundColor="red";
    btt5.style.backgroundColor="gray";
    btt6.style.backgroundColor="gray";
}

function start()
{
    btt2.style.backgroundColor="yellow";
    btt1.style.backgroundColor="black";
    btt3.style.backgroundColor="black";

    btt4.style.backgroundColor="gray";
    btt5.style.backgroundColor="yellow";
    btt6.style.backgroundColor="gray";
}

function go()
{
    btt3.style.backgroundColor="green";
    btt2.style.backgroundColor="gray";
    btt1.style.backgroundColor="gray";

    btt4.style.backgroundColor="black";
    btt5.style.backgroundColor="black";
    btt6.style.backgroundColor="green";
}