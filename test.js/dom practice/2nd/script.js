var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");

document.querySelector("button")
addEventListener("click",function(){
     var a = img1.src ;
     var b = img2.src ;

    img1.src = b;
    img2.src = a;
})



