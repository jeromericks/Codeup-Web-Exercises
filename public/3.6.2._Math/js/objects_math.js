(function () {
	"use strict";

	var body = document.getElementsByTagName('body')[0];
	var circle = {
	    radius: 3,
	    getArea: function (radius) {
	    	var area = Math.PI * Math.pow(radius, 2);
	    	return area;
	    },
	    logInfo: function (round) {
	    	var area = circle.getArea(circle.radius);
	    	if (round){
	    		if(Math.abs(area - Math.floor(area)) >= 0.5) {
	    			area = Math.ceil(area);
	    			console.log('Area of a circle with radius: ' + this.radius + ', is: ' + area);
	    		}
	    		else {
	    			area = Math.floor(area);
	    			console.log('Area of a circle with radius: ' + this.radius + ', is: ' + area);
	    		}
	    	}
	    	else {
	        	console.log('Area of a circle with radius: ' + this.radius + ', is: ' + area);
	    	}
	    }
	};

	circle.logInfo(false);
	circle.logInfo(true);

	circle.radius = 5;

	circle.logInfo(false);
	circle.logInfo(true);

}());
