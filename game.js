var gamePattern = [];
var buttonColours = ["red", "blue", "green","yellow"];

var userClickedPattern=[];
var level= 0;

var started = false;

$(".bttn").click(function() {
  if (!started) {
    startOver();
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    
  }
});

 $( ".btn" ).click(function() {
      var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
 
     animatePress(userChosenColour);     
     playSound(userChosenColour);
     checkAnswer(userClickedPattern.length-1);

    });

    function checkAnswer(currentLevel){
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
      
        if (userClickedPattern.length === gamePattern.length){
  
   
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
      playSound("wrong");

  
        $("#level-title").text("Game Over, Press start to Restart");
        $("body").addClass("game-over");
       
        setTimeout(function () {
        $("body").removeClass("game-over");
           
        }, 200);
  
        
          startOver();

      }   
    };

    function startOver(){
      level=0; 
      gamePattern=[];
      started =false;
    }

function nextSequence(){
  userClickedPattern = [];
  
  level++;
  $("#level-title").text("Level " + level);

    var randomNumber = Math.floor( Math.random()*4);
     var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();


}




function playSound(name)  {
  
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

} 



function animatePress(currentColour){
  $("."+currentColour).addClass("pressed");

  setTimeout(function(){
    $("."+currentColour).removeClass("pressed");
 },100);
}


// console.log(userClickedPattern);

// key

