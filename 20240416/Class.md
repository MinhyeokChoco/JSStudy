# Class
> 클래스틀 객체를 만들기 위해 사용되는 방법중 하나이다.
> 클래스를 사용하면 코드의 가독성이 좋아지고
> 상속을 통한 코드의 재사용성이 좋아진다.
> 유지보수성도 좋고 가독성도 좋고 재사용성도 좋다. 정규화도 가능하다.
> 객체만 만들지 않고 클래스를 만들어서 사용
> 공통적으로 사용하는 부분을 위로 올려서 사용하는 느낌 ( 이런 목적이다. )

```js
// 예약어가 class
// Class 선언하세요 : `class student {}` 이게 선언
// 비둘기 > 날 수 있다. > 날개가 있다. > 새 > 동물 > 살아있다.
class student {

    // 생성자 함수 constructor
    // 최초에 한번 new로 객체를 생성할 때
    constructor(_age, _phone, _city) {
        this.age = _age;
        this.phone = _phone;
        this.city = _city;
    }
}
// {}
let obj = new student(20, "01000000000", "서울");
console.log(obj);
```