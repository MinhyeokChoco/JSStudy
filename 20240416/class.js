class student {

    // 생성자 함수 constructor
    // 최초에 한번 new로 객체를 생성할 때
    constructor(_age, _phone, _city) {
        this.age = _age;
        this.phone = _phone;
        this.city = _city;
    }

    // 호출 조회 할 때 사용할 메소드
    // get
    get getAge() {
        return this.age;
    }

    // 수정을 할 때 사용할 메소드
    // set
    set setAge(_age) {
        this.age = _age
    }

    // 정적 메소드 클래스로 객체를 만들 때 생성되지 않는다.
    // 클래스 안에 있는 자원을 가지고 기능을 작성해야할 경우
    static myfn(age, phone, city) {
        let obj = new student(age, phone, city);
        obj.age = this.age;
    }
}

// {}
let obj = new student(20, "01000000000", "서울");

// 클래스 안에 있는 정적 메소드
// student.myfn();

console.log(obj);

// 부모 클래스
class Mother {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    getInfo() {
        return `이름 : ${this.name} / 나이 ${this.age}`;
    }

}

// 자식 클래스 Child 클래스
// 상속 예약어 extends
// 오버라이딩 오버로딩.
class Child extends Mother {
    // 최초에 딱 한번 호출
    constructor(_hp, _mp, _atk, _name, _age) {
        // super === 부모 클래스의 생성자 함수를 호출
        super(_name, _age)
        this.hp = _hp;
        this.mp = _mp;
        this.atk = _atk;
    }
    // 오버라이딩


    // 이런 내용은 this에 영향을 줄 수 있다.
    // 메소드 축약형
    // 규칙, 기본적인 틀 (get과 set의 개발자 규칙) / get 조회, set 수정
    // State는 규칙이 아님, 그냥 이름 아무거나 선언해주신 것.
    getState() {
        return `hp : ${this.hp} / mp : ${this.mp} / atk :  ${this.atk}`;
    }

    SetHp(_hp) {
        this.hp = _hp
    }

    static getAtk(n) {
        return n.atk
    }
}

// new
let character1 = new Child(100, 50, 200, "이민혁", 23); // 첫문자는 대문자로 할당해야 함
let character2 = new Child(150, 20, 100, "이민혁", 23);

console.log(character1);
console.log(character2);

console.log("캐릭터 1번", character1.getState());
console.log("캐릭터 2번", character2.getState());

character1.SetHp(50);

console.log("캐릭터 1번", character1.getState());

console.log(Character.getAtk(character2));


// 객체지향 5대 원칙 참고하기 (캡슐화 참고)