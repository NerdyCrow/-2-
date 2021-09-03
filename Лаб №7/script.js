
function Write(){
    var win;
    var k;
    win=window.open("about:blank","Window","height=500,width=500");
var ext=document.form.holder.value;

 var Name1=document.form.firstname.value;
 var Name2=document.form.lastname.value;
 var sp=document.form.spec.value;
 
 var rad=document.getElementsByName('s');
 for(var i=0;i<rad.length;i++){
     if (rad[i].checked){
        k=rad[i].value;
          }
 }
 win.document.write("<center><h3>"+ext+"</h1></center>"+"   <p>Студент "+Name2+" специальность "+ sp+" курс "+k+" должен сдавать следующие предметы: "+"</p>"+"<ul>");

win.document.write("<select>");
 var chk=document.getElementsByName('space');
 for (i = 0; i < 5; i++) {
    if (chk[i].checked){
       win.document.write("<option><u>"+chk[i].value+"</u></option>");
    }
 }
 win.document.write("</ul></br>");

    








}

