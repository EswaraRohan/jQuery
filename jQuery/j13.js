
//Get API JSON data output to HTML page example

var url = "https://api.spacexdata.com/v2/launches/";
$("#b1").click(function(){
    $.get(url,output);
})
 
 
function output(data){
    console.log(data);
    var html = "";
    $.each(data,function(key,value){
        console.log(key);
        console.log(value);
        html += '<h3>Flight #'+value.flight_number+'</h3>';
        html += 'Details: '+value.details+'<br>';
    })
    $("#output").html(html);
}