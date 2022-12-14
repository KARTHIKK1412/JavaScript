function demo1()
{
let a=document.getElementById("inp1").value;
let b=document.getElementById("inp2").value;
let ch=document.getElementById("inp3").value;
a=parseInt(a);
b=parseInt(b);
ch=parseInt(ch);
let c;

switch(ch)
    {
        case 1:
            c=a+b;
            document.write("Total value is:"+c);
            break;

        case 2:
            c=a-b;
            document.write("Total value is:"+c);
            break;
        
        case 3:
            c=a*b;
            document.write("Total value is:"+c);
            break;

        case 4:
            c=a/b;
            document.write("Total value is:"+c);
            break;    

    }
}