//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

	get name(){
		return this._name;
	}
	set age(newAge){
		this._age = newAge;
	}
	get age() {
	    return this._age;
  }
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}
const student = new Student("John", 25);
console.log(student.name);
console.log(student.age);
student.study();

const teacher = new Teacher("Joe", 29);
console.log(teacher.name);
console.log(teacher.age);
teacher.teach();



// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
