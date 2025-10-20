/*var n=prompt("choose batting or bowling(1-bat & 2-bowling");
if(n==1)
{
    var n1=Number(prompt("Choose a number between 1-10 : "));
    var n2=Math.random();
    n2=Math.floor(n2*10)+1;
    var sum=0;
    while(n1!=n2)
    {
        //if(n2==1)
        //{
          //  document.querySelectorAll("img")[1].setAttribute("src","cricketers/b.webp");
        //}
        sum=sum+n1;
        //alert("your score is"+" "+sum);
        document.querySelectorAll("h4")[0].innerHTML=sum;
        n1=Number(prompt("Choose a number between 1-10 : "));
        n2=Math.random();
        n2=Math.floor(n2*10)+1;
    }
}*/
/*var playerTurn = true; // true = player batting, false = computer batting


document.querySelectorAll("h3")[1].innerHTML="Choose batting or bowling😊😊";
var sum1=0,sum2=0,n1,n2,o=Number(0);
document.querySelectorAll(".b")[0].addEventListener("click",playerBatting);
function playerBatting()
{
  document.querySelectorAll("h3")[1].innerHTML="wait 20 ⌛ seconds";
  var sound1=new Audio("sounds/20-seconds-game-countdown-142456.mp3");
  sound1.play();
  sound1.addEventListener("ended",number);
}
function number()
{
  document.querySelectorAll("h3")[1].innerHTML="Choose a number until you out(batting🏏)";
  var len=document.querySelectorAll(".n").length;
  for(var i=0;i<len;i++)
  {
    document.querySelectorAll(".n")[i].addEventListener("click",function(){
      var s =this.innerHTML;
      switch(s)
      {
        case "1":
          n1=Number(1);
          break;
        case "2":
          n1=Number(2);
          break;
        case "3":
          n1=Number(3);
          break;
        case "4":
          n1=Number(4);
          break;
        case "5":
          n1=Number(5);
          break;
        case "6":
          n1=Number(6);
          break;
        case "7":
          n1=Number(7);
          break;
        case "8":
          n1=Number(8);
          break;
        case "9":
          n1=Number(9);
          break;
        case "10":
          n1=Number(10);
          break;
        default:
          break;
      }
      //alert(n1);
      var n2=Math.random();
      n2=Math.floor(n2*10)+1;
      switch(n1)
      {
        case 1:document.querySelectorAll("img")[0].setAttribute("src","images/one.jpg");
          break;
        case 2:document.querySelectorAll("img")[0].setAttribute("src","images/two.jpg");
          break;
        case 3:document.querySelectorAll("img")[0].setAttribute("src","images/three.jpg");
          break;
        case 4:document.querySelectorAll("img")[0].setAttribute("src","images/four.jpg");
          break;
        case 5:document.querySelectorAll("img")[0].setAttribute("src","images/five.jpg");
          break;
        case 6:document.querySelectorAll("img")[0].setAttribute("src","images/six.png");
          break;
        case 7:document.querySelectorAll("img")[0].setAttribute("src","images/seven.webp");
          break;
        case 8:document.querySelectorAll("img")[0].setAttribute("src","images/eight.jpg");
          break;
        case 9:document.querySelectorAll("img")[0].setAttribute("src","images/nine.jpg");
          break;
        case 10:document.querySelectorAll("img")[0].setAttribute("src","images/ten.jpg");
          break;
      }
      switch(n2)
      {
        case 1:document.querySelectorAll("img")[2].setAttribute("src","images/one.jpg");
          break;
        case 2:document.querySelectorAll("img")[2].setAttribute("src","images/two.jpg");
          break;
        case 3:document.querySelectorAll("img")[2].setAttribute("src","images/three.jpg");
          break;
        case 4:document.querySelectorAll("img")[2].setAttribute("src","images/four.jpg");
          break;
        case 5:document.querySelectorAll("img")[2].setAttribute("src","images/five.jpg");
          break;
        case 6:document.querySelectorAll("img")[2].setAttribute("src","images/six.png");
          break;
        case 7:document.querySelectorAll("img")[2].setAttribute("src","images/seven.webp");
          break;
        case 8:document.querySelectorAll("img")[2].setAttribute("src","images/eight.jpg");
          break;
        case 9:document.querySelectorAll("img")[2].setAttribute("src","images/nine.jpg");
          break;
        case 10:document.querySelectorAll("img")[2].setAttribute("src","images/ten.jpg");
          break;
      }
      if(n1!=n2)
      {
        sum1=sum1+n1;
        document.querySelectorAll("h4")[0].innerHTML=sum1;
      }
      else
      {
        document.querySelectorAll("h3")[1].innerHTML="OUT😢😢";
        // disable buttons so player can't click anymore
        //disableNumbers();
        // start computer batting after a short delay
        setTimeout(computerBatting, 1000);
        computerBatting();
      }

    });
    
  } 
}
function computerBatting()
{
  document.querySelectorAll("h3")[1].innerHTML="Choose a number until you take wicket(bowling🏏)";
  var len=document.querySelectorAll(".n").length;
  for(var i=0;i<len;i++)
  {
    document.querySelectorAll(".n")[i].addEventListener("click",function(){
      var s =this.innerHTML;
      switch(s)
      {
        case "1":
          n1=Number(1);
          break;
        case "2":
          n1=Number(2);
          break;
        case "3":
          n1=Number(3);
          break;
        case "4":
          n1=Number(4);
          break;
        case "5":
          n1=Number(5);
          break;
        case "6":
          n1=Number(6);
          break;
        case "7":
          n1=Number(7);
          break;
        case "8":
          n1=Number(8);
          break;
        case "9":
          n1=Number(9);
          break;
        case "10":
          n1=Number(10);
          break;
        default:
          break;
      }
      //alert(n1);
      var n2=Math.random();
      n2=Math.floor(n2*10)+1;
      switch(n1)
      {
        case 1:document.querySelectorAll("img")[0].setAttribute("src","images/one.jpg");
          break;
        case 2:document.querySelectorAll("img")[0].setAttribute("src","images/two.jpg");
          break;
        case 3:document.querySelectorAll("img")[0].setAttribute("src","images/three.jpg");
          break;
        case 4:document.querySelectorAll("img")[0].setAttribute("src","images/four.jpg");
          break;
        case 5:document.querySelectorAll("img")[0].setAttribute("src","images/five.jpg");
          break;
        case 6:document.querySelectorAll("img")[0].setAttribute("src","images/six.png");
          break;
        case 7:document.querySelectorAll("img")[0].setAttribute("src","images/seven.webp");
          break;
        case 8:document.querySelectorAll("img")[0].setAttribute("src","images/eight.jpg");
          break;
        case 9:document.querySelectorAll("img")[0].setAttribute("src","images/nine.jpg");
          break;
        case 10:document.querySelectorAll("img")[0].setAttribute("src","images/ten.jpg");
          break;
      }
      switch(n2)
      {
        case 1:document.querySelectorAll("img")[2].setAttribute("src","images/one.jpg");
          break;
        case 2:document.querySelectorAll("img")[2].setAttribute("src","images/two.jpg");
          break;
        case 3:document.querySelectorAll("img")[2].setAttribute("src","images/three.jpg");
          break;
        case 4:document.querySelectorAll("img")[2].setAttribute("src","images/four.jpg");
          break;
        case 5:document.querySelectorAll("img")[2].setAttribute("src","images/five.jpg");
          break;
        case 6:document.querySelectorAll("img")[2].setAttribute("src","images/six.png");
          break;
        case 7:document.querySelectorAll("img")[2].setAttribute("src","images/seven.webp");
          break;
        case 8:document.querySelectorAll("img")[2].setAttribute("src","images/eight.jpg");
          break;
        case 9:document.querySelectorAll("img")[2].setAttribute("src","images/nine.jpg");
          break;
        case 10:document.querySelectorAll("img")[2].setAttribute("src","images/ten.jpg");
          break;
      }
      if(n1!=n2)
      {
        sum2=sum2+n2;
        document.querySelectorAll("h4")[2].innerHTML=sum2;
      }
      else
      {
        o=o+1;
        document.querySelectorAll("h3")[1].innerHTML="Wicket😎😎";
        //disableNumbers();
        dispaly();
      }

    });
    
  }
}

function dispaly()
{
  if(sum1>sum2)
  {
    document.querySelectorAll("h3")[1].innerHTML="Congratulations🎉-You have won by "+(sum1-sum2)+" runs";
  }
  else if(sum2>sum1)
  {
    document.querySelectorAll("h3")[1].innerHTML="Defeated😥-You were defeated by "+(sum2-sum1)+" runs";
  }
  else{
    document.querySelectorAll("h3")[1].innerHTML="Macth Tie🤝";
  }
}*/


document.querySelectorAll("h3")[1].innerHTML = "Choose batting or bowling😊😊";

var sum1 = 0, sum2 = 0;
var playerTurn = true; // true = player batting, false = computer batting

var imgNames = ["one.jpg","two.jpg","three.jpg","four.jpg","five.jpg","six.png","seven.webp","eight.jpg","nine.jpg","ten.jpg"];



var k=2;
for(var k1=0;k1<k;k1++)
{
  document.querySelectorAll(".b")[k1].addEventListener("click",function(){
  var din=this.innerHTML;  


if(din=="Batting")
{
// Start game when player chooses batting
//document.querySelectorAll(".b")[0].addEventListener("click", playerBatting);
playerBatting();

function playerBatting() {
    document.querySelectorAll("h3")[1].innerHTML = "Wait 20 ⌛ seconds";
    var sound1 = new Audio("sounds/20-seconds-game-countdown-142456.mp3");
    sound1.play();
    sound1.addEventListener("ended", function () {
        document.querySelectorAll("h3")[1].innerHTML = "Choose a number until you get out (batting🏏)";
    });
}

// Add click listeners to all number buttons
document.querySelectorAll(".n").forEach(function(btn) {
    btn.addEventListener("click", function() {
        var n1 = Number(this.innerHTML); // Player choice
        var n2 = Math.floor(Math.random() * 10) + 1; // Computer choice

        // Update images based on your actual image names
        document.querySelectorAll("img")[0].src = "images/" + imgNames[n1 - 1];
        document.querySelectorAll("img")[2].src = "images/" + imgNames[n2 - 1];

        if (playerTurn) {
            // Player batting
            if (n1 !== n2) {
                sum1 += n1;
                document.querySelectorAll("h4")[0].innerHTML = sum1;
            } else {
                document.querySelectorAll("h3")[1].innerHTML = "OUT😢😢 Computer is batting now🏏";
                playerTurn = false; // switch to computer batting
            }
        } else {
            // Computer batting
            if (n1 !== n2) {
                sum2 += n2;
                document.querySelectorAll("h4")[1].innerHTML = sum2; // make sure this index is correct
                if (sum2 > sum1) {
                    displayResult();
                }
            } else {
                document.querySelectorAll("h3")[1].innerHTML = "Wicket😎😎";
                displayResult();
            }
        }
    });
});

function displayResult() {
    if (sum1 > sum2) {
        document.querySelectorAll("h3")[1].innerHTML = "Congratulations🎉 You have won by " + (sum1 - sum2) + " runs";
        var sound2 = new Audio("sounds/wow-female-voice-156878.mp3");
        sound2.play();
    } else if (sum2 > sum1) {
        document.querySelectorAll("h3")[1].innerHTML = "Defeated😥 You were defeated by " + (sum2 - sum1) + " runs";
        //sound2.addEventListener("ended",function(){
        var sound3 = new Audio("sounds/we-need-to-try-again-child-378872.mp3");
        sound3.play();
        //});
    } else {
        document.querySelectorAll("h3")[1].innerHTML = "Match Tie🤝";
    }
    document.querySelector("h2").innerHTML = "Refresh the page to start new game😍😍";
    // Disable buttons after game ends
    document.querySelectorAll(".n").forEach(function(btn){ btn.disabled = true; });
}



} 








































































else
{
// Start game when player chooses bowling
//document.querySelectorAll(".b")[1].addEventListener("click", playerBowlionh);
playerBowling();

function playerBowling() {
    document.querySelectorAll("h3")[1].innerHTML = "Wait 20 ⌛ seconds";
    var sound1 = new Audio("sounds/20-seconds-game-countdown-142456.mp3");
    sound1.play();
    sound1.addEventListener("ended", function () {
        document.querySelectorAll("h3")[1].innerHTML = "Choose a number until you get Wicket (bowling🏏)";
    });
}

// Add click listeners to all number buttons
document.querySelectorAll(".n").forEach(function(btn) {
    btn.addEventListener("click", function() {
        var n1 = Number(this.innerHTML); // Player choice
        var n2 = Math.floor(Math.random() * 10) + 1; // Computer choice

        // Update images based on your actual image names
        document.querySelectorAll("img")[0].src = "images/" + imgNames[n1 - 1];
        document.querySelectorAll("img")[2].src = "images/" + imgNames[n2 - 1];

        if (playerTurn) {
            // Player bowling
            if (n1 !== n2) {
                sum2 += n2;
                document.querySelectorAll("h4")[1].innerHTML = sum2;
            } else {
                document.querySelectorAll("h3")[1].innerHTML = "Wicket😎😎 Player is batting now🏏";
                playerTurn = false; // switch to computer bowling
            }
        } else {
            // player batting 
            if (n1 !== n2) {
                sum1 += n1;
                document.querySelectorAll("h4")[0].innerHTML = sum1; // make sure this index is correct
                if (sum2 < sum1) {
                    displayResult();
                }
            } else {
                document.querySelectorAll("h3")[1].innerHTML = "out😥😥";
                displayResult();
            }
        }
    });
});

function displayResult() {
    if (sum1 > sum2) {
        document.querySelectorAll("h3")[1].innerHTML = "Congratulations🎉 You have won by " + (sum1 - sum2) + " runs";
        var sound2 = new Audio("sounds/wow-female-voice-156878.mp3");
        sound2.play();
    } else if (sum2 > sum1) {
        document.querySelectorAll("h3")[1].innerHTML = "Defeated😥 You were defeated by " + (sum2 - sum1) + " runs";
       // sound2.addEventListener("ended",function(){
        var sound3 = new Audio("sounds/we-need-to-try-again-child-378872.mp3");
        sound3.play();
        //});
    } else {
        document.querySelectorAll("h3")[1].innerHTML = "Match Tie🤝";
    }
    document.querySelector("h2").innerHTML = "Refresh the page to start new game😍😍";
    // Disable buttons after game ends
    document.querySelectorAll(".n").forEach(function(btn){ btn.disabled = true; });
}



}
});
}
