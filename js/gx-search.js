$(function(){
	let dian=$(".search-sousuo input")
	dian.click(function(){
		$(this).parent().next(".xiala").css("display","none").eq($(this).index()).css("display","block");
	})
})