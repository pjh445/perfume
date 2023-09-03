$(document).on("pagecreate" ,"#layout", function(){	

	//마우스오버 효과
	$("#hover").hover(function(){
		$(this).children('div').stop().animate({bottom: 0});
	}, function(){
		$(this).children('div').stop().animate({bottom: "-100px"});
	});	
	
	
});////////////all end