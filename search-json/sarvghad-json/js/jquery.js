$(document).ready(function(){
    if(($('#search-area').val()) === "") {
        $('#main').empty() ;
    } 


$('#search-area').keyup(function(){
    var search_name= $('#search-area').val();
    var myExp= new RegExp(search_name, "i");
$.getJSON('data.json', function(data) {

    var output = '<div id="main">'  
    
    
    $.each(data,function(key , val) {

        if((val.name.search(myExp) != -1) || (val.shortname.search(myExp) != -1) ||( val.bio.search(myExp) != -1)){

            output += '<div id="name-row">' ;

            output +=   '<div id ="name">'+ val.name + " " +  val.shortname +  '</div>' ;
                         
            output +=  '<img  id ="img" src="img/'+ val.img+'" />';

            output += '</div>';    


           output += '<div id ="bio">' + val.bio + '</div>'
        }
    })

output +='</div>'

$('#main').html(output) ;

if(($('#search-area').val()) === "") {
    $('#main').empty() ;
}


    
})
})

})
