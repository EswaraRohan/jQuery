var url = "https://api.myjson.com/bins/u63ki";
$("#b1").click(function(){
    $.get(url,function(response){
        console.log(response);
        $("h1").text(response.course);
    })
})
$("#b2").click(function(){
    $("#output").load("/index.html");
})
$("#b3").click(function(){
 var url = "http://my-json-server.typicode.com/discoveryvip/demo/posts/";
 var myData = $("#myForm").serialize();
   $.post(url, myData).done(function(data){
    console.log(data);
   })
})
 
$("#myForm").submit(function(e){
    e.preventDefault();
    console.log("submit");
    var myData = $("#myForm").serialize();
    console.log(myData);
    var url = "http://my-json-server.typicode.com/discoveryvip/demo/posts/";
    $.ajax({
        url:url,
        type:"post",
        data:myData,
        success:success
    })
})
 
function success(data){
    console.log(data);
}