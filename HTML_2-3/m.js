var canv = document.getElementById('canvas'),
    ctx = canv.getContext('2d');
    canv.width=800;
    canv.height=400;
canv.style.background='khaki';


// Прямоугольники
var grad =ctx.createLinearGradient(0,0,0,350);
grad.addColorStop(0.5,'black');
grad.addColorStop(1.0,'white');
grad.addColorStop(0.0,'green');


var x=150;
ctx.fillStyle=grad;
ctx.fillRect(x,50,100,300);


var img=document.getElementById("lamp");
var pat=ctx.createPattern(img,"no-repeat");


ctx.fillStyle=pat;
ctx.fillRect(300,250,100,100);
ctx.fillStyle='darkgreen';
ctx.fillRect(500,120,100,230);
//***************************************** */

//ОСИ**********************************************
// координаты начала первой линии X,Y
ctx.moveTo(50,350);
// команда рисования линии с координатами конца линии
ctx.lineTo(700,350);
ctx.strokeStyle = "black"; //цвет линии
ctx.lineWidth = "2"; //толщина линии
ctx.stroke(); // обводка линии


ctx.moveTo(50,350);
ctx.lineTo(50,30);
ctx.stroke();  


ctx.moveTo(50,30);
ctx.lineTo(40,40);
ctx.stroke();  
ctx.moveTo(50,30);
ctx.lineTo(60,40);
ctx.stroke();

ctx.moveTo(700,350);
ctx.lineTo(690,360);
ctx.stroke();  
ctx.moveTo(700,350);
ctx.lineTo(690,340);
ctx.stroke();
//************************************************************ */


// Вертикальная ось ТЕКСТ

ctx.font='15px Arial ';
ctx.fillStyle='black';
ctx.fillText("3", 37, 305);
ctx.moveTo(47,300);
ctx.lineTo(53,300);
ctx.stroke();


ctx.fillText("6", 37, 255);
ctx.moveTo(47,250);
ctx.lineTo(53,250);
ctx.stroke();

ctx.fillText("9", 37, 205);
ctx.moveTo(47,200);
ctx.lineTo(53,200);
ctx.stroke();

ctx.fillText("12", 30, 155);
ctx.moveTo(47,150);
ctx.lineTo(53,150);
ctx.stroke();

ctx.fillText("15", 30, 105);
ctx.moveTo(47,100);
ctx.lineTo(53,100);
ctx.stroke();

ctx.fillText("18", 30, 55);
ctx.moveTo(47,50);
ctx.lineTo(53,50);
ctx.stroke();
//****************************************************** */

ctx.fillText("Количество исключённых студентов", 350, 20);

ctx.fillText("1 курс", 170, 370);

ctx.fillText("2 курс", 330, 370);

ctx.fillText("3 курс", 515, 370);


// 88888888888888888888888888888888888888888888888888888888888888888888888888888888888


var canv2 = document.getElementById('canvas2'),
    ctx2 = canv2.getContext('2d');
    canv2.width=800;
    canv2.height=400;
canv2.style.background='darkkhaki';
ctx2.beginPath();
ctx2.fillStyle = 'lightgrey';
ctx2.arc(350, 200, 120, 0, Math.PI*2, false);
ctx2.fill();


ctx2.shadowOffsetX=3;
ctx2.shadowOffsetY=3;
ctx2.shadowBlur=5;
ctx2.shadowColor='black';


// ctx2.arc(350, 200, 150, 0,(Math.PI+ Math.PI/2), true);
ctx2.beginPath();
ctx2.moveTo(350,200);
ctx2.fillStyle='blue';
ctx2.arc(350,200,100,0*Math.PI,1.05,false);
ctx2.fill();


ctx2.beginPath();
ctx2.moveTo(350,200);
ctx2.arc(350,200,100,1.05,2.09,false);
ctx2.fillStyle='red';
ctx2.fill();



ctx2.beginPath();
ctx2.moveTo(350,200);
ctx2.arc(350,200,100,2.09,4.06,false);
ctx2.fillStyle='lightgreen';
ctx2.fill();


ctx2.beginPath();
ctx2.moveTo(350,200);
ctx2.arc(350,200,100,4.06,5.76,false);
ctx2.fillStyle='purple';
ctx2.fill();


ctx2.beginPath();
ctx2.moveTo(350,200);
ctx2.arc(350,200,100,5.76,6.28,false);
ctx2.fillStyle='yellow';
ctx2.fill();

ctx2.font='25px Arial bold';
ctx2.fillStyle='blue';
ctx2.fillText("▣ Сон", 570, 100);
ctx2.fillStyle='red';
ctx2.fillText("▣ Университет", 570, 140);
ctx2.fillStyle='lightgreen';
ctx2.fillText("▣ Дорога", 570, 180);
ctx2.fillStyle='purple';
ctx2.fillText("▣ Досуг", 570, 220);
ctx2.fillStyle='yellow';
ctx2.fillText("▣ Остальное", 570, 260);






var ii1=document.getElementById('ii1').value;
document.getElementById('pp1').innerHTML += ii1;



function fun1(){
    var ff1=document.getElementById('ff1').value, tt1=document.getElementById('tt1').value, mm1=document.getElementById('mm1').value;
    document.getElementById('ss1').innerHTML=ff1;
    document.getElementById('ss2').innerHTML=tt1;
    document.getElementById('ss3').innerHTML=mm1;
}









































