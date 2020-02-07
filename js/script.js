



function kreirajBrojcanik(id) {
    var sviSegmenti = [];
    var clock = document.getElementById(id);
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    for (var i = 1; i < 8; i++) {

        var segment = document.createElement('div');
        segment.className = 'segment s' + i;
        wrapper.appendChild(segment);
        sviSegmenti.push(segment);
    }

    clock.appendChild(wrapper);


    function ukljuci(segment) {
        segment.classList.remove('ugasen')
    }

    function postaviVrijeme(broj) {
        for (var i = 0; i < sviSegmenti.length; i++) {
            sviSegmenti[i].classList.add('ugasen')
        }
        switch (broj) {
            case 0:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[4]);
                ukljuci(sviSegmenti[5]);
                ukljuci(sviSegmenti[6]);
                break;
            case 1:
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[5]);
                break;
            case 2:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[4]);
                ukljuci(sviSegmenti[6]);
                break;
            case 3:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[5]);
                ukljuci(sviSegmenti[6]);
                break;
            case 4:
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[5]);
                break;
            case 5:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[5]);
                ukljuci(sviSegmenti[6]);
                break;
            case 6:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[4]);
                ukljuci(sviSegmenti[5]);
                ukljuci(sviSegmenti[6]);
                break;
            case 7:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[5]);
                break;
            case 8:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[4]);
                ukljuci(sviSegmenti[5]);
                ukljuci(sviSegmenti[6]);
                break;
            case 9:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[5]);
                ukljuci(sviSegmenti[6]);
                break;
        }
    }

    return {
        setTime: postaviVrijeme
    }
}

var date = new Date();
var sati = date.getHours().toString().split('');
var minute = date.getMinutes().toString().split('');

var br1 = kreirajBrojcanik('clock');
br1.setTime(+sati[0]);

var br2 = kreirajBrojcanik('clock');
br2.setTime(+sati[1]);

var min1 = kreirajBrojcanik('clock');
var min2 = kreirajBrojcanik('clock');


var sec1 = kreirajBrojcanik('clock');
var sec2 = kreirajBrojcanik('clock');

setInterval(function(){
    var min = new Date().getMinutes().toString().split('');
    min1.setTime(+min[0]);    
    min2.setTime(+min[1]);}
    ,100);

setInterval(function(){
    var sec = new Date().getSeconds().toString().split('');
    sec1.setTime(+sec[0]);
    sec2.setTime(+sec[1]);
},100);






































/* sesti zadatak, hrana */
/*
var meals = [];


function addMeal() {
    var confirmation = confirm('Yes/No');
    if (!confirmation) {
        return;
    };

    var meal = {
        mealName: getVal('mealName'),
        mealDescription: getVal('mealDescription'),
        mealPrice: getVal('mealPrice'),
        mealPicture: getVal('mealPicture'),
        show: function () {
            return `
            <div>
                <h3>${meal.mealName}</h3>
                <h4>${meal.mealDescription}</h4>
                <img>${meal.mealPicture}
            </div>
            `;
        }
    };
    alert('Meal succesfully added!')
    meals.push(meal);
    osvjeziPrikaz();
}

function getVal(id) {
    return document.getElementById(id).value;
}


function clearForm() {
    fields = ['mealName', 'mealDescription', 'mealPrice', 'mealPicture']
    for (var field of fields) {
        resetVal(field);
    }
}

function resetVal(id) {
    return document.getElementById(id).value = '';
}

function osvjeziPrikaz() {
    var res = document.getElementById('results');
    res.innerHTML = ' ';
    for (var i = 0; i < meals.length; i++) {
        res.innerHTML += meals[i].show();
    }
}

var deleteMeal = function () {
    console.log('obrisano jelo');
}
 */



/* peti zadatak */

/* var users = [];

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
 */

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


/* intro

console.log('advanced css');

var x = 10;

var exp = '2+2+5+x';
console.log(eval(exp));
*/