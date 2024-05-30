```sh
# git 초기화
git init

# git 원격 저장소 만들고

git remote add origin https://github.com/MinhyeokChoco/20240508_JS.git
git push -u origin main


# git에 올려서 1일 1커밋을 습관화 하면 좋다. (잔디를 빼곡하게 심으면 심을수록 좋음)
```

# 동기와 비동기 이벤트 루프

## 동기
> 직렬적으로 작업을 수행한다.

## 비동기
> 병렬적으로 작업을 수행한다.

## 스레드
> 일하는 사람의 숫자
> 혼자 일을 처리한다. (싱글 스레드)
    한명이 순서대로 빨래를 널고 나서 밥을 차리고 끝나면 티비를 켜고 등등

## 자바스크립트의 비동기 처리
1. web api == DOM, setTimeout
2. task Queue == 이벤트 발생 후 호출 되어야 할 콜백이 쌓이는 공간 Event loop가 정한대로 순서대로 기다린다. (콜백 큐)
3. Event loop == 이벤트 발생하고 호출될 콜백 함수를 관리, 순서를 결정해준다.


```js
function a() {
    console.log("안녕");
    console.log("안녕2");
    console.log("안녕3");
}

setTimeout(() => {
    console.log("안녕");
},1000) // 1초 뒤에 실행할 함수

setTimeout(() => {
    console.log("안녕");
},500) // 0.5초 뒤에 실행할 함수


a();
```

## 이벤트 루프
> 정한 순서대로 나열되어 있는 콜백 함수들을 콜 스택이 비워지면 순서대로 호출해서 실행한다. `콜백 큐`
> 실행 순서를 정해준다.
> 비동기적 자바스크립트 처리 코드가 종료되지 않아도 대기하지 않고 다음 코드 줄을 실행하는 자바스크립트 특성 (싱글 스레드)
> 비동기 처리를 위해서 이벤트 루프 특성을 사용한다


### setTimeout
> 콜 스택에 쌓여있는 내용을 모두 처리하고 호출을 하기 떄문에 정확하지 않다.

### 비동기 처리
> 서버로 데이터 요청을 보내고 응답을 받고 처리 해야 하는 코드를 기다리고 처리하고
> 웹 페이지의 다른 코드들은 우리가 서버의 데이터를 받는 동안 웹 페이지가 안 뜨거나 다른 코드들이 멈춰 있을 수 없기 때문에

## promise 객체
> 비동기 처리를 할 때 사용하고
> 대기, 성공, 실패의 반환값과 메서드를 가지고 있는 객체

```js
const promise = new Promise((res, rej) => {
    // 비동기 처리 구문
    // setTimeout
    setTimeout(() => {
        res("성공했어");
    }, 1000)
}); // Promise 객체 생성
// 인자로 생성자 함수에 콜백 함수를 전달한다.
// res 성공의 결과를 반환해줄 함수 (첫번째 매개변수)
// rej 실패의 결과를 반환해줄 함수 (두번째 매개변수)

promise.then((result) => {console.log(result)}); // 비동기 처리를 한 뒤에 성공 결과를 반환한다.
promise.catch((error) => {console.log(error)}); // 비동기 처리를 한 뒤에 실패 결과를 반환한다.

const num = 10;
const promise2 = new Promise((res, rej) => {
    if(num > 5) {
        res("num이 5보다 크다.");
    } else {
        rej("num이 5보다 작다.");
    }
})

promise2.then((result) => {console.log(result)}).catch((error) => {console.log(error)})

const callbackPromise = (text, time) => {
    return new Promise ((res, rej) => {
        try {
            // 정상적으로 코드가 실행되면
            // 비동기 처리
            setTimeout(() => {
                res(text);
            },time);
        } catch(e) {
            // 코드가 정상적으로 실행되지 않으면
            rej(e);
        }
    })
}

callbackPromise("text 0", 1000)
.then((result) => {
    // then은 promise가 성공 하면 전달한 콜백함수 호출
    console.log(result);
    return callbackPromise("text 1", 1000); // 반환되는 promise 객체 안에 result값으로 할당한다.
})
.then((result) => {
    console.log(result);
    return callbackPromise("text 2", 1000);
})
.then((result) => {
    console.log(result);
    return callbackPromise("text 3", 1000);
})
.catch((result) => {
    // catch는 실패가 되면 호출되면 실행되는 콜백 함수
    console.log(result;)
});

// 대기 -> 응답을 받으면
// 서버에서 요청을 받는 경우에도 promise
// 대기 상태가 끝날때까지 대기 시키고 이후에 정상적으로 응답받은 값을 가지고
// 데이터를 사용
```

## async와 await
> ES8에서 탄생한 문법

```js
async function () {

}

// async를 붙인 함수는 반환이 promise
const asyncFn = async () => {
    try{
        // const test1 = callbackPromise("text1", 1000);
        // Promise 객체의 대기상태

        const text1 = await callbackPromise("text1", 1000);
        // await 뒤에 promise 대기 상태이면 코드를 밑으로 진행 시키지 않는다.
        // promise 객체의 대기 이후에 처리 결과를 반환
        console.log(text1);

        const text2 = await callbackPromise("text2", 1000);
        console.log(text2);

        const text3 = await callbackPromise("text3", 1000);
        console.log(text3);

        return text1;
    }
    catch(e){
        console.log(e);
    }
}
console.log(asyncFn());

async function a() {
    await asyncFn();
    console.log("안녕");
}
a();
```

주의할 점
then
catch

위의 두개와 아래 두개를 같이 쓰면 안된다.
만약 같이 쓰면 다른 사람이 코드를 봤을 때 뜻을 잘 모르고 사용했다. 라고 인식 하게 됨
then, catch or async, await 써야 함

async
await

실습
1초마다 1씩 증가되는 비동기 처리를 해서 함수로 작성을 해보자. 5까지 증가