// 우리가 만들어볼 게임은 업다운 게임
// 숫자를 맞추는 게임

// 1. 플레이어가 있고, 컴퓨터가 있어요 (플레이어 값 받을 변수, 컴퓨터 값 받을 변수)
// 2. 플레이어는 선택을 할 수 있고, 컴퓨터는 랜덤값.
// 3. 플레이어가 선택할 수 있는 제어문
// 4. 게임의 종료 시점을 정한다.

let playerSelect;
//
// 게임 시작하자마자 프로그램이 시작하게 되면 랜덤값을 뽑아놓고 시작.
// Math.random(); 랜덤값 뽑을 때 사용
// parseInt : 정수로 변환할 때 사용 (문자열이나 자료형의 소수점을 정수로 변환해줄 때 사용)
let comSelect = parseInt(Math.random() * 99); // 0 ~ 1 소수점을 반환해줌
console.log(comSelect);

let count = 0; // 우리가 게임을 시도한 횟수

let max = 99; // 플레이어가 선택 할 수 있는 최대 숫자 범위
let min = 0; // 플레이어가 선택할 수 있는 최소 숫자 범위

let text = ""; // 컴퓨터가 안내해줄 문구

// prompt 입력값은 문자열
// parseInt 데이터 타입을 숫자로 변환한다.
let gameCount = parseInt(prompt("게임 몇판 하시겠습니까 ?"));

while ((playerSelect !== comSelect) && count < gameCount) {
    // 정답의 내용 text와 입력의 설명 문구를 같이 작성
    // `${}` : 템플릿 리터럴
    // 문자열과 변수를 같이 사용하는 경우
    // ${} 작성하면 괄호안에 자바스크립트를 입력하겠다.
    playerSelect = prompt(`${text} 숫자를 입력하세요 최소 : ${min} | ${max} | 남은 횟수 : ${gameCount - count}`)

    // 문자열을 입력하게 되면
    // NaN
    // isNaN(값)
    // 숫자가 아닌 값을 입력했는가?

    // console.log(parseInt("sfafsefgs"))
    // console.log(isNaN(playerSelect));
    if (isNaN(playerSelect)) {
        text = "숫자를 입력 하세요"
        continue;
    }

    // 최소와 최대 범위의 값을 입력했는지.
    if ((min >= parseInt(playerSelect)) || (max <= parseInt(playerSelect))) {
        text = "입력값을 최소 최대에 맞게 작성하세요"
        continue;
    }

    // 게임 판수 증가
    count++;
    // 게임의 로직 시작
    // 오늘의 이슈는 타입
    // typeof 뒤에 있는 데이터의 타입을 
    // alert(typeof playerSelect);
    // alert(typeof comSelect);
    // alert(playerSelect > comSelect);
    playerSelect = parseInt(playerSelect);
    if (playerSelect > comSelect) {
        max = playerSelect;
        text = "다운";
    } else if (playerSelect < comSelect) {
        min = playerSelect;
        text = "업";
    } else {
        alert(`${count}번 시도해서 정답을 맞췄어 !! 축하해`)
        break;
    }

    if (count >= gameCount) {
        alert(`GameOver`)
        alert(`정답은 ${comSelect}`);
        break;
    }

}

// isNaN : 문자형을 숫자형으로 치환했을 때 숫자가 아닌 것들을 판별해주는 함수이다.
// isNaN으로 형은 숫자형인데 숫자가 아닌 문자형 글자일 때가 true 즉 참이며, 문자형인데 숫자형 같은 즉 "1" 이런 것들이 false이다.
// 그래서 정리하자면 문자형을 숫자형으로 치환했을 때 숫자가 아닌 문자들을 판별하는 함수이며 판별했을 때 숫자로 입력해달라고 팝업창을 띄우거나 알림창을 띄울 때 도움을 주는 함수