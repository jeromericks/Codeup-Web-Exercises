(function () {
	"use strict";

	// var textOne = document.getElementById('textOne');
	// var textTwo = document.getElementById('textTwo');
	// var textThree = document.getElementById('textThree');
	// var one = document.getElementById('one');
	// var two = document.getElementById('two');
	// var three = document.getElementById('three');
	// var four = document.getElementById('four');
	// var five = document.getElementById('five');
	// var six = document.getElementById('six');
	// var seven = document.getElementById('seven');
	// var eight = document.getElementById('eight');
	// var nine = document.getElementById('nine');
	// var zero = document.getElementById('zero');
	// var plus = document.getElementById('plus');
	// var minus = document.getElementById('minus');
	// var times = document.getElementById('times');
	// var divide = document.getElementById('divide');
	// var equals = document.getElementById('equals');
	// var clear = document.getElementById('clear');
	// var text = textOne;
	

	// function One(){
	// 	if (text.getAttribute('value')=='0'){
	// 		text.setAttribute('value',"1");
	// 	}
	// 	else {
	// 		text.setAttribute('value',text.getAttribute('value') + "1");
	// 	}
	// }
	// function Two(){
	// 	if (text.getAttribute('value')=='0'){
	// 		text.setAttribute('value',"2");
	// 	}
	// 	else {
	// 		text.setAttribute('value',text.getAttribute('value') + "2");
	// 	}
	// }
	// function Three(){
	// 	if (text.getAttribute('value')=='0'){
	// 		text.setAttribute('value',"3");
	// 	}
	// 	else {
	// 		text.setAttribute('value',text.getAttribute('value') + "3");
	// 	}
	// }	
	// function Four(){
	// 	if (text.getAttribute('value')=='0'){
	// 		text.setAttribute('value',"4");
	// 	}
	// 	else {
	// 		text.setAttribute('value',text.getAttribute('value') + "4");
	// 	}
	// }
	// function Five(){
	// 	if (text.getAttribute('value')=='0'){
	// 		text.setAttribute('value',"5");
	// 	}
	// 	else {
	// 		text.setAttribute('value',text.getAttribute('value') + "5");
	// 	}
	// }
	// function Six(){
	// 	if (text.getAttribute('value')=='0'){
	// 		text.setAttribute('value',"6");
	// 	}
	// 	else {
	// 		text.setAttribute('value',text.getAttribute('value') + "6");
	// 	}
	// }
	// function Seven(){
	// 	if (text.getAttribute('value')=='0'){
	// 		text.setAttribute('value',"7");
	// 	}
	// 	else {
	// 		text.setAttribute('value',text.getAttribute('value') + "7");
	// 	}
	// }
	// function Eight(){
	// 	if (text.getAttribute('value')=='0'){
	// 		text.setAttribute('value',"8");
	// 	}
	// 	else {
	// 		text.setAttribute('value',text.getAttribute('value') + "8");
	// 	}
	// }
	// function Nine(){
	// 	if (text.getAttribute('value')=='0'){
	// 		text.setAttribute('value',"9");
	// 	}
	// 	else {
	// 		text.setAttribute('value',text.getAttribute('value') + "9");
	// 	}
	// }
	// function Zero(){
	// 	if (text.getAttribute('value')=='0'){
	// 		text.setAttribute('value',"0");
	// 	}
	// 	else {
	// 		text.setAttribute('value',text.getAttribute('value') + "0");
	// 	}
	// }
	// function Times (){
	// 	if (text == textOne){
	// 		text = textThree;
	// 	}
	// 		textTwo.setAttribute('value','*');
	// }
	// function Divide (){
	// 	if (text == textOne){
	// 		text = textThree;
	// 	}
	// 		textTwo.setAttribute('value','/');
	// }
	// function Plus (){
	// 	if (text == textOne){
	// 		text = textThree;
	// 	}
	// 		textTwo.setAttribute('value','+');
	// }
	// function Minus (){
	// 	if (text == textOne){
	// 		text = textThree;
	// 	}
	// 		textTwo.setAttribute('value','-');
	// }
	// function Clear(){
	// 	text = textOne;
	// 	textOne.setAttribute('value','0');
	// 	textTwo.setAttribute('value','');
	// 	textThree.setAttribute('value','0');
	// }
	// function Equals (){
	// 	var a = textOne.getAttribute('value');
	// 	var b = textTwo.getAttribute('value');
	// 	var c = textThree.getAttribute('value');
	// 	if(b == '*'){
	// 		var ans = Number(a) * Number(c);
	// 		textOne.setAttribute('value', '');
	// 		textTwo.setAttribute('value',ans);
	// 		textThree.setAttribute('value','0');
	// 	}
	// 	if(b == '/'){
	// 		var ans = Number(a) / Number(c);
	// 		textOne.setAttribute('value', '');
	// 		textTwo.setAttribute('value',ans);
	// 		textThree.setAttribute('value','0');
	// 	}
	// 	if(b == '-'){
	// 		var ans = Number(a) - Number(c);
	// 		textOne.setAttribute('value', '');
	// 		textTwo.setAttribute('value',ans);
	// 		textThree.setAttribute('value','');
	// 	}
	// 	if(b == '+'){
	// 		var ans = Number(a) + Number(c);
	// 		textOne.setAttribute('value', '');
	// 		textTwo.setAttribute('value',ans);
	// 		textThree.setAttribute('value','');
	// 	}
	// }

	// one.addEventListener('click', One,false);
	// two.addEventListener('click',Two,false);
	// three.addEventListener('click',Three,false);
	// four.addEventListener('click',Four,false);
	// five.addEventListener('click',Five,false);
	// six.addEventListener('click',Six,false);
	// seven.addEventListener('click',Seven,false);
	// eight.addEventListener('click',Eight,false);
	// nine.addEventListener('click',Nine,false);
	// zero.addEventListener('click',Zero,false);
	// times.addEventListener('click', Times,false);
	// plus.addEventListener('click',Plus,false);
	// divide.addEventListener('click',Divide,false);
	// minus.addEventListener('click',Minus,false);
	// equals.addEventListener('click',Equals,false);
	// clear.addEventListener('click', Clear,false);



	var answer;
	var clear = document.getElementById('clear');
	var equal = document.getElementById('equal');
	var numbers = document.getElementsByClassName('number');
	var buttons = document.getElementsByTagName('button');
	var operators = document.getElementsByClassName('operator');
	var left = document.getElementById('left');
	var operator = document.getElementById('operator');
	var right = document.getElementById('right');
	

	//add event listeners to the buttons

	function listener(event) {
		var clickedButton = this;
		this.getAttribute('class') == 'number'
		if(operator.value == '') {
			clickedButton = this.getAttribute('data-value');
			left.value = left.value + clickedButton;
		}
		else if(operator.value != '') {
			clickedButton = this.getAttribute('data-value');
			right.value = right.value + clickedButton;
		}
	}

	function operateListener(event) {
		var clickedButton = this.getAttribute('data-value');
		operator.value = clickedButton;
	}

	function calculateOutput() {
		switch(operator.value){
			case('*'):
				answer = parseFloat(left.value) * parseFloat(right.value);
				left.value = answer;
				operator.value = '';
				right.value = '';
				break;
			case('/'):
				answer = parseFloat(left.value) / parseFloat(right.value);
				left.value = answer;
				operator.value = '';
				right.value = '';
				break;
			case('-'):
				answer = parseFloat(left.value) - parseFloat(right.value);
				left.value = answer;
				operator.value = '';
				right.value = '';
				break;
			case('+'):
				answer = parseFloat(left.value) + parseFloat(right.value);
				left.value = answer;
				operator.value = '';
				right.value = '';
		}
	}

	function Clear() {
		left.value =  '';
		operator.value = '';
		right.value = '';
	}

	for(var i = 0; i < numbers.length; i += 1) {
		numbers[i].addEventListener('click', listener, false);
	}

	for(var i = 0; i < operators.length; i += 1) {
		operators[i].addEventListener('click', operateListener, false);
	}

	equal.addEventListener('click', calculateOutput, false);
	clear.addEventListener('click', Clear, false);

}());

