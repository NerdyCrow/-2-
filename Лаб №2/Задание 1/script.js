function fun_1(){
    alert("Вас приветствует учебный центр");
    var name;
    name=prompt("Введите имя");
    alert("Добро пожаловать на наши курсы, "+ name);
    if(confirm("Хотите стать Web-дизайнером?")){
        alert("Учите стили CSS и JavaScript!");
    }
    else{
        alert("Упускаете время!");
    }
    }
function fun1(){
    var x=5;
    var y=10;
    alert("5+10="+(x+y));
}
function fun2(){
    var  x="5";
    var  y="10";
    alert("'5'+'10'="+(x+y));
    }
function fun3(){
    var a=22;
    var b="5";
    alert("22+'5'="+(a+b));
}
function fun4(){
    var a="22";
    var b=5;
    alert("'22'+5="+(a+b));
    alert("Результатом сложения строки и числа всегда будет строка");
}
function fun5(){
  
    var x=13;
    var y=17;
    var fir;
    var sec;
    fir=5*x*y+115-30/(x+y);
    sec=1120-3*x*(y+10);
    document.write('<span style="color:red; font-size:25px;font-family:cursive;">'+"x=13"+"<br/>"+"y=17"+'</span>'+"<br/>"+"Первое выражение: 5*x*y+115-30/(x+y)="+fir+"<br/>"+"Второе выражение:1120-3*x*(y+10)="+sec+"<br/>"+"Остаток от деления первого выражения на второе: "+fir%sec);
    alert("Остаток от деления первого выражения на второе: "+fir%sec);
    
}
function fun6(){
    var x;
    var y;
    var read;
    read=prompt("Введите любой число: ");
    if(read < 20 || read > 40 && read != 15 && read % 5 ){alert("Правильное значение");}
    else {alert("Неправильное значение");}
    
}
function fun7(){
    var a;
    var b;
    a=prompt("Введите число А: ");
    b=prompt("Введите число B: ");
    if(a>b){alert("A больше B");}
    else if(a==b){alert("A равно B");}
    else{alert("A меньше B");}
    var sec;
    sec=prompt("Введите любое число");
    sec%2==0?alert("число четное"):alert("число нечетное");
}
function fun8(){
    var day;
    day=prompt("Номер дня недели");
    switch(day){
        case "1":
        alert("Сегодня понедельник!!!");
        break;
            
        case "2":
            alert("Сегодня вторник!!!");
            break;
         case "3":
                alert("Сегодня среда!!!");
                break;
        case "4":
                    alert("Сегодня четверг!!!");
                    break;
        case "5":
            alert("Сегодня пятница!!!");
            break;
         case "6":
                alert("Сегодня суббота!!!");
                break;
        case "7":
            alert("Завтра на работу");
            break;
        default:
            alert("Неверные данные");
            break;
         
    }
}
function fun9(){
    try {
   
        hello;
      
      } catch(e) {
      
        alert("Ошибка");
      
      }
      

}





