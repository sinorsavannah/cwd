let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {
	event.preventDefault();

let score=0
for (let questionnumber = 1; questionnumber <= 10; questionnumber++) {
    let answer = Number(document.querySelector("#q" + questionnumber).value)
//I could not figure how to make javascrip recognize even or odd numbers so I used the division and remaineder tool (?) as a roundabout way to differentiate between the two
	if (questionnumber % 2 === 1) {
      score += (answer - 1);
    }

	else {
		score += (5 - answer)
	}
}
let finalScore= score*2.5
document.querySelector("#result").textContent = "Your score: " + finalScore
})