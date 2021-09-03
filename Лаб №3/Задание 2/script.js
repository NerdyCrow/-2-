var mas = new Array("pow","pop","push","shift","round","floor","sline","sort");
var arr = mas.slice(1,4);
var sizeArr;
var sizeMath;
arr.push(mas.slice(6));
sizeArr=arr.push("concat")

var math=mas.slice(0,1);
math.push(mas.slice(4,6));
sizeMath=math.unshift("log");
document.write("Array: " + arr + "</br>   Кол-во элементов: "+ (sizeArr+1));
document.write("</br>MATH: " + math + "</br>   Кол-во элементов: "+ (sizeMath+1));