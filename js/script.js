$(document).ready(function(){
    $(".pageDown").click(function(){
        $(".nav_page").toggle(500);
    });
});
$(document).ready(function(){
    $(".pageDow").click(function(){
        $(".galleryNav").toggle(500);
    });
});
$(document).ready(function(){
    $(".pageDo").click(function(){
        $(".blogNav").toggle(500);
    });
});

$(document).scroll(function(){
 var d= $(".nav1").offset().top;
 console.log(d);
 var k= $(window).scrollTop() ;
 var z = document.documentElement.scrollTop;
 console.log(k);
 if(k>25 || z>25 ){
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