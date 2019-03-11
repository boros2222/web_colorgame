var squares = document.querySelectorAll(".square");
var numSquares = 6;
var colors = getRandomColors(numSquares);
var pickedColor = pickColor(numSquares);
document.querySelector("#colorText").textContent = colors[pickedColor];
setColors();

document.querySelector("#newColors").addEventListener("click", function() {
	newGame();
});

document.querySelector("#easy").addEventListener("click", function() {
	this.classList.add("active");
	document.querySelector("#hard").classList.remove("active");

	numSquares = 3;
	newGame();
});

document.querySelector("#hard").addEventListener("click", function() {
	this.classList.add("active");
	document.querySelector("#easy").classList.remove("active");

	numSquares = 6;
	newGame();
});

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		if (this.style.backgroundColor === colors[pickedColor]) {
			document.querySelector("#isCorrect").textContent = "Correct!";
			document.querySelector(".jumbotron").style.backgroundColor = colors[pickedColor];
			for (var i = 0; i < squares.length; i++) {
				squares[i].style.backgroundColor = colors[pickedColor];
			}
			document.querySelector("#newColors").textContent = "Play Again?";
		}
		else {
			this.style.backgroundColor = "rgb(63, 63, 63)";
			document.querySelector("#isCorrect").textContent = "Try Again!";
		}
	});
}

function newGame() {
	document.querySelector("#newColors").textContent = "New Colors";
	document.querySelector(".jumbotron").style.backgroundColor = "rgb(66, 127, 188)";
	document.querySelector("#isCorrect").textContent = "";

	colors = getRandomColors(numSquares);
	pickedColor = pickColor(numSquares);
	document.querySelector("#colorText").textContent = colors[pickedColor];
	setColors();
}

function randomColor() {
	var color = "rgb(" + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ")";

	return color;
}

function getRandomColors(num) {
	var array = [];
	for (var i = 0; i < num; i++)
		array.push(randomColor());

	return array;
}

function pickColor(num) {
	return Math.floor(Math.random() * num);
}

function setColors() {
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
}