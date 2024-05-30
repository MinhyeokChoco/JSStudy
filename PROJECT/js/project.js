const loginFrm = document.querySelector(".frm")

class UserManager {
    userSignUp(uid, pw, name) {
        if (this.duplicateCheck(uid) == undefined) {
            localStorage.setItem(uid, JSON.stringify({ uid, pw, name }))
            alert("회원가입 완료");
            window.location.href = "./login.html";
        } else {
            alert("아이디가 중복되었습니다.");
        }
    } // 회원가입

    duplicateCheck(uid) {
        console.log("중복체크 완료");
        return localStorage.getItem(uid)
    } // 중복확인

    userLogin(uid, pw) {
        const userData = JSON.parse(localStorage.getItem(uid));
        if (userData == undefined) {
            alert("없는 유저 입니다.");
            return { uid: null, name: null };
        } else if (userData.pw === pw) {
            alert("로그인 성공");
            window.location.href = "./view.html";
            return userData;
        } else {
            alert("비밀번호를 확인하세요.");
            return { uid, name: null };
        }
    }
}

class User extends UserManager {
    constructor(uid = null, name = null) {
        super();
        this.uid = uid;
        this.name = name;
    }

    getUid() {
        return this.uid;
    }

    setUid(_uid) {
        return this._uid = uid;
    }

    getName() {
        return this.name;
    }

    setName(_name) {
        return this._name = name;
    }

    login(_uid, _pw) {
        const { uid, name } = this.userLogin(_uid, _pw);
        if (uid && name) {
            this.uid = uid;
            this.name = name;
            sessionStorage.setItem("userLogin", JSON.stringify({ uid, name }))
        }
    }

    logOut() {
        sessionStorage.removeItem(userLogin);
    }
}
let userManager;
function initUserManager() {
    userManager = sessionStorage.getItem("userLogin");
    if (userManager !== null) {
        userManager = JSON.parse(userManager);
        userManager = new User(userManager.uid, userManager.name)
    } else {
        userManager = new User()
    }
}

initUserManager();
const LOGIN = "frm";
const SIGNUP = "signup";
const POST = "post";

if (loginFrm)
    loginFrm.onsubmit = function (e) {
        onsubmitHandler(e);

    }

const onsubmitHandler = (e) => {
    e.preventDefault();
    switch (e.target.classList[e.target.classList.length - 1]) {
        case LOGIN: {
            const { uid: { value: uidValue }, upw: { value: upwValue } } = e.target;
            if ((uidValue !== "") && (upwValue !== "")) {
                userManager.login(uidValue, upwValue);
            } else {
                alert("아이디와 비밀번호를 모두 입력해주세요.")
            }
            break;
        }
        case SIGNUP: {
            const { uid: { value: uidValue }, uname: { value: unameValue }, upw: { value: upwValue } } = e.target;
            if ((uidValue !== "") && (unameValue !== "") && (upwValue !== "")) {
                userManager.userSignUp(uidValue, upwValue, unameValue);
            } else {
                alert("값을 모두 입력해주세요.")
            }
            break;
        }
        case POST: {
            const { title: { value: titleValue }, content: { value: contentValue } } = e.target;
            if ((titleValue !== "") && (contentValue !== "")) {
                if (userManager.name == null) {
                    alert("로그인을 다시 해주세요.")
                    window.location.href = "./login.html"
                    return;
                }

                console.log(userManager.name)
                const post = new Post(titleValue, contentValue, userManager.name);
                postList.push(post);
                localStorage.setItem("postList", JSON.stringify(postList))
                window.location.href = "./view.html"
            } else {
                alert("값을 모두 입력해주세요.")
            }
            break;
        }
        default:
            break;
    }
}


class Post {
    constructor(title, content, name) {
        this.title = title;
        this.content = content;
        this.name = name;
        this.date = this.getToday("-");
    }
    getToday(text) {
        const date = new Date();
        let m = date.getMonth() + 1;
        let d = date.getDate();

        // (m > 9 ? "" : "0") : 날짜를 두자리 문자로 표현하기 위해서 ex) 1 => 01
        // 2024 04 18
        return [
            date.getFullYear(),
            (m > 9 ? "" : "0") + m,
            (d > 9 ? "" : "0") + d,
        ].join(text) // text = / => "2024/04/18"
    }
}

let postList = new Post(title, content);
if (localStorage.getItem("postList") === null) {
    localStorage.setItem("postList", JSON.stringify(postList))
} else {
    postList = JSON.parse(localStorage.getItem("postList"));
}

function addElement() {
    let newUl = document.createElement("ul")
}

function rander() {
    let list = document.querySelector(".list")
    console.log(list);
    if (list !== null) {
        for (let i = 0; i < postList.length; i++) {
            const ul = document.createElement("ul");
            const li1 = document.createElement("li");
            const li2 = document.createElement("li");
            const li3 = document.createElement("li");
            const li4 = document.createElement("li");
            const li5 = document.createElement("li");
            const li6 = document.createElement("li");
            ul.onclick = function () {
                sessionStorage.setItem("detailIndex", i)
                window.location.href = "./detail.html"
            }
            ul.append(li1, li2, li3, li4, li5, li6);
            li1.innerHTML = i + 1
            li2.innerHTML = postList[i].title;
            li3.innerHTML = postList[i].content;
            li4.innerHTML = postList[i].name;
            li5.innerHTML = postList[i].date;
            li6.innerHTML = "X"
            list.append(ul);
        }
    }
    let detail = document.querySelector("#detail");
    if (detail !== null) {
        const writer = document.querySelector(".writer");
        const title = document.querySelector(".title");
        const content = document.querySelector(".content");

        const index = parseInt(sessionStorage.getItem("detailIndex"));
        if (index == null) return;
        writer.innerHTML = postList[index].name
        title.innerHTML = postList[index].title
        content.innerHTML = postList[index].content
    }
}
rander();

function rander2() {
    let list = document.querySelector("#comment")
    console.log(list);
    if (list !== null) {
        for (let i = 0; i < postList.length; i++) {
            const ul = document.createElement("ul");
            const li1 = document.createElement("li");
            const li2 = document.createElement("li");
            const li3 = document.createElement("li");
            const li4 = document.createElement("li");
            const li5 = document.createElement("li");
            const li6 = document.createElement("li");
            btn.onclick = function () {
                sessionStorage.setItem("detailIndex", i)
                // window.location.href = "./detail.html"
            }
            ul.append(li1, li2, li3, li4, li5, li6);
            li1.innerHTML = i + 1
            li2.innerHTML = postList[i].title;
            li3.innerHTML = postList[i].content;
            li4.innerHTML = postList[i].name;
            li5.innerHTML = postList[i].date;
            li6.innerHTML = "X"
            list.append(ul);
        }
    }
    let detail = document.querySelector("#detail");
    if (detail !== null) {
        const writer = document.querySelector(".writer");
        const title = document.querySelector(".title");
        const content = document.querySelector(".content");

        const index = parseInt(sessionStorage.getItem("detailIndex"));
        if (index == null) return;
        writer.innerHTML = postList[index].name
        title.innerHTML = postList[index].title
        content.innerHTML = postList[index].content
    }
}
rander();

// class 여러 객체를 생성해서 사용하기 쉽게 만드는 것
// new class명(키, 키, 키, 키)
// constructor 괄호 안에 있는 매개변수 길이 만큼 값을 넣어야 함
// 새로운 변수에 new 객체 생성자 함수를 담아서 매개변수의 길이 만큼 값을 넣어서 활용