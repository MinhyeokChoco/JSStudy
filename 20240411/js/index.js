// 반복문

// for(let a = 0; a < 10; a++){ //
// console.log(a); //
// } //

/*
[for(예약어)] ([선언식]; [조건문]; [연산식]) 반복될 코드의 내용
*/

// 순서
// 선언식 -> 조건문 확인 -> 스코프 코드 실행 -> (연산식 -> 조건문 -> 스코프 코드 실행) -> (연산식 -> 조건문 -> 스코프 코드 실행)


// 0~20까지 찍는 반복문
// 짝수만 20까지 홀수도 하면 좋습니다.

// for(let a = 0; a <= 20; a++) {
// console.log(a);
// }

// for(let b = 0; b <= 20; b+=2) {
// console.log(b);
// }

// for(let c = 1; c <= 20; c+=2) {
// console.log(c);
// }

// console.log(2 ** 4); //

// 만약 1이 아닌 2나 3을 늘리고 싶다면 +뒤에 +한개가 더 붙는게 아닌 =를 붙여서 +=을 붙여 연산식을 진행해야 한다.
// a++; : 연산식 or 증감식
// ** : 거듭제곱이고 ex) 2 ** 3 = 2*2*2 = 8이다.
// 전역변수에 선언한 변수를 지역에서 재선언해도 된다.
// 전역변수에 선언한 변수를 지역에서 선언하지 않고 호출해서 쓸 수 있다.
// 지역변수에 console.log()를 써서 출력하고 싶을 때 지역변수에 출력할 변수가 없을 때 전역변수에 선언되어 할당되어 있는 변수가 있다면 찾아서 출력함
// 지역변수에 선언한 변수는 전역 or 다른 지역에서 호출해서 쓸 수 없다.
// 만약 연산식에 i%=2 로 한다면 i를 2로 나누고 나머지 값을 할당해주는 연산식임

// index 용어 순회하는 넘버

// for (let i = 0; i < 10; i++) {
// for(let j = 0; j < 10; j++) {
// console.log("i, j", i, j);
// }
// }

// for (let i = 1; i < 10; i++) {
// console.log("2x" + i, "=", i * 2);
// }

// 구구단을 3단과 4단을 직접 만들어봅시다.
// 구구단을 2중 for문으로 2 ~ 10단 만들기.

// if는 중괄호가 없으면 바로 아래 줄까지만 유효하다.
// continue 밑의 코드 내용을 실행 X 다시 연산식 -> 조건문 -> 실행
// continue 예약어를 만나게 되면 밑에를 다 무시하고 연산식으로 올라감

for (let i = 0; i < 10; i++) {
    if ((i >= 3) && (i < 5)) continue;
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    console.log("3x" + i, "=", i * 3);
}

for (let i = 1; i < 10; i++) {
    console.log("4x" + i, "=", i * 4);
}

for (let i = 2; i <= 10; i++) {
    for (let m = 1; m < 10; m++) {
        console.log(i + "x" + m, "=", i * m);
    }
}

// 변수랑 문자열이랑 +로 출력하게 되면 문자열로 출력됨 그리고 문자열 말고 자료형이나 변수로 출력하고 싶을 때 , 콤마로 끊어주면 콤마 전까지만 문자열로 출력됨

// 잘 쓰는 사람들만 사용하라.
// 무한 루프 도는 경우
// 확실한 내용의 코드만 작성 해라
// while은 반복 횟수가 무한.
// break 반복문을 종료시킨다.
// 조건문 -> 코드 실행 -> 조건문 -> 코드 실행
// true

// while(true) { //
//     let a = 0; // X // 
//     a++; // 
//     ex)  1
//          1
//          1
//          1
//          1
//          1
//     if(a > 10) break; // 무한루프
//     console.log(a);
// }

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// while문으로 2단을 만들기 break문으로 종료
// while문으로 2단을 만드는데 조건문으로 break문 없이.

let b = 0;
while (true) {
    b++;
    if (b > 9) break;
    console.log("2x" + b, "=", b * 2);
}

let c = 0;
while (c <= 9) {
    c++;
    console.log("2x" + c, "=", c * 2);
}

// while 문은 조건문이 참일 때 실행되는 반복문이다. while(true)
// 조건은 문장안이 실행되기 전에 참, 거짓을 판단한다.
// 반복이 시작되기 전에 조건문은 참,거짓을 판단받게 된다.
// 만약 조건문이 참이라면, while문 안의 문장들이 실행된다. while(true){안의 문장들} 거짓이라면, 문장은 그냥 while 반복문 후로 넘어간다. while(false){안의 문장들} 이후로 넘어감