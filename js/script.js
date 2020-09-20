$('#firstName').keyup(function(){
	var firstName = $('#firstName').val();
    $('#fname').text(firstName);
});

$('#nav li a').click(function(){
    $('ul li a').removeClass('active');
    $(this).addClass('active');
});