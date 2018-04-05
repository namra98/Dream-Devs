$(function () {
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        //$('html, body').animate({
            //scrollTop: $($(this).attr('href')).offset().top
        //}, 290, 'linear');
            $('#sol').stop().animate({
            scrollTop: $('#sol')[0].scrollHeight
        },800);
            //window.location.hash= "#sol";
    });
});

function cal() {
    var w = document.getElementById('ip1').value;
    var h = document.getElementById('ip2').value;
    var ans;
    if (w > 0 && h > 0) {
        var ans = w / (h * h);
        window.scrollBy(0, 530);
        //swal("Good job!", "Click Ok to check your result", "success");
        swal({
            title: "Preparing your health plan",
            text: "Just a sec...",
            timer: 2000,
            showConfirmButton: false,
        });
        change(ans);
    }
    return false;
}

function change(ans) {
    document.getElementById('sol').style.backgroundAttachment =  "fixed";
    if (ans < 18.5) { //kuposan
        document.getElementById('sol').style.backgroundImage = "url('images/thali2.jpg')"
        document.getElementById('result1').style.display = "block";
        document.getElementById('result2').style.display = "none";

        document.getElementById('result3').style.display = "none";
        document.getElementById('err').style.display = "none";

    } else if (ans < 25 && ans >= 18.5) { //fit
        document.getElementById('sol').style.backgroundImage = "url('images/fit4.gif') "
        document.getElementById('result3').style.display = "block";
        document.getElementById('result2').style.display = "none";

        document.getElementById('result1').style.display = "none";
        document.getElementById('err').style.display = "none";

    } else if (ans >= 25) {
        document.getElementById('sol').style.backgroundImage = "url('images/fit8.gif')"
        document.getElementById('result2').style.display = "block";
        document.getElementById('result3').style.display = "none";
        document.getElementById('result1').style.display = "none";
        document.getElementById('err').style.display = "none";

    }



}


