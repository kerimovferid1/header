
k=$(".nav").width();
console.log(k);
$(document).ready(function(){
	  $(".nav_page").width($(".nav").width());
    
    $(".dropped").click(function(){

    	$(".submenu").slideUp(500);
        $(this).children(".submenu").toggle(500);
        
});
    // $(".submenu").mouseleave(function(){
    // 		$(".submenu").slideUp(500);
    // 	})
 $(window).mouseup(function(e){
    		
    		// $(".submenu").slideUp(500);
    		if(e.target != $(".submenu")&& e.target.parentNode!=$(".submenu")){
    			$(".submenu").slideUp(500);
    		}
    	})
});


$(document).scroll(function(){
 var d= $(".nav1").offset().top;
 console.log(d);
 var k= $(window).scrollTop() ;
 var z = document.documentElement.scrollTop;
 console.log(k);
 if(k>d/3){
 	$(".con").css("width","100%");
 	$(".nav1").css("width","100%");
 	$(".nav1").css({"top": '0', "position":'fixed'});
 }else{
 	$(".con").css("width","");
 	$(".nav1").css({"top": '', position:'relative'});
}
});
 
  

// var pos = document.querySelector(".nav1");

// document.addEventListener("scroll",function(){
//     var topValue = document.querySelector(".nav1").offsetTop;
//     console.log(topValue);
//     if(document.body.scrollTop > topValue){
//      pos.style.position = "fixed";
//      pos.style.top = 0 + "px";
//     }else if(document.body.scrollTop < topValue){
//         pos.style.position = "absolute";
//         pos.style.top = "32px";
//     }
// });