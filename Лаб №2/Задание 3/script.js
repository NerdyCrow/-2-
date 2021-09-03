var a,b,s,c;

a =+prompt('Введите a: ');
b=+prompt('Введите b: ');
document.write("<table>");
document.write("<tr>"+"<td>"+"Радиус"+"</td>"+"<td>"+"Площадь круга"+"</td>"+"<td>"+"Длина окружности"+"</td>"+"</tr>");
do{
    a+=0.3;
    document.write("<tr>"+"<td>"+a.toFixed(1)+"</td>");
    s=Math.PI * Math.pow(a,2);
    document.write("<td>"+ s.toFixed(1) + "</td>");
    c=2*Math.PI*a;
    document.write("<td>"+ c.toFixed(1) + "</td>"+"</tr>");
}
while(a<b){
    document.write("</table>");
}




