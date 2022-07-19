/*

html code body

<h1 id="h1"> H1 #1 </h1>
<h1 id="h2"> H1 #2 </h1>
<h1 id="h3"> H1 #3 </h1>

<input type="button" id="b1" value="one">
<input type="button" id="b2" value="two">
<input type="button" id="b3" value="three">
<input type="button" id="b4" value="four">
*/

$("#b1").on("click",function(){
    $("#h1").show();
})

$("#b2").on("click",function(){
    $("#h1").hide();
})

$("#b3").on("click",function(){
    $("#h1").toggle();
})


$("#b1").on("click",function(){
    $("#h1").fadeIn(3000);
})

$("#b2").on("click",function(){
    $("#h1").fadeOut(3000);
})

$("#b3").on("click",function(){
    $("#h1").fadeToggle(3000);
})

$("#b4").on("click",function(){
    $("#h1").fadeTo(2000,0.5);
})
