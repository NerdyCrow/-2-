//************************************SMOKE**************************************** 
//************************************SMOKE**************************************** 
//************************************SMOKE**************************************** 

let smoke = document.getElementById('smoke');
// отслеживаем нажатие
smoke.onmousedown = function(e) {

        //объявление картинка будет там же, но уже в абсолютных координатах
        smoke.style.position = 'absolute';
        moveAt(e);
        // показывем картинку над другими элементами


        // передвигаем картинку под координаты курсора
        //определение  и сдвигаем на половину ширины/высоты для центрирования
        function moveAt(e) {
            smoke.style.left = e.pageX - smoke.offsetWidth / 2 + 'px';
            smoke.style.top = e.pageY - smoke.offsetHeight / 2 + 'px';
        }

        // перемещение по экрану     
        document.onmousemove = function(e) { moveAt(e); }

        //отслеживаем окончание переноса     
        smoke.onmouseup = function() {
            document.onmousemove = null;
            smoke.onmouseup = null;
        }
    }
    // *********************************************TEXT************************************************
    // *********************************************TEXT************************************************
    // *********************************************TEXT************************************************
let moveT = document.getElementById('text');
moveT.onmousedown = function(e) {
    moveT.style.position = 'absolute';
    moveAt(e);
    document.body.appendChild(moveT);

    function moveAt(e) {
        moveT.style.left = e.pageX - moveT.offsetWidth / 2 + 'px';
        moveT.style.top = e.pageY - moveT.offsetHeight / 2 + 'px';
    }

    document.onmousemove = function(e) { moveAt(e); }
    moveT.onmouseup = function() {
        document.onmousemove = null;
        moveT.onmouseup = null;
    }
}

function fun3() {

    let beg = Date.now();


    let timer = setInterval(function() {
        let timePassed = Date.now() - beg;

        t2.style.left = timePassed / 2 + 'px';

        if (timePassed > 2000) clearInterval(timer);

    }, 5);

}

//*********************GRAPHIKS************************/
//*********************GRAPHIKS************************/
//*********************GRAPHIKS************************/
var hz;

function test() {
    hz = prompt('Введите график: ');
}

function fun4() {

    var k, col;
    col = Number(document.getElementById("col").value);
    if (document.getElementById("1").checked)
        k = Number(document.getElementById("1").value);
    else if (document.getElementById("2").checked)
        k = Number(document.getElementById("2").value);
    else if (document.getElementById("3").checked)
        k = Number(document.getElementById("3").value);
    else if (document.getElementById("4").checked)
        k = Number(document.getElementById("4").value);
    else if (document.getElementById("5").checked)
        k = Number(document.getElementById("5").value);
    //    Задаем position:absolute в стиле для всех div
    document.write(" <style>div{position:absolute}</style> ");
    //    w,h - ширина и высота экрана соответственно; (x0,y0)- координаты центра экрана
    w = screen.width;
    h = screen.height;
    x0 = w / 2;
    y0 = h / 2;
    //    Рисуем координатные оси с центром в (x0,y0)
    for (i = 1; i < w; i = i + 8) document.write(" <div style='top: " + y0 + " ; left: " + i + " '>_</div> ");
    for (i = 1; i < h; i = i + 8) document.write(" <div style='left: " + x0 + " ; top: " + i + " '>|</div> ");
    if (col == 1)
        document.write("<font color=red>");
    else if (col == 2)
        document.write("<font color=green>");
    else if (col == 3)
        document.write("<font color=blue>");
    else if (col == 4)
        document.write("<font color=pink>");
    //    Назначаем коэффициенты масштабирования графика по x (kx) и y (ky)
    kx = w / 70;
    ky = h / 70;

    //    В цикле по х от -30 до 30 с шагом 0.01
    for (x = -10; x < 10; x = x + 0.01) {
        if (k == 1) y = x * x;
        else if (k == 2) y = x * x * x;
        else if (k == 3) y = Math.sin(x);
        else if (k == 4) y = Math.cos(x);
        else if (k == 5) y = eval(hz);
        //    И в соответствующем месте экрана ставим точку
        document.write("<div style='left:" + (x0 + kx * x) + ";top:" + (y0 - ky * y + 3) + " '>.</div>");
    }
}

// ***************************************MENU*********************************************
// document.onmouseover = function(event) {
//     var target = event.target;
//     if (target.className != 'menu-item' && target.className != 'submenu') {
//         closeMenu();
//     }
// }
// document.getElementById('nav').onmouseover = function(event) {
//     var target = event.target; // где был клик?
//     if (target.className == 'menu-item') {
//         var s = target.getElementsByClassName('submenu');
//         closeMenu();
//         s[0].style.display = 'block';
//     }
// }



// function closeMenu() {
//     //получение всех элементов подменю в блоке nav, присваивание
//     //display:none
//     // var menu = document.getElementById('nav');
//     var subm = document.getElementsByClassName('submenu');
//     for (var i = 0; i < subm.length; i++) {
//         subm[i].style.display = "none";
//     }
// }

document.getElementById('nav').onmouseover = function(event) {
    var t = event.target; // где был клик?
    if (t.className == 'menu-item') {
        var s = t.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
}
document.onmousemove = function(event) {
    var t = event.target; // где был клик?
    console.log(event.target);
    if (t.className != 'menu-item' && t.className != 'submenu') {
        closeMenu();
    }
}

function closeMenu() {

    var subm = document.getElementsByClassName('submenu');
    for (var i = 0; i < subm.length; i++) {
        subm[i].style.display = "none";
    }
}