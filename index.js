function Academy(name, students, subjects, start, end, numberOfClasses,){
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = numberOfClasses;
  
    this.printStudents = () => {
        return students
    };

    this.printSubjects = () => {
        return subjects
    }

};



let firstAcademy = new Academy("Hogwarts Academy", ["Slave", "Marko", "Ana", "George", "Aneta"], ["Web development", "Software Testing", "Game Design"], "17/10/2022", "20/10/2023", 30)
console.log(firstAcademy)
console.log(firstAcademy.printStudents());
console.log(firstAcademy.printSubjects());


function Subject(title, numberOfClasses, isElective, academy, students, overrideClasses){
    this.title = title;
    this.numberOfClasses = numberOfClasses
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.overrideClasses = overrideClasses;
};

let {title = "Web Development", numberOfClasses = 10, isElective = true, academy = firstAcademy, students = ["Slave", "Marko", "Ana", "George", "Aneta"], overrideClasses = 30} = Subject

let newSubject = new Subject(title, numberOfClasses = overrideClasses, isElective, academy, students, overrideClasses)
console.log(newSubject);














// accepts Academy object that it sets to the Academy property of the student






function Student(firstName, lastName, age, completedSubjects, academy, currentSubject, startAcademy, startSubject){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = completedSubjects;
    this.academy = academy;
    this.currentSubject = currentSubject;
    this.startAcademy = startAcademy;
    this.startSubject = startSubject;
};

let {firstName = "Slave", lastName = "Pejkov", age = 18, completedSubjects = [], myAcademy = null, currentSubject = null, startAcademy = firstAcademy, startSubject = newSubject} = Student

let newStudent = new Student(firstName, lastName, age, completedSubjects, myAcademy = startAcademy, currentSubject = startSubject, startAcademy, startSubject )
console.log(newStudent)
console.log(typeof startAcademy)