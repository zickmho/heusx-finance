$(function() {

    // clicking table row will redirect to detailed URL of added href
    $(".clickable-row").on('click', function() {
        window.location = $(this).data("href");
    });

    $('#modal-qr').modal('show');

    // autofocus input authentication
    var charLimit = 1;
    $(".password-key").keyup(function(e) {

        var keys = [8, 9, /*16, 17, 18,*/ 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];

        if (e.which == 8 && this.value.length == 0) {
            $(this).prev('.password-key').focus();
        } else if ($.inArray(e.which, keys) >= 0) {
            return true;
        } else if (this.value.length >= charLimit) {
            $(this).next('.password-key').focus();
            return false;
        } else if (e.shiftKey || e.which <= 48 || e.which >= 58) {
            return false;
        }
    }).keyup (function () {
        if (this.value.length >= charLimit) {
            $(this).next('.password-key').focus();
            return false;
        }
    });

    // button-circle tap animation
    $('.btn-circle').click(function(){

        var $this = $(this);
        $this.addClass('animate');

        setTimeout(function(){ 
            if($this.hasClass('animate')) {
                $this.removeClass('animate');
            }            
        },2000);
    });

    // to demonstrate iteraction of modal subscribe
    $('#btn-continue').on('click', function(){
        
        $('#subscribe-step-1').hide();
        $('#subscribe-step-2').show();
    });

    $('#btn-yes').on('click', function(){
        
        $('#subscribe-step-2').hide();
        $('#subscribe-step-3').show();
    });
});