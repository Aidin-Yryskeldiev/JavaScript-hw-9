//Задача №1
function startProcess(button) {
	setTimeout(function () {
		button.innerHTML = "Finished";
	}, 2000);
}
// Задача №2
function startProcess(button) {
	button.innerHTML = "Loading...";
	setTimeout(function () {
		button.innerHTML = "Finished";
	}, 2000);
}
//Задача №3
function addToCart() {
	document.querySelector("#message").innerHTML = "Added";
	setTimeout(function () {
		document.querySelector("#message").innerHTML = "";
	}, 2000);
}
//Задача №4
setInterval(function () {
	document.title = document.title === "New Message!" ? "App" : "New Message!";
}, 2000);
