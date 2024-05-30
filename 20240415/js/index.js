// 반복문을 사용한 경우
// 여기부터 스톱워치 찍을게 ?
console.time();
let result = 0;
for (let i = 0; i <= 100; i++) {
    result += 1;
}
console.log(result);
console.timeEnd();

// 수학 공식을 사용한 경우
console.time();
let n = 100;
console.log((n / 2) * (n + 1));
console.timeEnd();

// 재귀 함수를 사용한 경우
console.time();
function sum(n, result) {
    if (n === 101) {
        console.log(result);
        return n;
    }
    sum(n + 1, result + n);
}

sum(1, 0);
console.timeEnd();

// 피보나치 수열
console.time();
function fibo(n) {
    if (n == 1 || n == 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(25));
console.timeEnd();

// memo 빈 객체 생성
// 상태 데이터를 객체에다 담아두려고
console.time();
let memo = {};

// in 예약어
// 객체 안에 키가 있는지 확인
// 반환값은 true false

function fibo2(n) {
    let result; // 연산을 하고 반환할 값

    // 한번 상태를 만든 연산인지.
    if (n in memo) {
        // 연산을 했었어
        result = memo[n];
        // 객체를 하고 넘어오면 더 이해가 될거니까.
    } else {
        // 연산을 안했었어
        if (n == 1 || n == 2) {
            result = 1;
        } else {
            result = fibo2(n - 1) + fibo2(n - 2);
        }

        // 다음번에 연산을 하지 않게 하기 위해서 상태 값을 저장
        memo[n] = result;
    }

    return result;
}

console.log(fibo2(50));
console.timeEnd();

// 2씩 더하기 해야함

function sum2(result, maxcount, index) {
    // console.log(index);
    if (maxcount < index) {
        return result;
    }
    return sum2(result + 2, maxcount, index += 1);
}

console.log(sum2(2, 5, 1));

let memo2 = {};
function fibo3(n) {
    let result;
    if (n in memo2) {
        result = memo2[n];
    } else {
        if ((n %= 2) == 0) {
            result += 2;
        }
        memo2[n] = result;
    }

    return result;
}

// 콜백 함수 연습

function addNumbers(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

function displaySum(sum) {
    console.log("두 숫자의 합은 " + sum + "입니다.");
}

addNumbers(5, 10, displaySum);

// 여기까지 연습