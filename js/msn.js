$(document).ready(function () {
    //post method
    var $sumbit = $('.contact-form')
    $sumbit.on('submit', function () {
        var $spinner = $("<i class=\"far fa-spin fa-square\"></i>");
        var url = "/Breten6/php/send.php";
        var $divSuc = $("<div class='success_signal'>The form was sent successfully</div>");
        var $divErr = $("<div class='error_signal'>error</div>")
        $(".submit-text").before($spinner);
        $(".contact-form").css("disabled", "disabled");
        $sumbit.css("opacity", "0.45");
        $.ajax({
            type: 'post',
            data: $(this).serialize(),
            url: url,
            dataType: "text",
            cache: false,
            success: function (info) {
                if ($(".success_signal").length == 0) {
                    $(".contact-form").append($divSuc);
                }
                $(".contact-form").append($divSuc);
                $("#message").val("");
                $("input[type='email']").val("");
                $sumbit.css("opacity", "1");
                $spinner.remove();
            },
            error: function (data) {
                if ($(".error_signal").length == 0) {
                    $(".contact-form").append($divErr);
                }
                $sumbit.css("opacity", "1");
                $spinner.remove();
            }
        })
        return false;
    })
})
