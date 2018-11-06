$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

		 						
	
var correct = 0;
var wrong = 0;
var q1 = {
	question : "Who is Spongebob Squarepant's best friend?",
	possibleAnswers : ['A. Patrick Star',
				 'B. Squidward Tentacle',
				 'C. Sandy Cheeks',
				 'D. Gary the Snail'],
	flags : [true, false, false, false],
	answer : 'A. Patrick Star'
};

var q2 = {
	question: "Where does Spongebob work?",
	possibleAnswers: ['A. Chum Bucket',
				 'B. Weenie Hut Jr.',
				 'C. Krusty Krab',
				 'D. Pretty Patties'],
	flags : [false, false, true, false],
	answer : 'C. Krusty Krab'
};

var q3 = {
	question : "What is one thing Spongebob just cannot seem to obtain?",
	possibleAnswers : ['A. Spatula',
				 'B. Drivers License',
				 'C. Friends',
				 'D. Water'],
	flags : [false, true, false, false],
	answer : 'B. Drivers License'
};

var q4 = {
	question : "What type of self defense does Spongebob enjoy the most?",
	possibleAnswers : ['A. Karate',
				 'B. Kungfu',
				 'C. Taichi',
				 'D. Taekwondo'],
	flags : [true, false, false, false],
	answer : 'A. Karate'
};

var q5 = {
	question : "What famous song does Spongebob sing to Plankton?",
	possibleAnswers : ['A. Happy Birthday',
				 'B. F.U.N',
				 'C. The Campfire Song Song',
				 'D. Best Day Ever'],
	flags : [false, true, false, false],
	answer : 'B. F.U.N'
};

var q6 = {
	question : "What does Mr.Krab's love the most?",
	possibleAnswers : ['A. Money',
				 'B. His daughter Pearl',
				 'C. Krabby Patties',
				 'D. The Chum Bucket'],
	flags : [true, false, false, false],
	answer : 'A. Money'
};

var q7 = {
	question : "What's funnier than 24?",
	possibleAnswers : ['A. 22',
				 'B. 23',
				 'C. 25',
				 'D. 26'],
	flags : [false, false, true, false],
	answer : 'C. 24'
};

var q8 = {
	question : "Where does Patrick live?",
	possibleAnswers : ['A. In a Pineapple',
				 'B. Under a Rock',
				 'C. In an Anchor',
				 'D. In a Tiki Head'],
	flags : [false, true, false, false],
	answer : 'B. Under a Rock'
};

var q9 = {
	question : "What is the most important thing about blowing bubbles?",
	possibleAnswers : ['A. The Soap',
				 'B. The Wind',
				 'C. The Angle',
				 'D. The Technique'],
	flags : [false, false, false, true],
	answer : 'D. The Technique'
};

var q10 = {
	question : "Who was flickering the lights?",
	possibleAnswers : ['A. The Hash Slinging Slasher',
				  'B. Nosferatu',
				  'C. Squidward',
				  'D. Old Man Jenkins'],
	flags : [false, true, false, false],
	answer : 'B. Nosferatu'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//		for (var i=0; i<questionArray.length; i++) {
//			$('.question').append('<p>'+questionArray[i].question+'</p>');
//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
//			}
//			$('#possibleAnswers').on('click', function() {


//		console.log("click");
//		countdownTimer.start();
//		for (var i = 0; i < questionArray.length; i++) {
//			console.log(i);

//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
//			$('.question').html(questionArray[i].question);
//			while (countdownTimer != 0) {

//			}
		
//	});
//	$('#startButton').click(countdownTimer.start);

//}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});