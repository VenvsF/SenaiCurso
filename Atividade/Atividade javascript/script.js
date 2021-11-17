var btn = document.querySelector('button');
var i = 0;

btn.onclick  = function loop(){
    while(i<15){
        console.log(i);
        i++;
    }
}
