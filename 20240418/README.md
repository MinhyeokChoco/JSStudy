# 댓글
# Counter
# Date
# CRUD ( Create Read Update Delete )

# Counter

0의 값을 가지고 + 버튼을 누르면 값이 증가하고 -를 누르면 값이 감소

1. 화면을 그리기
2. 기능을 작성
3. 입력값이 무엇인지.

# 첫번째 방법
```js
const _display = document.queryselector("#counter");
const incrementBtn = document.queryselector("#increment");
const decrementBtn = document.queryselector("#decrement");

let num = 0;
_display.innerHTML = num;

incrementBtn.onclick = function () {
    // + 증가 버튼을 눌렀을 때
    _display.innerHTML = ++num;
}

decrementBtn.onclick = function () {
    // - 감소 버튼을 눌렀을 때
    _display.innerHTML = --num;
}
```

# 두번째 방법
# 연산자 삼항 연산자
```js
    true ? "참" : "거짓"; === 참
    false ? "참" : "거짓"; === 거짓
    ex 1 === 1 ? "참" : "거짓"; === 참
    if(1===1) {
        return "참";
    } else {
        return "거짓";
    }

    // 안됩니다. 적어도 2뎁스 까지
    // 가능은 하지만 많으면 많아질수록 알아보기가 힘들어짐
    1 === 1 ? 2 === 2 ? 3 === 3 ? "참" : "거짓" : "거짓" : "거짓";


    const _display = document.queryselector("#counter");
    const incrementBtn = document.queryselector("#increment");
    const decrementBtn = document.queryselector("#decrement");

    let num = 0;
    _display.innerHTML = num;

    function handler(e) {
        // e 버튼을 클릭하면 함수를 호출하는데 onclick에 할당한 함수가 호출되는데
        // e.target === 이벤트가 발생한 요소
        // el.id
        _display.innerHTML = e.target.id === "increment" ? ++num : --num;
    }

    incrementBtn.onclick = function(e) {
        console.log(e);
        console.log(e.target);
        handler(e);
    }
    decrementBtn.onclick = function(e) {
        console.log(e)
        console.log(e.target);
        handler(e);
    }

```

### try catch

> 오류가 발생하면 코드 종료되는데.
> 프로그램이 종료되지 않고 에러의 내용을 알려주고
> 코드의 실행은 그대로 진행시킨다.

```js
try {
    // 코드의 내용
} catch(e) {
    console.log(e);
}

```