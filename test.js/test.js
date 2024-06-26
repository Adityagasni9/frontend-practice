//selection and then save

//var btn = document.querySelector('button');
//btn.textContent ="download star";

/*
//it is for appnd child example

var h1 = document.createElement('h1');
h1.textContent ="hey";
h1.classList ="makeitred"

//abh yeh sabh bankee body mai rakh rha hoon

document.querySelector("body").appendChild(h1)
*/


var btn=document.querySelector("button");

btn.addEventListener("mouseover",function(){
    btn.textContent = "sstarting";
    btn.style.backgroundColor ="red";
})