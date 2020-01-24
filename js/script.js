var users = [];

function login() {
    var loginEmail = document.getElementById('email').value;
    var loginPass = document.getElementById('pass').value;

    for (var i = 0; i < users.length; i++) {
        if ((loginEmail == users[i].email || loginEmail == users[i].username) && users[i].pass == loginPass) {
            var loginform = document.getElementById('login-form');
            loginform.style.display = 'none';
            var homePage = document.getElementById('home');
            homePage.style.display = 'block';
            var userInfo = document.getElementById('userInfo');
            userInfo.innerHTML = users[i].firstName + ' ' + users[i].lastName;
        }
        else {
            var errMsg = document.getElementById('err-msg');
            errMsg.style.display = 'block';
        }
    }

}

function loginOnEnter(e) {
    if (e.keyCode == 13) {
        login()
    }

}

function signUp() {
    var confirmation = confirm('Yes/No');
    if (!confirmation) {
        return;
    };

    var user = {
        firstName: getVal('firstName'),
        lastName: getVal('lastName'),
        email: getVal('signUpEmail'),
        pass: getVal('signUpPass'),
        username: getVal('username')
    };
    users.push(user);
    console.log(users);
    hidesignUp();
    showLogin();
}

function getVal(id) {
    return document.getElementById(id).value;
}

function showLogin() {
    var loginform = document.getElementById('login-form');
    loginform.style.display = 'block';
}

function hideLogin() {
    var loginform = document.getElementById('login-form');
    loginform.style.display = 'none';
}

function showSignUp() {
    var signUpForm = document.getElementById('signup-form');
    signUpForm.style.display = 'block';
}

function hidesignUp() {
    var signUpForm = document.getElementById('signup-form');
    signUpForm.style.display = 'none';
}

function logout() {
    var homePage = document.getElementById('home');
    homePage.style.display = 'none';
    showLogin();
}

function redirectSignUp() {
    hideLogin();
    showSignUp();
}


/* cetvrti zadatak (mjenjaj boju nakon bacanja) */

/* var kockica = {
    boje:['red', 'blue', 'green', 'yellow', 'orange', 'cyan'],
    brojStrana: 6,
    baci: function () {
        var display = document.getElementById('display');
        var randomNum = Math.floor(Math.random() * kockica.brojStrana)+1;
        display.innerHTML = randomNum;
        kockica.promjeniBoju(randomNum);
    },
    promjeniBoju: function (index) {
        var display = document.getElementById('display');
        display.style.backgroundColor = kockica.boje[index];
    }
};

kockica.baci(); */


/* treci zadatak kockica */
/* var kockica = {
    brojStrana: 6,
    baci: function () {
        var display = document.getElementById('display');
        var randomNum = Math.floor(Math.random() * kockica.brojStrana)+1;
        display.innerHTML = randomNum;
    }
};

kockica.baci();
 */

/* drugi zadatak */
/*
function changeDivColor() {
    var color1 = window.getComputedStyle(box1).backgroundColor;
    var first = document.getElementById('box1');

    var color2 = window.getComputedStyle(box2).backgroundColor;
    var second = document.getElementById('box2');

    first.style.backgroundColor = color2;
    second.style.backgroundColor = color1;
}
 */


/* intro */
/* console.log('advanced css');

var x = 10;

var exp = '2+2+5+x';
console.log(eval(exp));
*/
