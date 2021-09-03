var fio = "Слемнёв Виктор Николаевич";
document.write(fio +"     Длина этой строки: "+ fio.length+"</br>");
var fioH=fio.toUpperCase();
var fioL=fio.toLowerCase();
document.write(fioH);
document.write("</br>"+fioL);
var together=fioL.concat(fioH);
document.write("</br>"+together);
document.write("</br>"+ fioL.replace("слемнёв виктор николаевич","СВН"));
