// This function will work when I want to click on the menu. 
// the menu will pop up when pressed


menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	} else{
		x.className= "topnav";
	}

}