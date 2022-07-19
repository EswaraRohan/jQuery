$(document).ready(function(){
    $("h1").mouseenter(function(){
        $(this).addClass("red");
    })

    $("h1").mouseout(function(){
        $(this).removeClass("red");
    })

})


$(document).ready(function(){
    $("input[name='name']").keydown(function(e){
        console.log(e.keyCode);
    })
})