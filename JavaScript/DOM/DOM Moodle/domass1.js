let img1=document.getElementById("img1");
let img2=document.getElementById("img2");

let on1=document.getElementById("on1");
let off1=document.getElementById("off1");
function on()
{
    img1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    img2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    on1.style.backgroundColor="green";
    off1.style.backgroundColor="white";

}  

function off()
{

    img1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    img2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    off1.style.backgroundColor="red";
    on1.style.backgroundColor="white";

}