# 재귀 함수
# 배열과 객체
# 실행 컨텍스트
# 함수의 tip


## 재귀함수
> 재귀 함수는 함수의 내용에서 자신을 다시 호출해서 반복 작업을 하는 방식.
> for문으로도 반복문을 구현 가능한 로직들은 재귀 함수로 작성이 가능하다.
> 재귀 함수를 사용하는 이유는 반복하는 내용의 기능을 여러개로 나누고 직관적으로 관리할 때, 사용하는 프로그래밍 언어 패턴 중 하나
> 재귀 함수를 작성 할 때는 더이상 나눠야 할 필요가 없을 때 종료됨.
> 문제를 나눠서 기능을 작성하는 경우 이 두가지 패턴을 찾아서 활용해야한다.

## ex 사용 예)

## 반복문을 사용한 예)
```js
// 1 ~ 100까지 더한 수
let result = 0;
for (i = 0; i <= 100; i++){
    result += 1;
}
```

## 반복문을 수학적 공식을 가지고 반복문을 줄이는 예)

```js
let n = 100;
console.log((n / 2) * (n + 1));
// 하노이의 탑
```

## 재귀함수로 사용한 예)
```js
function sum(n, result) {
    if(n === 5){
        console.log(result);
        return n;
    }
    sum(n + 1, result + n);
}

sum(1, 0);
```

## 재귀함수의 목적
> 장점 : 반복문을 많이 사용하는 경우보다 코드가 간결하고 직관적이다.
> 단점 : 스택에 함수 실행이 쌓여서 메모리 공간을 많이 차지하고 속도 성능이 저하된다.


## 피보나치 수열을 만든다.
> 피보나치 수열은 규칙에 따라서 수를 나열하는 것
> 피보나치 수열은 토끼가 처음에 한쌍이 있고 aa
> 한달이 지나면 한쌍의 토끼가 성장 AA
> 그 이후 한달이 지나면 성장한 토끼가 새끼토끼 한쌍을 낳는다. AA bb
> 그 이후 한달이 지나면 성장한 토끼는 또 번식을 하고 새끼토끼는 성장해서 성체 토끼가 된다. AA BB
> 이런식으로 계속 증가하는 수열
> 규칙은 토끼는 죽지 않고 한달이 지나야 성체가 된다.

```js
function fibo(n) {
    if (n == 1 || n == 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
}

```

## 메모이제이션
> `상태`의 데이터를 만들 때 연산을 한 내용을 반복하지 않게 하는것이 목적
> `상태`의 데이터를 저장하면서 반복되는 연산을 줄이는 기법 

## 객체 문법
```js
let memo = {
    name : "이순현",
    color : "black"
};
// name 객체의 키 "이순현"이라는 값
"name" in memo === true;
"name2" in memo === false;
// name 이라는 키가 memo라는 변수에 있니 ? 라고 확인 / 있으면 true 없으면 false
memo["color"] === "이순현"
// [] = 안에는 키의 이름이 들어간다.
```

```js
// memo 빈 객체 생성
// 상태 데이터를 객체에다 담아두려고
let memo = {};

// in 예약어
// 객체 안에 키가 있는지 확인
// 반환값은 true false

function fibo2(n) {
    let result; // 연산을 하고 반환할 값

    // 한번 상태를 만든 연산인지.
    if(n in memo) {
        // 연산을 했었어
        result = memo[n];
        // 객체를 하고 넘어오면 더 이해가 될거니까.
    } else {
        // 연산을 안했었어
        if(n == 1 || n == 2) {
            result = 1;
        } else {
            result = fibo2(n - 1) + fibo(n - 2);
        }

        // 다음번에 연산을 하지 않게 하기 위해서 상태 값을 저장
        memo[n] = result;
    }
    
    return result;
}
```

## 2 + 2
## 실습 재귀함수로 짝수를 더하는 함수를 재귀적으로 돌리자 더하는 횟수는 인자값으로 전달 받아서.

```js
function sum2(result, maxcount, index) {
    // console.log(index);
    if (maxcount < index) {
        return result;
    }
    return sum2(result + 2, maxcount, index += 1);
}

console.log(sum2(2, 5, 1));
```