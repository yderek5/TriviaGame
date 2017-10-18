$(document).ready(function() {
	$("#page-content").addClass("invisible");
	// When user clicks start button
	$("#start-button").on("click", function() {
		// start timer
		$("#start-button").addClass("invisible");
		$("#page-content").removeClass("invisible");
		showFirstQuestion();
	});

	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var currentCorrect;
	var currentIncorrect;

	function showFirstQuestion() {
		var isAnswerCorrect = false;
		$("#questionSpot").html("What is my name?");
		$("#answer1").html("Derek");
		$("#answer2").html("Jimmy");
		$("#answer3").html("Bob");
		$("#answer4").html("Roy");
		// answer logic
		// first answer choice
		$("#answer1").on("click", function() {
			isAnswerCorrect = true;
			if(isAnswerCorrect) {
				correctAnswers += 1;
			} 
			else {
				incorrectAnswers += 1;
			}
			$(".hideThis").addClass("invisible");
			$("#questionSpot").html("Congratulations you got the correct answer! --- " + "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
			setTimeout(function() {showSecondQuestion()}, 3000);
		});
		// second answer choice
		$("#answer2").on("click", function() {
			if(isAnswerCorrect) {
				correctAnswers += 1;
			} else {incorrectAnswers += 1;}
			$(".hideThis").addClass("invisible");
			$("#questionSpot").html("Sorry! The correct answer was: Derek --- " + "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
			setTimeout(function() {showSecondQuestion()}, 3000);
		});
		// third answer choice
		$("#answer3").on("click", function() {
			if(isAnswerCorrect) {
				correctAnswers += 1;
			} 
			else {
				incorrectAnswers += 1;
			}
			$(".hideThis").addClass("invisible");
			$("#questionSpot").html("Sorry! The correct answer was: Derek --- " + "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
			setTimeout(function() {showSecondQuestion()}, 3000);
		});
		// fourth answer choice
		$("#answer4").on("click", function() {
			if(isAnswerCorrect) {
				correctAnswers += 1;
			} 
			else {
				incorrectAnswers += 1;
			}
			$(".hideThis").addClass("invisible");
			$("#questionSpot").html("Sorry! The correct answer was: Derek --- " + "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
			setTimeout(function() {showSecondQuestion()}, 3000);
		});
	} // end of first question


	function showSecondQuestion() {
		var isAnswerCorrect = false;
		$(".hideThis").removeClass("invisible");
		$("#questionSpot").html("How old am I?");
		$("#answer1").html("21");
		$("#answer2").html("19");
		$("#answer3").html("15");
		$("#answer4").html("12");
		// answer logic
		// first answer choice
		$("#answer1").on("click", function() {
			if(isAnswerCorrect) {
				correctAnswers += 1;
			} 
			else {
				incorrectAnswers += 1;
			}
			$(".hideThis").addClass("invisible");
			$("#questionSpot").html("Sorry! The correct answer was: 19 --- " + "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
			setTimeout(function() {showThirdQuestion()}, 3000);
		});
		// second answer choice
		$("#answer2").on("click", function() {
			isAnswerCorrect = true;
			if(isAnswerCorrect) {
				correctAnswers += 1;
			} 
			else {
				incorrectAnswers +=1;
			}
			$("#hideThis").addClass("invisible");
			$("#questionSpot").html("Congratulations you got the correct answer! --- " + "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
			setTimeout(function() {showThirdQuestion()}, 3000);
		});
		// third answer choice
		$("#answer3").on("click", function() {
			if(isAnswerCorrect) {
				correctAnswers +=1;
			} 
			else {
				incorrectAnswers +=1;
			}
			$(".hideThis").addClass("invisible");
			$("#questionSpot").html("Sorry! The correct answer was: 19 --- " + "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
			setTimeout(function() {showThirdQuestion()}, 3000);
		});
		// fourth answer choice
		$("#answer4").on("click", function() {
			if(isAnswerCorrect) {
				correctAnswers +=1;
			} 
			else {
				incorrectAnswers +=1;
			}
			$(".hideThis").addClass("invisible");
			$("#questionSpot").html("Sorry! The correct answer was: 19 --- " + "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
			setTimeout(function() {showThirdQuestion()}, 3000);
		});
	} // end of second question


	function showThirdQuestion() {
		var isAnswerCorrect = false;
		$(".hideThis").removeClass("invisible");
		$("#questionSpot").html("What's my favorite food?");
		$("#answer1").html("Pizza");
		$("#answer2").html("Stir Fry");
		$("#answer3").html("Cheese Burgers");
		$("#answer4").html("Waffles");
		// answer logic
		$("#answer1").on("click", function() {
			if(isAnswerCorrect) {
				correctAnswers +=1;
			} 
			else {
				incorrectAnswers +=1;
			}
			$(".hideThis").addClass("invisible");
			$("#questionSpot").html("Sorry! The correct answer was: Cheese Burgers --- " + "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);

		});
		$("#answer3").on("click", function() {
			isAnswerCorrect = true;
			if(isAnswerCorrect) {
				correctAnswers +=1;
			} 
			else {
				incorrectAnswers +=1;
			}
			$("#hideThis").addClass("invisible");
			$("#questionSpot").html("Congratulations you got the correct answer! --- " + "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);

		});
		$("#answer2").on("click", function() {
			if(isAnswerCorrect) {
				correctAnswers +=1;
			} 
			else {
				incorrectAnswers +=1;
			}
			$(".hideThis").addClass("invisible");
			$("#questionSpot").html("Sorry! The correct answer was: Cheese Burgers --- " + "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);

		});
		$("#answer4").on("click", function() {
			if(isAnswerCorrect) {
				correctAnswers +=1;
			} 
			else {
				incorrectAnswers +=1;
			}
			$(".hideThis").addClass("invisible");
			$("#questionSpot").html("Sorry! The correct answer was: Cheese Burgers --- " + "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
		});
	} // end of third question


























































}); // NO CODE BELOW HERE