(function () {
	"use strict";

	var textOne = document.getElementById('textOne');
	var textTwo = document.getElementById('textTwo');
	var textThree = document.getElementById('textThree');
	var one = document.getElementById('one');
	var two = document.getElementById('two');
	var three = document.getElementById('three');
	var four = document.getElementById('four');
	var five = document.getElementById('five');
	var six = document.getElementById('six');
	var seven = document.getElementById('seven');
	var eight = document.getElementById('eight');
	var nine = document.getElementById('nine');
	var zero = document.getElementById('zero');

	// document.getElementById('clear').addEventListener('click', clear, false);
	// function clear(){
	// 	textOne.value = "00";
	// 	textThree.value = "00";
	// }

	// var elementIsClicked = false; 
	// function clickHandler(){ 
 //  		elementIsClicked = true;
	// }
	// var element = document.getElementById('middle'); 
	// element.addEventListener('click', clickHandler);


	// var clearIsClicked = false; 
	// function clearHandler(){ 
 //  		clearIsClicked = true;
 //  		elementIsClicked = false;
	// }
	// var clear = document.getElementById('clear'); 
	// clear.addEventListener('click', clearHandler);


	// var middle = document.getElementById('middle');
	// middle.addEventListener('click', middle, false);
	// middle = middle[0]
	// function middle(){
	// 	document.getElementById('textTwo').value = "+";
	// }

	// one.addEventListener('click', button1, false);
	// function button1(){
	// 	textOne.value = "1";
	// 	if(clearIsClicked){
	// 		textOne.value = "1";
	// 	}
	// 	else if(elementIsClicked){
	// 		textThree.value = "1";
	// 	}
	// }

	// two.addEventListener('click', button2, false);
	// function button2(){
	// 	textOne.value = "2";
	// 	if(clearIsClicked){
	// 		textOne.value = "2";
	// 	}
	// 	else if(elementIsClicked){
	// 		textThree.value = "2";
	// 	}
	// }

	// three.addEventListener('click', button3, false);
	// function button3(){
	// 	textOne.value = "3";
	// 	if(clearIsClicked){
	// 		textOne.value = "3";
	// 	}
	// 	else if(elementIsClicked){
	// 		textThree.value = "3";
	// 	}
	// }

	// four.addEventListener('click', button4, false);
	// function button4(){
	// 	textOne.value = "4";
	// 	if(clearIsClicked){
	// 		textOne.value = "4";
	// 	}
	// 	else if(elementIsClicked){
	// 		textThree.value = "4";
	// 	}
	// }

	// five.addEventListener('click', button5, false);
	// function button5(){
	// 	textOne.value = "5";
	// 	if(clearIsClicked){
	// 		textOne.value = "5";
	// 	}
	// 	else if(elementIsClicked){
	// 		textThree.value = "5";
	// 	}
	// }

	// six.addEventListener('click', button6, false);
	// function button6(){
	// 	textOne.value = "6";
	// 	if(clearIsClicked){
	// 		textOne.value = "6";
	// 	}
	// 	else if(elementIsClicked){
	// 		textThree.value = "6";
	// 	}
	// }

	// seven.addEventListener('click', button7, false);
	// function button7(){
	// 	textOne.value = "7";
	// 	if(clearIsClicked){
	// 		textOne.value = "7";
	// 	}
	// 	else if(elementIsClicked){
	// 		textThree.value = "7";
	// 	}
	// }

	// eight.addEventListener('click', button8, false);
	// function button8(){
	// 	textOne.value = "8";
	// 	if(clearIsClicked){
	// 		textOne.value = "8";
	// 	}
	// 	else if(elementIsClicked){
	// 		textThree.value = "8";
	// 	}
	// }

	// nine.addEventListener('click', button9, false);
	// function button9(){
	// 	textOne.value = "9";
	// 	if(clearIsClicked){
	// 		textOne.value = "9";
	// 	}
	// 	else if(elementIsClicked){
	// 		textThree.value = "9";
	// 	}
	// }

	// zero.addEventListener('click', button0, false);
	// function button0(){
	// 	textOne.value = "0";
	// 	if(clearIsClicked){
	// 		textOne.value = "0";
	// 	}
	// 	else if(elementIsClicked){
	// 		textThree.value = "0";
	// 	}
	// }

	function pushOne(){
		if (textOne.getAttribute('value')=='0'){
			textOne.setAttribute('value',"1");
		}
		else {
			textOne.setAttribute('value',textOne.getAttribute('value') + "1");
		}
	}

	function pushTwo(){
		if (textOne.getAttribute('value')=='0'){
			textOne.setAttribute('value',"2");
		}
		else {
			textOne.setAttribute('value',textOne.getAttribute('value') + "2");
		}
	}

	function pushThree(){
		if (textOne.getAttribute('value')=='0'){
			textOne.setAttribute('value',"3");
		}
		else {
			textOne.setAttribute('value',textOne.getAttribute('value') + "3");
		}
	}

	function pushFour(){
		if (textOne.getAttribute('value')=='0'){
			textOne.setAttribute('value',"4");
		}
		else {
			textOne.setAttribute('value',textOne.getAttribute('value') + "4");
		}
	}

	function pushFive(){
		if (textOne.getAttribute('value')=='0'){
			textOne.setAttribute('value',"5");
		}
		else {
			textOne.setAttribute('value',textOne.getAttribute('value') + "5");
		}
	}

	function pushSix(){
		if (textOne.getAttribute('value')=='0'){
			textOne.setAttribute('value',"6");
		}
		else {
			textOne.setAttribute('value',textOne.getAttribute('value') + "6");
		}
	}

	function pushSeven(){
		if (textOne.getAttribute('value')=='0'){
			textOne.setAttribute('value',"7");
		}
		else {
			textOne.setAttribute('value',textOne.getAttribute('value') + "7");
		}
	}

	function pushEight(){
		if (textOne.getAttribute('value')=='0'){
			textOne.setAttribute('value',"8");
		}
		else {
			textOne.setAttribute('value',textOne.getAttribute('value') + "8");
		}
	}

	function pushNine(){
		if (textOne.getAttribute('value')=='0'){
			textOne.setAttribute('value',"9");
		}
		else {
			textOne.setAttribute('value',textOne.getAttribute('value') + "9");
		}
	}

	function pushZero(){
		if (textOne.getAttribute('value')=='0'){
			textOne.setAttribute('value',"0");
		}
		else {
			textOne.setAttribute('value',textOne.getAttribute('value') + "0");
		}
	}

	function pushAdd (){
		if (textOne == textOne){
			textOne = textThree;
		}
			textTwo.setAttribute('value','+');
	}

	function pushSubtract (){
		if (textOne == textOne){
			textOne = textThree;
		}
			textTwo.setAttribute('value','-');
	}

	function pushTimes (){
		if (textOne == textOne){
			textOne = textThree;
		}
			textTwo.setAttribute('value','*');
	}

	function pushDivide (){
		if (textOne == textOne){
			textOne = textThree;
		}
			textTwo.setAttribute('value','/');
	}

	

}());

