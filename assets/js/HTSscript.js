const embutton = document.getElementById("em-button");
const trobutton = document.getElementById("tro-button");
const signbutton = document.getElementById("sign-button");
const workbutton = document.getElementById("work-button");
const unibutton = document.getElementById("uni-button");
const orderbutton = document.getElementById("order-button");
const embroidery = document.querySelector(".embroidery");
const trophy = document.querySelector(".trophy");
const sign = document.querySelector(".signban");
const work = document.querySelector(".work");
const uniform = document.querySelector(".uniform");
const order = document.querySelector(".order");
const menu = document.getElementById("catalog");

const scrollToEmbroidery = () => {
	embroidery.scrollIntoView({
		behavior: 'smooth'
	});
}
const scrollToTrophy = () => {
	trophy.scrollIntoView({
		behavior: 'smooth'
	});
}
const scrollToSign = () => {
	sign.scrollIntoView({
		behavior: 'smooth'
	});
}
const scrollToWork = () => {
	work.scrollIntoView({
		behavior: 'smooth'
	});
}
const scrollToUniform = () => {
	uniform.scrollIntoView({
		behavior: 'smooth'
	});
}
const scrollToOrder = () => {
	order.scrollIntoView({
		behavior: 'smooth'
	});
}
const myFunction = () => {
    const x = document.getElementById("appoptdiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const generateData = (event) => {
  const appdiv = document.getElementById("appoptdiv");
  const trodiv = document.getElementById("trooptdiv");
  const workdiv = document.getElementById("workoptdiv");
  const teamdiv = document.getElementById("teamoptdiv");
  if (menu.value == 'app') {
        appdiv.style.display = "block";
  } else if (menu.value == 'tro') {
        trodiv.style.display = "block";
  } else if (menu.value == 'work') {
        workdiv.style.display = "block";
  } else if (menu.value == 'team') {
        teamdiv.style.display = "block";
  }
}

menu.addEventListener("change", generateData);
embutton.addEventListener("click", scrollToEmbroidery);
trobutton.addEventListener("click", scrollToTrophy);
signbutton.addEventListener("click", scrollToSign);
workbutton.addEventListener("click", scrollToWork);
unibutton.addEventListener("click", scrollToUniform);
orderbutton.addEventListener("click", scrollToOrder);
