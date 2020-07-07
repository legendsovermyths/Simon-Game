buttonColors=["red","green","yellow","blue"];
randomButtomList=[];
userClickedPattern=[];
var iscorrect=false;
$(document).on("keypress",function(){
      resetGame(iscorrect);
      $("h1").text("level "+randomButtomList.length);
      $("body").css("background-color","#011F3F");
})
$(".btn").on("click",function(){
  var audio=new Audio("sounds/"+$(this).attr('id')+".mp3");
  audio.play();
  userClickedPattern.push($(this).attr('id'));
  iscorrect=checkAnswer(userClickedPattern.length);
  console.log(iscorrect);
  console.log(userClickedPattern);
  console.log(userClickedPattern.length);
  console.log(randomButtomList);
  if(!iscorrect){
    $("h1").text("Game Over,Press any key to restart");
    $("body").css("background-color","#c70039");
  }
  addTile(iscorrect);
})

function addTile(isCorrect){
if(randomButtomList.length==userClickedPattern.length && isCorrect){
  randomButtomList.push(buttonColors[nextSequence()]);
  $("."+randomButtomList[randomButtomList.length-1]).fadeOut(100).fadeIn(100);
  userClickedPattern=[];
  $("h1").text("level "+randomButtomList.length);
  }
}

function nextSequence() {
  randomNumber=Math.floor(Math.random()*4);
  return randomNumber;
}

function checkAnswer(index){
  return randomButtomList[index-1]===userClickedPattern[index-1];
}

function resetGame(isCorrect){
  if(!isCorrect){
    randomButtomList=[];
    userClickedPattern=[];
    randomButtomList.push(buttonColors[nextSequence()]);
    $("."+randomButtomList[randomButtomList.length-1]).fadeOut(100).fadeIn(100);
  }
}
