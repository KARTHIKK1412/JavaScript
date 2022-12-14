let img=document.getElementById("img1");
let nam=document.getElementById("id2");
let age=document.getElementById("id3");

let profileDetails = {
    imgSrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "KARTHIK K",
    age: 28
};

img.src=profileDetails.imgSrc;
nam.textContent=profileDetails.name;
age.textContent="Age:"+profileDetails.age;
