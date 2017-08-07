/*
*** animations.js

work in progress. mostly just theme changing code
*/



//function myanimations(){
//	$(function() {
//		if ($('#1-1')){
//			console.log("test")
//		}
//	});
//}

//theme color switch
//when pressed, switch theme colors
document.getElementById('wave').onclick = switch_wave;
document.getElementById('poupon').onclick = switch_poupon;
document.getElementById('pistacio').onclick = switch_pistacio;
document.getElementById('autumn').onclick = switch_autumn;


//if there were more color options it might be better to write one switch function
//passing in the name of the color and using it as an object, color.hex?
function switch_wave(){
	$(':root').get(0).style.setProperty('--theme-color', '#55aad1');	//theme color
	$(':root').get(0).style.setProperty('--theme-dark', '#3f789e');		//dark theme color
}

function switch_poupon(){
	$(':root').get(0).style.setProperty('--theme-color', '#beb048');
	$(':root').get(0).style.setProperty('--theme-dark', '#80792f');
}

function switch_pistacio(){
	$(':root').get(0).style.setProperty('--theme-color', '#55b483');
	$(':root').get(0).style.setProperty('--theme-dark', '#397a5e');
}

function switch_autumn(){
	$(':root').get(0).style.setProperty('--theme-color', '#cd552c');
	$(':root').get(0).style.setProperty('--theme-dark', '#8a3d1e');
}


//by default keyboard is hidden, when toggled, will show
function show_keyboard(toggle){
	//$('#keyboard').css("display", "block");
	var keyboard = document.getElementById('keyboard');

	if(toggle.checked){
		console.log("check")
		keyboard.style.display = 'block'	//show keyboard
		_hide_table = false	//toggle the state
	}
	else{
		console.log("no check")
		keyboard.style.display = 'none';	//hide keyboard
		_hide_table = true	//toggle the state
	}

}
