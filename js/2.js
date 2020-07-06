$(document).ready(function () {
    var headclick, eyeclick, noseclick, mouthclick;
    var sound = document.getElementById('fx');
    var thunder = document.getElementById('x');

    $("#head").click(function(){
        if (headclick < 9){
            $("#head").animate({left:"-=367px"},);
            headclick+=1;
        }
        else{
            $("#head").animate({left:"0px"},);
            headclick = 0;
        }
        sound.play();
    });
    $("#eyes").click(function () {
        if (eyeclick < 9){
            $("#eyes").animate({left:"-=367px"});
            eyeclick += 1;
        }
        else {
            $("#eyes").animate({left:"0px"});
            eyeclick = 0;
        }
        sound.play();
    })
    $('#nose').click(function () {
        if (noseclick < 9){
            $("#nose").animate({left:"-=367px"});
            noseclick += 1;
        }
        else {
            $("#nose").animate({left:"0px"});
            noseclick = 0;
        }
        sound.play();
    })
    $('#mouth').click(function () {
        if (mouthclick < 9){
            $('#mouth').animate({left:'-=367px'});
            mouthclick += 1;
        }
        else {
            $('#mouth').animate({left:'0px'});
            mouthclick = 0;
        }
        sound.play();
    })

    var thunder1 = setInterval(function () {
        $('#lightning1').hide(0);
        $('#lightning2').hide(0);
        $('#lightning3').hide(0);
        $('#lightning1').fadeIn(4000);
        $('#lightning2').fadeIn(2000);
        $('#lightning3').fadeIn(3000);
    },4000 )
    x.play();
})
