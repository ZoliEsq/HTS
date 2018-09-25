var embutton = document.getElementById("em-button");
var trobutton = document.getElementById("tro-button");
var signbutton = document.getElementById("sign-button");
var embroidery = document.querySelector(".embroidery");
var trophy = document.querySelector(".trophy");
var sign = document.querySelector(".signban");

function scrollToEmbroidery() {
	embroidery.scrollIntoView({
		behavior: 'smooth'
	});
}
function scrollToTrophy() {
	trophy.scrollIntoView({
		behavior: 'smooth'
	});
}
function scrollToSign() {
	sign.scrollIntoView({
		behavior: 'smooth'
	});
}

embutton.addEventListener("click", scrollToEmbroidery);
trobutton.addEventListener("click", scrollToTrophy);
signbutton.addEventListener("click", scrollToSign);