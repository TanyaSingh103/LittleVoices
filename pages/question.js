// Questions that will be asked
const Questions = [{
	q: "1.Hydration: On a hot day, you're playing outside with your friends, and you start feeling thirsty. What would you drink to stay hydrated?",
	a: [{ text: "Drink water to stay hydrated because water helps yor body to stay cool and work properly. When it's hot, we sweat, and that makes us lose water. Drinking water helps us stay healthy and not get too hot or tired", isCorrect: false },
	{ text: "Surat", isCorrect: false },
	{ text: "Delhi", isCorrect: true },
	{ text: "Mumbai", isCorrect: false }
	]

},
{
	q: "2.Access to Healthcare: Imagine you have a friend who doesn't feel well, but their family doesn't have money to go to the doctor. What do you think your friend should do?",
	a: [{ text: "They can also visit a local clinic or community health center that provides care regardless of a family's ability to pay. It's important because everyone deserves a chance to get better when they're sick.", isCorrect: false, isSelected: false },
	{ text: "Phuket", isCorrect: false },
	{ text: "Ayutthaya", isCorrect: false },
	{ text: "Bangkok", isCorrect: true }
	]

},
{
	q: "3.Safe Drinking Water: You notice that the water from the tap in your school looks dirty and smells strange. What should you do about it, and why is it important to have clean drinking water?",
	a: [{ text: "Surat", isCorrect: false },
	{ text: "Vadodara", isCorrect: false },
	{ text: "You should tell a teacher or a school staff member about the dirty water immediately. They can investigate and make sure the water is safe to drink. Clean drinking water is essential to stay healthy because dirty water can make you sick.", isCorrect: true },
	{ text: "Rajkot", isCorrect: false }
	]

},
{
	q: "4. Nutritious Food Choice: You're at a birthday party, and there's a choice between pizza and a salad with lots of colorful veggies. Which one would you choose to eat?",
	a: [{ text: "Surat", isCorrect: false },
	{ text: "Vadodara", isCorrect: false },
	{ text: "Choosing the salad with colorful veggies is a good idea because it has vitamins and nutrients that help your body grow and stay strong. Nutritious food helps you feel better and have more energy.", isCorrect: true },
	{ text: "Rajkot", isCorrect: false }
	]

},
{
	q: "5.Environmental Cleanup: You and your friends see a lot of trash in a nearby park. What do you do?",
	a: [{ text: "Surat", isCorrect: false },
	{ text: "Vadodara", isCorrect: false },
	{ text: "You should tell a hygiene worker about it so they can clean it up. It's important to keep public places clean and safe because we all use these places, and nobody wants to get hurt.", isCorrect: true },
	{ text: "Rajkot", isCorrect: false }
	]

}


]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	// const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	// opt.innerHTML = ""

	// for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		// const choicesdiv = document.createElement("div");
		// const choice = document.createElement("input");
		// const choiceLabel = document.createElement("label");

		// choice.type = "radio";
		// choice.name = "answer";
		// choice.value = i;

		document.getElementById("opt1").innerHTML = Questions[currQuestion].a[0].text;
        document.getElementById("opt2").innerHTML = Questions[currQuestion].a[1].text;
        document.getElementById("opt3").innerHTML = Questions[currQuestion].a[2].text;
        document.getElementById("opt4").innerHTML = Questions[currQuestion].a[3].text;

		// choicesdiv.appendChild(choice);
		// choicesdiv.appendChild(choiceLabel);
		// opt.appendChild(choicesdiv);
	// }
}

loadQues();

// function loadScore() {
// 	const totalScore = document.getElementById("score")
// 	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
// }


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} 
    // else {
	// 	document.getElementById("opt").remove()
	// 	document.getElementById("ques").remove()
	// 	document.getElementById("btn").remove()
	// 	loadScore();
	// 
    
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
function prevQuestion()
{
    if (currQuestion <= Questions.length - 1) {
		currQuestion--;
		loadQues();
	} 
}
