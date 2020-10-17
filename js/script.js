var x = 0;
$(document).ready(function(){
    $('#pr2').fadeOut();
    $('#pr3').fadeOut(1);
    $('#pr4').fadeOut(1);
    $('#pr5').fadeOut(1);
    $("#list").scroll(function(){
    //   $("span").text( x+= 1);
      var y = $('div #list').scrollTop();
    if (y < 115) {
        $('#pr1').fadeIn(800);
        $('#pr2').fadeOut(1);
        $('#pr3').fadeOut(1);
        $('#pr4').fadeOut(1);
        $('#pr5').fadeOut(1);
    } else if (y > 115 && y < 2*115) {
        $('#pr2').fadeIn(800);
        $('#pr1').fadeOut(1);
        $('#pr3').fadeOut(1);
        $('#pr4').fadeOut(1);
        $('#pr5').fadeOut(1);   
    } else if( y > 2*115 && y < 3*115){
        $('#pr3').fadeIn(800);
        $('#pr2').fadeOut(1);
        $('#pr4').fadeOut(1);
        $('#pr5').fadeOut(1);  
        $('#pr1').fadeOut(1);
    } else if( y > 3*115 && y < 4*115){
        $('#pr4').fadeIn(800);
        $('#pr1').fadeOut(1);
        $('#pr2').fadeOut(1);
        $('#pr3').fadeOut(1);  
        $('#pr5').fadeOut(1);
    } else if( y > 4*110 && y < 5*115){
        $('#pr5').fadeIn(800);
        $('#pr1').fadeOut(1);
        $('#pr2').fadeOut(1);
        $('#pr3').fadeOut(1);  
        $('#pr4').fadeOut(1);
    }
    console.log('y' + y);
      console.log('x');
    });
  });


$(document).scroll(function () {
    console.log('call scroll jQuery');


});