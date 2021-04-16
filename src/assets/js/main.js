const toggle = document.querySelector('.toggle');
const mainCtr = document.querySelector('.main');

toggle.addEventListener('click', () => {
	mainCtr.classList.toggle('dark-mode-on');
	if (toggle.innerHTML === "🌖") {
		toggle.innerHTML = "🌒";
	} else {
		toggle.innerHTML = "🌖";
	}
});