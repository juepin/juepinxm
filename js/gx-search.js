$(function(){
	let dian=$(".search-sousuo input")
	dian.click(function(){
		$(this).parent().next(".xiala").focus.eq($(this).index()).css("display","none");
	})
//	dian.click(function(){
////		$(this).parent().next(".xiala").eq($(this).index()).css("display","block");
//	})
})