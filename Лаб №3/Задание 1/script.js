spec = new Array();

    spec[0] = 6 * Math.pow(Math.PI,2) + 3 * Math.exp(8);
    spec[1] = 2 * Math.cos(4) + Math.cos(12)+8*Math.exp(3);
    spec[2] = 3 * Math.sin(9) + Math.log(5)+ Math.sqrt(3);
    spec[3] = 2 * Math.tan(5)+6 * Math.PI + Math.sqrt(12);


    for(var i=0;i<4;i++){
        document.write((i+1)+".   "+spec[i]+"</br>");
    }
    var min = spec[0];
    var max = spec[0];
    var index=0;
    for (i = 1; i < spec.length; ++i) {
        if (spec[i] > max) {max = spec[i];index=i};
        }
        document.write("Максимальный элемент массива: "+ max+ " Его номер: " + index);
        
        for (i = 1; i < spec.length; ++i) {
            if (spec[i] < min) {min = spec[i];index=i};
            }
            document.write("</br> Минимальный элемент массива: "+ min+ " Его номер: " + index);



    /*spec.sort();
    document.write("Максимальный элемент массива: "+ spec[3]+ "Его номер");
    document.Write('Минимальный элемент массива: '+spec[0])*/


