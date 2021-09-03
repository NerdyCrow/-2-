function Gruppa(n, spec, kolich) {
   this.n = n;
   this.spec = spec;
   this.kolich = kolich;

   this.add_stud = function add_stud(k) {
      this.kolich += k;
      document.write(
         "В группу " + this.n + " добавили " + k + " студентов.<br><br>"
      );
   };

   this.sub_stud = function sub_stud(k) {
      this.kolich -= k;
      document.write(
         "Из группы " + this.n + " удалили " + k + " студентов.<br><br>"
      );
   };
}
gr1 = new Gruppa(2, "ИСиТ", 25);
gr2 = new Gruppa(3, "ИСиТ", 30);
gr3 = new Gruppa(10, "ПОИБМС", 29);
gr4 = new Gruppa(6, "ПОИТ", 31);

Gruppa.prototype.kurs = this.kurs;
gr1.kurs = 2;
gr2.kurs = 3;
gr3.kurs = 4;
gr4.kurs = 1;

gr1.add_stud(2);
gr2.add_stud(3);
gr3.add_stud(4);
gr4.add_stud(5);

gr1.sub_stud(5);
gr2.sub_stud(4);
gr3.sub_stud(3);
gr4.sub_stud(2);

document.write(gr1.n + " Группа Кол-во студентов = " +'<b>'+ gr1.kolich + '</b>'+"</br></br>");
document.write(gr2.n + " Группа Кол-во студентов = " + '<b>'+ gr2.kolich + '</b>' + "</br></br>");
document.write(gr3.n + " Группа Кол-во студентов = " +'<b>'+ gr3.kolich + '</b>' + "</br></br>");
document.write(gr4.n + " Группа Кол-во студентов = " +'<b>'+ gr4.kolich + '</b>' + "</br></br></br></br></br>");


//#3.......................................


spec = new Array();

    spec[0] = 6 * Math.pow(Math.PI,2) + 3 * Math.exp(8);
    spec[1] = 2 * Math.cos(4) + Math.cos(12)+8*Math.exp(3);
    spec[2] = 3 * Math.sin(9) + Math.log(5)+ Math.sqrt(3);
    spec[3] = 2 * Math.tan(5)+6 * Math.PI + Math.sqrt(12);

    document.write(spec + "</br>");
    delete spec[3];
    document.write(spec + "</br>");

    if(2 in spec){
       document.write("Имеется" + "</br>");
    }
    else{
       document.write("Не имеется" + "</br>");
    }

    if("n" in gr1){
      document.write("Имеется" + "</br>");
   }
   else{
      document.write("Не имеется" + "</br>");
   }

   document.write((gr1 instanceof Object) + "</br>");
   document.write((gr1 instanceof Array) + "</br>");

   document.write("Группа: " + typeof gr1 + "</br>");

//last ...............................

function num() {
   return 5;
}

document.write("Функция: " + typeof num() + "</br>");


document.write("Объект группы: " + typeof gr1 + "</br>");

document.write("Номер группы: " + typeof gr1.n + "</br>");
document.write("Специальность: " + typeof gr1.spec + "</br>");
document.write("Количество студентов: " + typeof gr1.kolich + "</br>");
document.write("Курса: " + typeof gr1.kurs + "</br>");


