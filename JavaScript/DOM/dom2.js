// let img1=document.getElementById("img1");
// let img2=document.getElementById("img2");

// function on()
// {
//     img1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
//     img2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
// }

// function off()
// {
//     img1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
//     img2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
// }



// let bt1=document.getElementById("bt1");
// let bt2=document.getElementById("bt2");
// let bt3=document.getElementById("bt3");

// function stop()
// {
//     bt1.style.backgroundColor="red";
// }

// function start()
// {
//     bt2.style.backgroundColor="yellow";
// }

// function go()
// {
//     bt3.style.backgroundColor="green";
// }

// function clear()
// {
//     btt4.style.backgroundColor="black";
// }


let bt1=document.getElementById("bt1");
let bt2=document.getElementById("bt2");
let bt3=document.getElementById("bt3");

function stop()
{
    bt1.style.backgroundColor="red";
    bt2.style.backgroundColor="black";
    bt3.style.backgroundColor="black";

}

function start()
{
    bt2.style.backgroundColor="yellow";
    bt1.style.backgroundColor="black";
    bt3.style.backgroundColor="black";
}

function go()
{
    bt3.style.backgroundColor="green";
    bt2.style.backgroundColor="black";
    bt1.style.backgroundColor="black";
}

function cler()
{
    bt3.style.backgroundColor="black";
    bt2.style.backgroundColor="black";
    bt1.style.backgroundColor="black";
}