$("#img").draggable()
$("#text").draggable()

var flag3 = true;
$('.task3').click(function() {
    if (flag3) {
        $(this).animate({
            "left": "400px"
        }, 800);
        flag3 = false;
    } else {
        $(this).animate({
            "left": "0px"
        }, 800);
        flag3 = true;
    }

});



//*********************GRAPHIKS************************/
//*********************GRAPHIKS************************/
//*********************GRAPHIKS************************/
$('.btn').click(function() {
    win = window.open();
    var c;
    c = Number($('#s1').val());
    var v = $('input[name="k"]:checked').val();

    //    Задаем position:absolute в стиле для всех div
    win.document.write(" <style>div{position:absolute}</style> ");
    //    w,h - ширина и высота экрана соответственно; (x0,y0)- координаты центра экрана
    w = screen.width;
    h = screen.height;
    x0 = w / 2;
    y0 = h / 2;
    //    Рисуем координатные оси с центром в (x0,y0)
    for (i = 1; i < w; i = i + 8) win.document.write(" <div style='top: " + y0 + " ; left: " + i + " '>_</div> ");
    for (i = 1; i < h; i = i + 8) win.document.write(" <div style='left: " + x0 + " ; top: " + i + " '>|</div> ");
    //    Назначаем коэффициенты масштабирования графика по x (kx) и y (ky)
    kx = w / 20;
    ky = h / 20;
    //   Цвет пера
    if (c == 1)
        win.document.write("<font color=black>");
    else if (c == 2)
        win.document.write("<font color=green>");
    else if (c == 3)
        win.document.write("<font color=red>");

    //    В цикле по х от -10 до 10 с шагом 0.01
    for (x = -10; x < 10; x = x + 0.01) {
        //    Выборка значения 

        if (v == 1)

            y = x * x;
        else if (v == 2)
            y = x * x * x;
        else if (v == 3)
            y = Math.sin(x);
        else if (v == 4)
            y = Math.cos(x);
        //    И в соответствующем месте экрана ставим точку
        win.document.write("<div style='left:" + (x0 + kx * x) + ";top:" + (y0 - ky * y) + " '>.</div>");
    }
});