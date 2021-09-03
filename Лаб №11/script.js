$('#task1').mouseover(function() {

    $('#task1').css("color", "red")
});

$('#task2').click(function() { $(this).css("font-size", "20px") });
var flag = true;

$('.t3 ').click(function() {
    // console.log("hi");
    if (flag) {

        $('.t3').attr('src', "2.jpg");

        flag = false
    } else {
        $('.t3').attr('src', "1.jpg");
        flag = true;
    }

});



var flag1 = true;

$('.task4').click(function() {
    if (flag1) {
        $(this).html("<img src = '3.jpg' style = 'width: 100; height: 60px;' >")
        flag1 = false;
    } else {
        $(this).html('Hello World');
        flag1 = true;
    }
});

$('#task5').mouseover(function() { $(this).css("width", "500px") });
$('#task5').mouseout(function() { $(this).css("width", "100px") });




$('#task6').dblclick(function() {
    console.log('hi');
    $(this).css("border", "3px solid red");
});