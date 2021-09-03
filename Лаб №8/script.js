function tsk1() {
    document.getElementById("task1").style.color = 'red';

}

function tsk2() {
    document.getElementById("task2").style.fontSize = '20px';
}
var flag = true;

function tsk3() {

    if (flag) {
        document.getElementById("task3").src = "2.jpg";
        flag = false
    } else {
        document.getElementById("task3").src = "1.jpg";
        flag = true;
    }

}
var flag1 = true;

function tsk4() {
    if (flag1) {
        document.getElementById('task4').innerHTML = "<img style='border-radius:30px' width = 10% src = '3.jpg'/>";
        flag1 = false;
    } else {
        document.getElementById('task4').innerHTML = 'Hello World';
        flag1 = true;
    }
}

function tsk5() {
    document.getElementById("task5").style.width = "30%";
}

function tsk5_2() {
    document.getElementById("task5").style.width = "10%";
}

function tsk6() {
    document.getElementById("task6").style.border = "2px dotted blue ";
}