
function submitAnswers(){
  var total = 5 ;
  var score = 0 ;

  //Get User Input
  var q1 = document.forms ["quiz"] ["q1"].value ;
  var q2 = document.forms ["quiz"] ["q2"].value ;
  var q3 = document.forms ["quiz"] ["q3"].value ;
  var q4 = document.forms ["quiz"] ["q4"].value ;
  var q5 = document.forms ["quiz"] ["q5"].value ;

//validation
for (i = 1; i <= total; i++) {
  if (eval ('q' + i) == null || eval ('q' + i) == "") {
   alert("Oops, you missed question #  " + i);
  return false;
};
};
//set Correct Answers
var answers = ['b', 'a', 'd', 'b', 'd'];
//check answers
for(i = 1; i <= total; i++) {
  if (eval('q' + i) == answers[i - 1]) {
    score++
  }
}
//display results

var results = document.getElementById('results');
results.innerHTML = '<h3>You score is  <strong>' + score + '</strong>of <strong>' + total + '</strong></h3>';
        alert ("You scored  " + score + " out of  " + total);
return false;
};
