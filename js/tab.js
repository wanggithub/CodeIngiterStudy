$(function(){

var $navcur = $(".nav-current");

var $nav = $("#header_nav");

var current = ".current";

var itemW = $nav.find(current).innerWidth();

var defLeftW = $nav.find(current).position().left;



$navcur.css({width:itemW,left:defLeftW});

$nav.find("a").hover(function(){
	var index = $(this).index();
	var leftW = $(this).position().left;
	
	var currentW = $(this).innerWidth();
	
	$navcur.stop().animate({
		left: leftW,
		width: currentW
	},300);
},function(){
	$navcur.stop().animate({
		left: defLeftW,
		width: itemW
	},300)
});

}

);