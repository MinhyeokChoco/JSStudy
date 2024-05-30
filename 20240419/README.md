# 쿠키 세션 로컬스토리지


## 쿠키 문법
```js
// 쿠키 키 = 값; expires = '시간'; path = /
// toUTCString 문자열로 표준시 표현
// 게시판 = "{}"; expires `date.toUTCString()`; + path = /

function createCookie(name, value){
    let date = new Date();
    // 밀리세컨드 시간으로 수정
    // getTime으로 밀리세컨드 시간을 가져와서 + 10000해서
    // 현재시간에서 10초 후의 시간
    date.setTime(date.getTime() + 10000);
    // 쿠키의 값을 생성
    document.cookie = `${name} = ${value}; expires = ${date.toUTCString()}; path =/`
}
```

```js
function setCookie(name, value, options = {}) {

  options = {
    path: '/', // 경로 지정
    ...options // 아규먼트로 옵션을 넘겨줬을경우 전개연산자로 추가 갱신
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString(); // 생 Date 객체라면 형식에 맞게 인코딩
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) { // 밸류가 없다면
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie; // 새로 갱신
}

//쿠키 생성
if (!document.cookie) {
   setCookie('expires', date.toUTCString());
   console.log('new Cookie created !');
}

// 쿠키 추가
setCookie('user', 'John', {secure: true, 'max-age': 3600});
```

```js
// 키와 값과 시간 경로
function createCookie(name, value, time) {
    // 썩은 쿠키는 유효하지 않다.
    // 시간을 넣지 않고 쿠키를 생성하면 세션 쿠키 지속 계속 되는 쿠키
    let date = new Date();
    // 밀리세컨드로 시간을 장가된 값으로 만들어서
    // 1000 === 1초

    // 1일 이후의 시간을 만들면
    // time === 일 단위
    // time === 2면 2일
    date.setTime(date.getTime() + time * 24 * 60 * 60 * 1000);
    // toUTCString 표준시 시간 표시 메서드
    document.cookie = name + "-" + value + ";" + "expires" + date.toUTCString() + ";" + "path=/"

}

document.cookie
```

## 세션

### 문법

```js
// 세션에 값을 저장
// setItem
sessionStorage.setItem("토큰", "데이터의 내용");

// 세션의 값을 호출
// 토큰의 키가 있는지 확인 후 있으면 키 안의 데이터를 호출
sessionStorage.getItem("토큰")

// 세션 전체 삭제
sessionStorage.clear();

// 세션 하나 제거
sessionStorage.removeItem("토큰");
```

## 로컬 스토리지

### 문법
```js
// localStorage 큰 데이터를 저장할 때 사용한다.
localStorage.setItem("토큰", "데이터의 내용");

localStorage.getItem("토큰");

localStorage.clear();

// 인덱스로 값을 호출
localStorage.key(0);
```