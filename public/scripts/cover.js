
$(document).ready(function() {





$('body').css('display', 'none');

$('body').fadeIn(2000);



$('body').click(function(event) {


newLocation = this.href;

$('body').fadeOut(500, newpage);

});



function newpage() {

window.location = newLocation;

}

});








// $("body").click( function() {
//   $("body").fadeOut(1000)
// });