var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".squares"); //this gives an array of all the six divs
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")


init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	//mode buttons
	for(var i=0; i < modeButtons.length ; i++){
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//below is the turnary operator. it takes three arguement.
			//a condition, then and else
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

			// if(this.textContent === "Easy"){
			// 	numSquares = 3;
			// }else{
			// 	numSquares= 6;
			// }
			reset();
		});
	}
}

function setUpSquares(){
	// assigning colors to the div squares
	for(var i =0; i<squares.length; i++){
		//add initial colors to the squares
		// add click listeners to the squares
		squares[i].addEventListener("click", function(){
			//grab color of picked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
			}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of square
	for(var i =0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	//change button name back to New Colors
	resetButton.textContent = "New Colors";
	//change background color of h1 back to normal
	h1.style.backgroundColor = "steelblue"; // colors in js has to be in quotes
	//remove any text from span
	messageDisplay.textContent = " ";
}

// reset button functionality
resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through each color
	for(var i=0; i<squares.length; i++){
		//change each color to match given color in the squares array
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	// math.random gives decimal numbers and math.floor chops off everything after the decimal
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i=0; i< num; i++){
		arr.push(randomColor());
	//get random color and push into array
	}
	//return that array 
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")" ; // add spaces after comma
}



















