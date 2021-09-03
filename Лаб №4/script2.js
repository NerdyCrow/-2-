function Student(FirstName,SecondName,Physics,Math,Informatic){
    this.FirstName=FirstName;
    this.SecondName=SecondName;
    this.Physics=Physics;
    this.Math=Math;
    this.Informatic=Informatic;

    this.Name = function Name() {
        document.write("Имя: " + this.FirstName+"</br>"     + " Фамилия: " + this.SecondName + "</br>"            );
     };
     this.srednee = function srednee() {
        document.write("Средний балл =" + (this.Physics + this.Math + this.Informatic) / 3 +"</br>"+"</br>");
     };

}


stud1 = new Student("Слемнёв", "Виктор", 9, 9, 9);
stud2 = new Student("Рататуй", "Володя", 7, 8, 9);
stud3 = new Student("Борщ", "Гена", 4, 5, 6);

stud1.Name();
stud1.srednee();

stud2.Name();
stud2.srednee();

stud3.Name();
stud3.srednee();

Student.prototype.age = this.age;
stud1.age = 18;
stud2.age = 19;
stud3.age = 20;