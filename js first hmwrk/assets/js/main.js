

function student(name, surname, age, phoneNumber) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.phoneNumber = phoneNumber;
}
var students = [
    new student('nurlan', 'memmedov', 19, '52022562'),
    new student('kenan', 'alizade', 18, '76579113'),
    new student('rauf', 'aliyev', 20, '81w004421'),
    new student('murad', 'quliyev', 29, '10594751'),
];


function teacher(name, surname, age, education = [], experience = []) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.education = education;
    this.experience = experience;
};

const teachers = [
    new teacher('jamil', 'alisgandarov', 22, ['codeAcademy', 'Adnsu'], ['pashabank', 'codeAcademy']),
    new teacher('yolchu','nesib',28,['codeAcademy', 'Adnsu'], ['pashabank', 'codeAcademy']),
];



function clas(name, room, students, teacher,totalDuration) {
    this.name = name;
    this.room = room;
    this.students = students;
    this.teacher = teacher;
    this.totalDuration = totalDuration;

    this.getStudentList = function () {
        for (let i = 0; i<this.students.length; i++) {
            console.log(this.students[i].name + ' ' + this.students[i].surname);
        }
        
    }
    this.getStudentPhoneNumber = function (studentName) {
        for (let i = 0; i<this.students.length; i++) {
            if (studentName === this.students[i].name ) {
                return (this.students[i].phoneNumber);
            }
        }

        return 'student is not foud';
    }

};

var classes = [
    new clas('titan', 'programming', students, teacher,340),

];

classes[0].getStudentList();
console.log(`phone numbers of students:   ${classes[0].getStudentPhoneNumber('kenan')}`);

