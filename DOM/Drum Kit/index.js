for(var i=0; i<document.getElementsByClassName("drum").length; i++){
    document.getElementsByClassName("drum")[i].addEventListener("click",handleClick);
}
function handleClick(){
    alert("I got clicked");
}