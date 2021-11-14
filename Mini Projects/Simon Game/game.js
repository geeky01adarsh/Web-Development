const buttonColours=["red", "blue", "green", "yellow"];
const gamePattern= [];
function nextSequence(){
    var randomNo = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNo];
}
gamePattern.push(nextSequence());