const student = {
    age: 28,
    phone: "01000000000",
    city: "서울"
}

const student2 = {
    age: 28,
    phone: "01000000000",
    city: "서울",
    say: function () {
        console.log(this);
    }
}

function createStudent(age, phone, city) {
    this.age = age;
    this.phone = phone;
    this.city = city;
}

// new는 빈 객체를 한 개 생성한다.
const student3 = new createStudent(23, "01000000000", "대구")
student2.say();
// this는 속해있는 객체를 참조한다.
// 객체에는 키와 값이 존재
console.log(this)
console.log(student);
console.log(student3);
console.log(student3.age); // === 23, (객체 안의 보고 싶은 값의 키를 호출함)
console.log(student3.phone); // === 01000000000

student.say = function () {
    console.log(this);
}

student.say();

// 실습을 할건데 학생의 정보를 이름과 나이만 받아서 만드는 함수를 작성하시고 옆친구 5분만 객체를 만들어보세요.

function createdevops(name, age) {
    this.name = name;
    this.age = age;
}

const devopsstudent1 = new createdevops("김기현", 94)
const devopsstudent2 = new createdevops("이경재", 94)
const devopsstudent3 = new createdevops("강태욱", 95)
const devopsstudent4 = new createdevops("이종석", 96)
const devopsstudent5 = new createdevops("최진우", 96)
console.log(devopsstudent1, devopsstudent2, devopsstudent3, devopsstudent4, devopsstudent5);

// function X 