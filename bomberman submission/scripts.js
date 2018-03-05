//check to see if my Javascript is successful with an alert

alert("Time to play a game!")

//What are my items, bomber and the container that it is in

var bomber= document.getElementById('bomber')
var container= document.getElementById('container')
//key presses
var bomberLeft= 0;
var bomberTop=0;
//user moves bomber man left, right, down, up with arrow keys
//up 38
//down 40
//left 37
//right 39
function moveBomber(e){
//when the user presses right arrow, bomber will move right
  if (e.keyCode==39){
      bomberLeft++;
      bomber.style.left = bomberLeft + 'px';
  }
//when the user presses left arrow, bomber will move left
else if (e.keyCode==37){
      bomberLeft--;
      bomber.style.left = bomberLeft + 'px';
  }

//when the user presses up arrow, bomber man will move up
else if (e.keyCode==38){
      bomberTop--;
      bomber.style.top = bomberTop + 'px';
  }
  //when user presses down arrow,  bomber man will move down
  else if (e.keyCode==40){
      bomberTop++;
      bomber.style.top = bomberTop + 'px';
  }
}

document.onkeydown = moveBomber;

//make sounds when the player is going left , right , up, down
document.addEventListener('keydown', function(e) {

});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 37) {
    document.getElementById('cheering').play();
  }
  if (e.keyCode == 39) {
    document.getElementById('cheering').play();
  }
  if (e.keyCode == 38) {
    document.getElementById('cheering').play();
  }
  if (e.keyCode ==40) {
    document.getElementById('cheering').play();
  }
});
