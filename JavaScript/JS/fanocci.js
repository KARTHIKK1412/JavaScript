function demo()
{
let x=-1;
let y=1;
let z;

for(let a=1;a<=10;a++)
    {
        z=x+y;
        x=y;
        y=z;
        document.write(z);
    }
}
demo()