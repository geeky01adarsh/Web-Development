const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function playSound(track){
    const audio = new Audio("sounds/"+track+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function nextSequence() {
  var randomNo = Math.floor(Math.random() * 4);
  var id = buttonColours[randomNo];
  gamePattern.push(nextSequence());
  $("#" + gamePattern[id])
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(gamePattern[id]);
}


$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
//   console.log(userClickedPattern);
  animatePress(userChosenColour);
});


// $('#'+gamePattern[id]).click(function() {

//   });

// $("#red").click(function(){
//     const audio = new Audio("sounds/"+gamePattern[id]+".mp3");
//     audio.play();
// });
