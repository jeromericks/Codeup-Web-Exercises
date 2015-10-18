$(document).ready(function() {
	"use strict";

    $("#btn-move").click(function() {
        $("#animate-box").animate({
            left: "-=100px"
        }, 500);
    });
        // TODO: "Move It" should move the box 100 pixels to the left
    $("#btn-scale").click(function() {
        $("#animate-box").animate({
            width: "+=25%",
        }, 500);
    });
            // TODO: "Scale It" should expand the box width by 50%
    $("#btn-hide").click(function() {
        $("#animate-box").animate({
            opacity: "0"
        }, 500);
    });
            // TODO: "Hide It" should use opacity to make the box invisible
    $("#btn-show").click(function() {
        $("#animate-box").animate({
            opacity: "+=1"
        }, 500);
    });
            // TODO: "Show It" should make the box appear
    $("#btn-all").click(function() {
        $("#animate-box").animate({
            left: "-=100px",
            width: "+=25%"
        }, 1000);
        $("#animate-box").animate({
            opacity: "0"
        }, 1000);
        $("#animate-box").animate({
            opacity: "+=1",
            left: "+=100px",
            width: "-=25%"
        }, 1000);

    });
            // TODO: "Animate All" should use an animation stack to:
            //      1) Move and scale the box simultaneously
            //      2) Hide the box
            //      3) Reset the box back to its original position and opacity
});





