(function () {
	"use strict";


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

