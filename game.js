var colors = ["red" , "blue" , "green" ,"yellow"];
var started = false;
var origpattern = [];
var userpattern = [];
var flag = false;
var level = 0;

function playsound(sound){
  var randomSound = "sounds/" + sound + ".mp3";
  var audio = new Audio(randomSound);
  audio.play();
}

$(document).keypress(function() {
  if (!flag) {
    $("h1").text("Level " + level);
    flag = true;
    nextSequence();
  }
});

$(".btn").on("click" , function(){
if(flag==true){
  var colorpressed = $(this).attr("id");
  userpattern.push(colorpressed);
  playsound(colorpressed);

  addanimation(colorpressed);
  checkAnswer(colorpressed);

}
});

function checkAnswer(){
  var n = userpattern.length;
  if(userpattern[n-1] == origpattern[n-1]){
    if(n===origpattern.length){
    setTimeout(function(){
      level++;
      $("h1").text("level " + level);
      nextSequence();
    },500);
    userpattern = [];
    }
  }


  else{
    playsound("wrong");
    $("h1").text("Game Over !!!!!");
  }
}

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomColor = colors[randomNumber];
  origpattern.push(randomColor);
  setTimeout(function(){

  addanimation(randomColor);
  playsound(randomColor);
},500);

}

function addanimation(color){
  $("#"+color).addClass("animated");
  setTimeout(function() {
   $("#"+color).removeClass("animated");
 }, 100);
}
