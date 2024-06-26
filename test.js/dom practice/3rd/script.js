var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
//queryselctorall use krne se jo yehh inps value hooge yeh more like array
//array hooge ,to be exact node value hooge
var h4 = document.querySelector("#error");
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    for(var i=0; i<inps.length;i++){
        if(inps[i].value.trim() === ''){  //inps.value ka matlab inps ke value jabh 1=0 hoga toh uske value   or trim ka matlab hai zero hatane ke leye
            h4.textContent = "eroooorrr";
            h4.style.color ="red";
            break;

        }
    }
    
})