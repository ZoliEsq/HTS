var button = document.getElementById("em-button");
var scroll = document.querySelector(".embroidery");

function scrollToEmbroidery() {
	scroll.scrollIntoView({
		behavior: 'smooth'
	});
}

button.addEventListener("click", scrollToEmbroidery);