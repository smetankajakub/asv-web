var x = 0;
$(document).ready(function(){
    let heightFirst = $('#first').height() - 10;
    let heightSecond = $('#second').height() + heightFirst;
    let heightThird = $('#third').height() + heightSecond;
    let heightFourth = $('#fourth').height() + heightThird;
    let heightFifth = $('#fifth').height() + heightFourth;
    $('#pr2').fadeOut(1);
    $('#pr3').fadeOut(1);
    $('#pr4').fadeOut(1);
    $('#pr5').fadeOut(1);
    $("#list").scroll(function(){
    //   $("span").text( x+= 1);
      var y = $('div #list').scrollTop();
        if (y < heightFirst) {
            $('#pr1').fadeIn(800);
            $('#pr2').fadeOut(1);
            $('#pr3').fadeOut(1);
            $('#pr4').fadeOut(1);
            $('#pr5').fadeOut(1);
        } else if (y >= heightFirst && y < heightSecond) {
            $('#pr2').fadeIn(800);
            $('#pr1').fadeOut(1);
            $('#pr3').fadeOut(1);
            $('#pr4').fadeOut(1);
            $('#pr5').fadeOut(1);   
        } else if( y >= heightSecond && y < heightThird){
            $('#pr3').fadeIn(800);
            $('#pr2').fadeOut(1);
            $('#pr4').fadeOut(1);
            $('#pr5').fadeOut(1);  
            $('#pr1').fadeOut(1);
        } else if( y >= heightThird && y < heightFourth){
            $('#pr4').fadeIn(800);
            $('#pr1').fadeOut(1);
            $('#pr2').fadeOut(1);
            $('#pr3').fadeOut(1);  
            $('#pr5').fadeOut(1);
        } else if( y >= heightFourth){
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