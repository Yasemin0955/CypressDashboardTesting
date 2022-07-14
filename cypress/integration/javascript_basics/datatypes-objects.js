var name='Yasemin';
var age=30;
var name_object={firstname: 'Yasemin', lastname: 'Macit'};
var truth=true;
var sheets=['HTML', 'CSS'];
var a =null;

var students={
    firstName: 'Ali',
    lastName: 'Macit',
    age: 28,
    height: 180,

    fullName: function(){
        return this.firstName+ " "+this.lastName;
    }

};
const ageValue=students.age;
console.log(ageValue);
console.log(students.fullName());