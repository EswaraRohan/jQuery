$("h1").click(function(){
    console.log("Clicked");
    $("h1").text("clicked");
})

$("li").click(function(){
    console.log("Clicked");
    $(this).text("clicked");
    $(this).toggleClass("red");
})