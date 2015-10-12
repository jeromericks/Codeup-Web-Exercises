(function () {
	"use strict";

	var textOne = document.getElementById('textOne');
	var textTwo = document.getElementById('textTwo');
	var textThree = document.getElementById('textThree');
	var textBoxSelector = textOne;
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
	var plus = document.getElementById('plus');
	var minus = document.getElementById('minus');
	var times = document.getElementById('times');
	var divide = document.getElementById('divide');
	var equals = document.getElementById('equals');
	var clear = document.getElementById('clear');
	

	function pushOne(){
		if (textBoxSelector.getAttribute('value')=='0'){
			textBoxSelector.setAttribute('value',"1");
		}
		else
			textBoxSelector.setAttribute('value',textBoxSelector.getAttribute('value') + "1");
	}
	function pushTwo(){
		if (textBoxSelector.getAttribute('value')=='0'){
			textBoxSelector.setAttribute('value',"2");
		}
		else
			textBoxSelector.setAttribute('value',textBoxSelector.getAttribute('value') + "2");
	}
	function pushThree(){
		if (textBoxSelector.getAttribute('value')=='0'){
			textBoxSelector.setAttribute('value',"3");
		}
		else
			textBoxSelector.setAttribute('value',textBoxSelector.getAttribute('value') + "3");
	}	
	function pushFour(){
		if (textBoxSelector.getAttribute('value')=='0'){
			textBoxSelector.setAttribute('value',"4");
		}
		else
			textBoxSelector.setAttribute('value',textBoxSelector.getAttribute('value') + "4");
	}
	function pushFive(){
		if (textBoxSelector.getAttribute('value')=='0'){
			textBoxSelector.setAttribute('value',"5");
		}
		else
			textBoxSelector.setAttribute('value',textBoxSelector.getAttribute('value') + "5");
	}
	function pushSix(){
		if (textBoxSelector.getAttribute('value')=='0'){
			textBoxSelector.setAttribute('value',"6");
		}
		else
			textBoxSelector.setAttribute('value',textBoxSelector.getAttribute('value') + "6");
	}
	function pushSeven(){
		if (textBoxSelector.getAttribute('value')=='0'){
			textBoxSelector.setAttribute('value',"7");
		}
		else
			textBoxSelector.setAttribute('value',textBoxSelector.getAttribute('value') + "7");
	}
	function pushEight(){
		if (textBoxSelector.getAttribute('value')=='0'){
			textBoxSelector.setAttribute('value',"8");
		}
		else
			textBoxSelector.setAttribute('value',textBoxSelector.getAttribute('value') + "8");
	}
	function pushNine(){
		if (textBoxSelector.getAttribute('value')=='0'){
			textBoxSelector.setAttribute('value',"9");
		}
		else
			textBoxSelector.setAttribute('value',textBoxSelector.getAttribute('value') + "9");
	}
	function pushZero(){
		if (textBoxSelector.getAttribute('value')=='0'){
			textBoxSelector.setAttribute('value',"0");
		}
		else
			textBoxSelector.setAttribute('value',textBoxSelector.getAttribute('value') + "0");
	}
	function pushTimes (){
		if (textBoxSelector == textOne){
			textBoxSelector = textThree;
		}
			textTwo.setAttribute('value','*');
	}
	function pushDivide (){
		if (textBoxSelector == textOne){
			textBoxSelector = textThree;
		}
			textTwo.setAttribute('value','/');
	}
	function pushPlus (){
		if (textBoxSelector == textOne){
			textBoxSelector = textThree;
		}
			textTwo.setAttribute('value','+');
	}
	function pushMinus (){
		if (textBoxSelector == textOne){
			textBoxSelector = textThree;
		}
			textTwo.setAttribute('value','-');
	}
	function pushClear(){
		textBoxSelector = textOne;
		textOne.setAttribute('value','0');
		textTwo.setAttribute('value','');
		textThree.setAttribute('value','0');
	}
	function pushEquals (){
		var b1 = textOne.getAttribute('value');
		var b2 = textTwo.getAttribute('value');
		var b3 = textThree.getAttribute('value');
		if(b2 == '*'){
			var ans = Number(b1) * Number(b3);
			textOne.setAttribute('value',ans);
			textThree.setAttribute('value','0');
		}
		if(b2 == '/'){
			var ans = Number(b1) / Number(b3);
			textOne.setAttribute('value',ans);
			textThree.setAttribute('value','0');
		}
		if(b2 == '-'){
			var ans = Number(b1) - Number(b3);
			textOne.setAttribute('value',ans);
			textThree.setAttribute('value','0');
		}
		if(b2 == '+'){
			var ans = Number(b1) + Number(b3);
			textOne.setAttribute('value',ans);
			textThree.setAttribute('value','0');
		}
	}

	one.addEventListener('click', pushOne,false);
	two.addEventListener('click',pushTwo,false);
	three.addEventListener('click',pushThree,false);
	four.addEventListener('click',pushFour,false);
	five.addEventListener('click',pushFive,false);
	six.addEventListener('click',pushSix,false);
	seven.addEventListener('click',pushSeven,false);
	eight.addEventListener('click',pushEight,false);
	nine.addEventListener('click',pushNine,false);
	zero.addEventListener('click',pushZero,false);
	times.addEventListener('click', pushTimes,false);
	plus.addEventListener('click',pushPlus,false);
	divide.addEventListener('click',pushDivide,false);
	minus.addEventListener('click',pushMinus,false);
	equals.addEventListener('click',pushEquals,false);
	clear.addEventListener('click', pushClear,false);

}());

