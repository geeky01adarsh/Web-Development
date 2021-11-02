for(var i=0; i<document.getElementsByClassName("drum").length; i++){
    document.getElementsByClassName("drum")[i].addEventListener("click",handleClick);
}
function handleClick(){
    var alpha =this.innerHTML;
    // this.style.color='white';
    // var audio = new Audio("sounds/crash.mp3");
    // audio.play();
}