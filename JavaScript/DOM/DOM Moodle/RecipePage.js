let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta","Oil","Onions","Salt","Tomato Sauce","Cheese"]
}



let h=document.getElementById("head");
let i=document.getElementById("img");
let ul=document.getElementById("ulid");

let id1=document.getElementById("id1");
id1.style.backgroundColor="red";
id1.style.marginTop="20px";
id1.style.width="370px";
id1.style.borderRadius="20px";

h.textContent=recipeObj.title;
h.style.color="red";

img.src=recipeObj.imgSrc;
img.classList.add("w-25");     //25 50 75

let ing=recipeObj.ingredients;

for(i of ing)
{
    let li=document.createElement("li");
    li.textContent=i;
    ul.appendChild(li);
}