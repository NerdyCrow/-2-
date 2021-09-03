 
document.write("<table>");
var x;
var y;
x=prompt("Введите длину строки:");
y=prompt("Введите высоту столбца:");
for(var i=1;i <= y;i++)
{
    document.write("<tr>");
    document.write("<td>"+i+"</td>");
    for(var j=2;j <= x;j++){
        document.write("<td>"+i*j+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");