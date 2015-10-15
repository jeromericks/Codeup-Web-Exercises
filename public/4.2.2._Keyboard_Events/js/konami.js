$(document).ready(function() {
	"use strict";


	var keys = {
	        up: { 
	        	code: 38, 
	        	pressed: false, 
	        	next: 'up2' 
	        },
	        up2: { 
	        	code: 38, 
	        	pressed: false, 
	        	next: 'down' 
	        },
	        down: { 
	        	code: 40, 
	        	pressed: false, 
	        	next: 'down2' 
	        },
	        down2: { 
	        	code: 40, 
	        	pressed: false, 
	        	next: 'left1' 
	        },
	        left1: { 
	        	code: 37, 
	        	pressed: false, 
	        	next: 'right1' 
	        },
	        right1: { 
	        	code: 39, 
	        	pressed: false, 
	        	next: 'left2'
	        },
	        left2: { 
	        	code: 37, 
	        	pressed: false, 
	        	next: 'right2' 
	        },
	        right2: { 
	        	code: 39, 
	        	pressed: false, 
	        	next: 'b' 
	        },
	        b: { 
	        	code: 66, 
	        	pressed: false, 
	        	next: 'a' 
	        },
	        a: { 
	        	code: 65, 
	        	pressed: false, 
	        	next: 'enter' 
	        },
	        enter: { 
	        	code: 13, 
	        	pressed: false, 
	        	next: 'up' 
	        },

	    },
	    nextKey = 'up';


	$(document).keyup(function(event){
	   	if (event.keyCode === keys[nextKey].code) {
	        keys[nextKey].pressed = true;
	        nextKey = keys[nextKey].next;
	    } else {
	        keys.up.pressed = false;
	        keys.up2.pressed = false;
	        keys.down.pressed = false;
	        keys.down2.pressed = false;
	        keys.left1.pressed = false;
	        keys.right1.pressed = false;
	        keys.left2.pressed = false;
	        keys.right2.pressed = false;
	        keys.b.pressed = false;
	        keys.a.pressed = false;
	        keys.enter.pressed = false;
	        nextKey = 'up';
		}

	    if (keys.up.pressed && keys.up2.pressed && keys.down.pressed && keys.down2.pressed && keys.left1.pressed && keys.right1.pressed && keys.left2.pressed && keys.right2.pressed && keys.b.pressed && keys.a.pressed && keys.enter.pressed) {
	        alert('You have added 30 lives!');
	    } 
    });


});





