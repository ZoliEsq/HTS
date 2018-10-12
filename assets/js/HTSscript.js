var embutton = document.getElementById("em-button");
var trobutton = document.getElementById("tro-button");
var signbutton = document.getElementById("sign-button");
var workbutton = document.getElementById("work-button");
var unibutton = document.getElementById("uni-button");
var orderbutton = document.getElementById("order-button");
var embroidery = document.querySelector(".embroidery");
var trophy = document.querySelector(".trophy");
var sign = document.querySelector(".signban");
var work = document.querySelector(".work");
var uniform = document.querySelector(".uniform");
var order = document.querySelector(".order");

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
function scrollToWork() {
	work.scrollIntoView({
		behavior: 'smooth'
	});
}
function scrollToUniform() {
	uniform.scrollIntoView({
		behavior: 'smooth'
	});
}
function scrollToOrder() {
	order.scrollIntoView({
		behavior: 'smooth'
	});
}


embutton.addEventListener("click", scrollToEmbroidery);
trobutton.addEventListener("click", scrollToTrophy);
signbutton.addEventListener("click", scrollToSign);
workbutton.addEventListener("click", scrollToWork);
unibutton.addEventListener("click", scrollToUniform);
orderbutton.addEventListener("click", scrollToOrder);
