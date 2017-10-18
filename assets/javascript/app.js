$(document).ready(function() {
    $("#page-content").addClass("invisible");
    // When user clicks start button
    $("#start-button").on("click", function() {
        // start timer
        $("#start-button").addClass("invisible");
        $("#page-content").removeClass("invisible");
        showFirstQuestion();
        $(".hideThis").removeClass("invisible");
        correctAnswers = 0;
        incorrectAnswers = 0;
        isFirstCorrect = false;
        isSecondCorrect = false;
        isThirdCorrect = false;
    });

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var isFirstCorrect = false;
    var isSecondCorrect = false;
    var isThirdCorrect = false;


    function showFirstQuestion() {
        $("#questionSpot").html("What is my name?");
        $("#answer1").html("Derek");
        $("#answer2").html("Jimmy");
        $("#answer3").html("Bob");
        $("#answer4").html("Roy");
        // answer logic
        // first answer choice
        $("#answer1").on("click", function() {
            isFirstCorrect = true;
            correctAnswers = 1;
            $(".hideThis").addClass("invisible");
            $("#questionSpot").html("Congratulations you got the correct answer! --- " +
                "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
            setTimeout(function() {
                return showSecondQuestion();
            }, 3000);
        });
        // second answer choice
        $("#answer2").on("click", function() {
            if (isFirstCorrect) {
                incorrectAnswers = 0;
            } else {
                incorrectAnswers = 1;
            }
            $(".hideThis").addClass("invisible");
            $("#questionSpot").html("Sorry! The correct answer was: Derek --- " +
                "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
            setTimeout(function() {
              return showSecondQuestion();
            }, 3000);
        });
        // third answer choice
        $("#answer3").on("click", function() {
            if (isFirstCorrect) {
                incorrectAnswers = 0;
            } else {
                incorrectAnswers = 1;
            }
            $(".hideThis").addClass("invisible");
            $("#questionSpot").html("Sorry! The correct answer was: Derek --- " +
                "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
            setTimeout(function() {
               return showSecondQuestion();
            }, 3000);
        });
        // fourth answer choice
        $("#answer4").on("click", function() {
            if (isFirstCorrect) {
                incorrectAnswers = 0;
            } else {
                incorrectAnswers = 1;
            }
            $(".hideThis").addClass("invisible");
            $("#questionSpot").html("Sorry! The correct answer was: Derek --- " +
                "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
            setTimeout(function() {
               return showSecondQuestion();
            }, 3000);
        });
    } // end of first question


    function showSecondQuestion() {
        isAnswerCorrect = false;
        $(".hideThis").removeClass("invisible");
        $("#questionSpot").html("How old am I?");
        $("#answer1").html("21");
        $("#answer2").html("19");
        $("#answer3").html("15");
        $("#answer4").html("12");
        // answer logic
        // first answer choice
        $("#answer1").on("click", function() {
            if (isFirstCorrect && isSecondCorrect) {
                correctAnswers = 2;
            } else if (isFirstCorrect === false && isSecondCorrect === false) {
                incorrectAnswers = 2;
            } else {
                correctAnswers = 1;
                incorrectAnswers = 1;
            }
            $(".hideThis").addClass("invisible");
            $("#questionSpot").html("Sorry! The correct answer was: 19 --- " +
                "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
            setTimeout(function() {
                showThirdQuestion();
                return;
            }, 3000);
        });
        // second answer choice
        $("#answer2").on("click", function() {
            isSecondCorrect = true;
            if (isFirstCorrect && isSecondCorrect) {
                correctAnswers = 2;
            } else if (isFirstCorrect === false && isSecondCorrect === false) {
                incorrectAnswers = 2;
            } else {
                correctAnswers = 1;
                incorrectAnswers = 1;
            }
            $("#hideThis").addClass("invisible");
            $("#questionSpot").html("Congratulations you got the correct answer! --- " +
                "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
            setTimeout(function() {
                showThirdQuestion();
                return;
            }, 3000);
        });
        // third answer choice
        $("#answer3").on("click", function() {
            if (isFirstCorrect && isSecondCorrect) {
                correctAnswers = 2;
            } else if (isFirstCorrect === false && isSecondCorrect === false) {
                incorrectAnswers = 2;
            } else {
                correctAnswers = 1;
                incorrectAnswers = 1;
            }
            $(".hideThis").addClass("invisible");
            $("#questionSpot").html("Sorry! The correct answer was: 19 --- " +
                "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
            setTimeout(function() {
                showThirdQuestion();
                return;
            }, 3000);
        });
        // fourth answer choice
        $("#answer4").on("click", function() {
            if (isFirstCorrect && isSecondCorrect) {
                correctAnswers = 2;
            } else if (isFirstCorrect === false && isSecondCorrect === false) {
                incorrectAnswers = 2;
            } else {
                correctAnswers = 1;
                incorrectAnswers = 1;
            }
            $(".hideThis").addClass("invisible");
            $("#questionSpot").html("Sorry! The correct answer was: 19 --- " +
                "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
            setTimeout(function() {
                showThirdQuestion()
            }, 3000);
            return;
        });
    } // end of second question


    function showThirdQuestion() {
        $(".hideThis").removeClass("invisible");
        $("#questionSpot").html("What's my favorite food?");
        $("#answer1").html("Pizza");
        $("#answer2").html("Stir Fry");
        $("#answer3").html("Cheese Burgers");
        $("#answer4").html("Waffles");
        // answer logic
        $("#answer1").on("click", function() {
            if (isFirstCorrect && isSecondCorrect && isThirdCorrect) {
                correctAnswers = 3;
            } else if (isFirstCorrect === false && isSecondCorrect === false && isThirdCorrect === false) {
                incorrectAnswers = 3;
            } else if (isFirstCorrect && isSecondCorrect && isThirdCorrect === false) {
                correctAnswers = 2;
                incorrectAnswers = 1;
            } else if(isFirstCorrect === false && isSecondCorrect && isThirdCorrect) {
                correctAnswers = 2;
                incorrectAnswers = 1;
            } else if(isFirstCorrect === false && isSecondCorrect === false && isThirdCorrect) {
                incorrectAnswers = 2;
                correctAnswers = 1;
            } else {
                correctAnswers = 1;
                incorrectAnswers = 2;
            }
            $(".hideThis").addClass("invisible");
            $("#questionSpot").html("Sorry! The correct answer was: Cheese Burgers --- " +
                "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
            setTimeout(function() {showResults();
            }, 3000);
        });
        $("#answer3").on("click", function() {
            isThirdCorrect = true;
            if (isFirstCorrect && isSecondCorrect && isThirdCorrect) {
                correctAnswers = 3;
            } else if (isFirstCorrect === false && isSecondCorrect === false && isThirdCorrect === false) {
                incorrectAnswers = 3;
            } else if (isFirstCorrect && isSecondCorrect && isThirdCorrect === false) {
                correctAnswers = 2;
                incorrectAnswers = 1;
            } else if(isFirstCorrect === false && isSecondCorrect && isThirdCorrect) {
                correctAnswers = 2;
                incorrectAnswers = 1;
            } else if(isFirstCorrect === false && isSecondCorrect === false && isThirdCorrect) {
                incorrectAnswers = 2;
                correctAnswers = 1;
            } else {
                correctAnswers = 1;
                incorrectAnswers = 2;
            }
            $("#hideThis").addClass("invisible");
            $("#questionSpot").html("Congratulations you got the correct answer! --- " +
                "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
            setTimeout(function() {showResults();
            }, 3000);
        });
        $("#answer2").on("click", function() {
            if (isFirstCorrect && isSecondCorrect && isThirdCorrect) {
                correctAnswers = 3;
            } else if (isFirstCorrect === false && isSecondCorrect === false && isThirdCorrect === false) {
                incorrectAnswers = 3;
            } else if (isFirstCorrect && isSecondCorrect && isThirdCorrect === false) {
                correctAnswers = 2;
                incorrectAnswers = 1;
            } else if(isFirstCorrect === false && isSecondCorrect && isThirdCorrect) {
                correctAnswers = 2;
                incorrectAnswers = 1;
            } else if(isFirstCorrect === false && isSecondCorrect === false && isThirdCorrect) {
                incorrectAnswers = 2;
                correctAnswers = 1;
            } else {
                correctAnswers = 1;
                incorrectAnswers = 2;
            }
            $(".hideThis").addClass("invisible");
            $("#questionSpot").html("Sorry! The correct answer was: Cheese Burgers --- " +
                "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
            setTimeout(function() {showResults();
            }, 3000);
        });
        $("#answer4").on("click", function() {
            if (isFirstCorrect && isSecondCorrect && isThirdCorrect) {
                correctAnswers = 3;
            } else if (isFirstCorrect === false && isSecondCorrect === false && isThirdCorrect === false) {
                incorrectAnswers = 3;
            } else if (isFirstCorrect && isSecondCorrect && isThirdCorrect === false) {
                correctAnswers = 2;
                incorrectAnswers = 1;
            } else if(isFirstCorrect === false && isSecondCorrect && isThirdCorrect) {
                correctAnswers = 2;
                incorrectAnswers = 1;
            } else if(isFirstCorrect === false && isSecondCorrect === false && isThirdCorrect) {
                incorrectAnswers = 2;
                correctAnswers = 1;
            } else {
                correctAnswers = 1;
                incorrectAnswers = 2;
            }
            $(".hideThis").addClass("invisible");
            $("#questionSpot").html("Sorry! The correct answer was: Cheese Burgers --- " +
                "Correct Answers: " + correctAnswers + " --- " + "Incorrect Answers: " + incorrectAnswers);
            setTimeout(function() {showResults();
            }, 3000);
        });
    } // end of third question

    function showResults() {
        $(".hideThis").addClass("invisible");
        $("#questionSpot").html("Correct Answers: " + correctAnswers + " --- "
            + "Incorrect Answers: " + incorrectAnswers);
        setTimeout(function() {location.reload();
        }, 5000);
    }









}); // NO CODE BELOW HERE