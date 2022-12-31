var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var genColorButton = document.getElementById("genTwoColor");

//set the background color and display the current Hex Color Code
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//get a random color
function getRandomColor(){
	let letters = "0123456789ABCDEF";
	let color = "#";
	for(let i = 0; i < 6; i++){
		color += letters[Math.floor(Math.random() * 16)]; 
	}
	return color;
}

//get two random color value
function getTwoNewColor(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

genColorButton.addEventListener("click", getTwoNewColor);
