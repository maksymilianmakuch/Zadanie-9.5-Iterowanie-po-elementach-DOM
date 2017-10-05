var button = document.getElementsByClassName('button');
console.log(button);
console.log(button.length);
for (var k = 0; k < button.length; k++) {
	console.log(button[k]);
	console.log(button[k].innerText);
	alert(button[k].innerText);
}