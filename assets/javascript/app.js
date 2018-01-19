$(document).ready(function(){

	var section = $(".game-area");
	var section2 = $(".game-area2");

	$(document).on("click", "#start", function(event){
		game.start();

	});

	$(document).on("click", "#done", function(event){
		game.done();
	});

	var questions = [
		{
			question: "Which of the following sets Old Time music apart from Bluegrass or other styles?",
			choices: ["It usually includes electric stringed instruments.", "A 5-string Banjo with a resonator is typically used.", "The fiddle uses cross-tuning.", "This genre originated with Bill Monroe."],
			correctAnswer: "The fiddle uses cross-tuning."
		},

		{
			question: "Compared with Bluegrass & Western Swing music, Old Time more commonly uses tunes rather than songs, for what reason?",
			choices: ["Old Time works from different tonal centers.", "Old Time is largely dance-centered & songs were largely meant for listening.", "Clogging didn't work with songs.", "Old Time music derived from European Folk dance."],
			correctAnswer: "Old Time is largely dance-centered & songs were largely meant for listening."
		},

		{
			question: "The most common stringed instruments in an Old Time band include clawhammer banjo, guitar, fiddle, mandolin & upright bass but usually feature which instrument as lead?",
			choices: ["clawhammer banjo", "guitar", "mandolin", "fiddle"],
			correctAnswer: "fiddle"
		},

		{
			question: "Old Time fiddles are often used in different ways. Which of the following is a common setup for an Old Time fiddler?",
			choices: ["No use of a chin rest", "Use of a regular bridge, rather than flattened", "Use of only one fine tuner", "Use of a pickup for amplification."],
			correctAnswer: "No use of a chin rest"
		},

		{
			question: "The roots of Old Time music come from the British Isles, primarily England and Scotland, with some Irish influence. What other European countries influenced this music genre?",
			choices: ["France & Germany", "Germany & Spain", "Italy & France", "Austria & Germany"],
			correctAnswer: "France & Germany"
		},

		{
			question: "Which of the following Old Time fiddlers came the from Mount Airy region of North Carolina's Appalachian Mountains and was known for his expressive use of syncopation and sliding ornamentation?",
			choices: ["Bruce Molsky", "Clyde Davenport", "Mike Seeger", "Tommy Jarrell"],
			correctAnswer: "Tommy Jarrell"

		}];

		var game = {
			correct: 0,
			incorrect: 0,
			counter: 60,

			countdown: function() {
				$("#start").attr("disabled", "disabled");
				game.counter--;
				$("#counter-number").html(game.counter);

				if (game.counter === 0) {
					$("#countdown").append("<h5 class='timeUp'>* Your time is up! *</h5>");
					game.done();

				}
			},

			start: function() {
        section.html("<p> </p>");
				section2.html("<p> </p>");
				$("#countdown h4, h5").remove();
        game.incorrect=0;
        game.correct=0;

				timer = setInterval(game.countdown, 1000);
				$("#countdown").append("<h4>Time Left: <span id='counter-number'>60</span> Seconds</h4>");

				for (var i = 0; i < questions.length; i++) {
					// section.append('<h6>' + '<br>' + questions[i].question + '<br>' + '</h6>');
					section.append(`<h6> <br> ${questions[i].question} <br> </h6>`);

					for (var j = 0; j < questions[i].choices.length; j++){
						section.append('<input type="radio" name="question' + '-' + i + '"value="' + questions[i].choices[j] + '" >'  + ' ' + questions[i].choices[j] + '<br>');
						// section.append(`<input type="radio" name="question '-' i '"value="' questions[i].choices[j] > ' ' questions[i].choices[j] <br>`);
            }
				}
				section.append("<div style='text-align: center'> <button class='button' id='done'>DONE</button></div>");
			},

			done: function() {
        clearInterval(timer);

				$.each($("input[type='radio']:checked"), function(index, checkedElement) {
					if ($(checkedElement).val() == questions[index].correctAnswer) {
						console.log("Checked element is", checkedElement);
						game.correct++;
            console.log("correct",game.correct);
					} else {
						game.incorrect++;
            console.log("incorrect",game.incorrect);
					}

				});

				this.results();
				console.log("This is game.counter",game.counter);
        game.counter=60;

        console.log("This is the counter now", game.counter);

				},

				results: function() {
				clearInterval(timer);

				section.html("<h5 style='text-align: center '> This game is done! Press 'Game Start' to try again!</h5>");
				section2.append("<li> Correct Answers: " + this.correct + "</li>");
				section2.append("<li> Incorrect Answers: " + this.incorrect + "</li>");
				section2.append("<li> Unanswered Questions: " + (questions.length - (this.incorrect + this.correct)) + "</li>");

				$("#start").removeAttr("disabled");

				}

		};


})







