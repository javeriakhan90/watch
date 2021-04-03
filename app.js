var ri8 = 00;
var center = 00;
var lef8 = 00;
var ri8heading = document.getElementById("ri8");
var centerheading = document.getElementById("center");
var lef8heading = document.getElementById("lef8");
var interval;

function watch(){
    lef8++
    lef8heading.innerHTML= lef8;
    if (lef8 >= 99){
        center++
        centerheading.innerHTML= center;
        lef8 = 00;
    }
    else if(center >= 59){
    ri8++
    ri8heading.innerHTML=ri8;
    center = 00
    }
}

function start(){
    interval = setInterval(watch,10);
}
     function pause(){
     interval = clearInterval(interval);
}
function reset(){
    ri8 = 00;
    center= 00;
    lef8 = 00;
    ri8heading.innerHTML = ri8;
    centerheading.innerHTML = center;
    lef8heading.innerHTML = lef8;
    pause()
}