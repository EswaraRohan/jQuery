$("#b1").click(function(){
    $("#h1").slideDown(3000,function(){
        console.log("Slide Down");
    });
})
$("#b2").click(function(){
    $("#h1").slideUp(3000,function(){
        console.log("Slide Up");
    });
})
$("#b3").click(function(){
    $("#h1").slideToggle(1000,function(){
        console.log("Slide was toggled");
    });
})