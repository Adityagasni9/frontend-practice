var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var hometext =document.querySelector('#hometext');
var abouttext =document.querySelector('#abouttext');
var contacttext =document.querySelector('#contacttext');

hometext.style.display ="block";
hometext.style.width ="50%";

home.addEventListener("click",function(){
    saaretexthataoo();
    hometext.style.display ="block";
    hometext.style.width = "50%"
})
about.addEventListener("click",function(){
    saaretexthataoo();
    abouttext.style.display ="block";
    abouttext.style.width = "50%"
})
contact.addEventListener("click",function(){
    saaretexthataoo();
    contacttext.style.display ="block";
    contacttext.style.width = "50%"
})

function saaretexthataoo(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display="none";
    })
}
                   