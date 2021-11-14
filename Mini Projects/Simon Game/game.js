const buttonColours=["red", "blue", "green", "yellow"];
const gamePattern= [];
function nextSequence(){
    var randomNo = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNo];
}
gamePattern.push(nextSequence());
var id = 0;
$("#"+gamePattern[id]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
const audio = new Audio("sounds/"+gamePattern[id]+".mp3");
audio.play();
// $('#'+gamePattern[id]).click(function() {
    
//   });

// $("#red").click(function(){
//     const audio = new Audio("sounds/"+gamePattern[id]+".mp3");
//     audio.play();
// });
  