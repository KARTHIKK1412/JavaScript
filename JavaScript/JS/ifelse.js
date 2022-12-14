function odd()
{
    let a=document.getElementById("nam").value;
    // alert(a);


if(a=='')
{
    alert("Plz enter the number");
}
else if(a%2==0)
{
    // document.write("Tha value is even");
    document.getElementById("k2").innerHTML=("The value is even");
}
else
{
    document.write("The value is odd");

}
}
