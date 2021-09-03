var win;
function W_open(){
     win = window.open("about:blank","Window","height=500,width=500");
     win.focus();
}
function W_write(){
    win.focus();
    win.document.write("Hello World </br> Имя окна: "+ win.name);
}   
function W_close(){
    win.close();
}
document.write("</br>");
document.write("<table>");

document.write("</tr>");

document.write("<td>" + "Свойство" + "</td>");
document.write("<td>" + "Значение" + "</td>");

document.write("</tr>");

document.write("<td>" + "navigator.userAgent" + "</td>");
document.write("<td>" + navigator.userAgent + "</td>");

document.write("</tr>");

document.write("<td>" + "navigator.appVersion" + "</td>");
document.write("<td>" + navigator.appVersion + "</td>");

document.write("</tr>");

document.write("<td>" + "navigator.appName" + "</td>");
document.write("<td>" + navigator.appName + "</td>");

document.write("</tr>");

document.write("<td>" + "navigator.appCodeName" + "</td>");
document.write("<td>" + navigator.appCodeName + "</td>");

document.write("</tr>");

document.write("<td>" + "navigator.platform" + "</td>");
document.write("<td>" + navigator.platform + "</td>");

document.write("</tr>");

document.write("<td>" + "navigator.javaEnabled()" + "</td>");
document.write("<td>" + navigator.javaEnabled() + "</td>");

document.write("</tr>");

document.write("<td>" + "screen.width,screen.height" + "</td>");
document.write("<td>" + screen.width + " " + screen.height + "</td>");

document.write("</tr>");

document.write("<td>" + "screen.colorDepth" + "</td>");
document.write("<td>" + screen.colorDepth + "</td>");

document.write("</tr>");

document.write("<td>" + "history.length" + "</td>");
document.write("<td>" + history.length + "</td>");

document.write("</tr>");

document.write("<td>" + "location.href" + "</td>");
document.write("<td>" + location.href + "</td>");

document.write("</tr>");

document.write("<td>" + "location.pathname" + "</td>");
document.write("<td>" + location.pathname + "</td>");

document.write("</tr>");

document.write("<td>" + "location.hostname" + "</td>");
document.write("<td>" + location.hostname + "</td>");

document.write("</table>");