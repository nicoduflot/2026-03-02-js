/* session storage */

function sessionUserNamelogged(){
    const username = document.getElementById('sessionUser').value;
    console.log(username);
    if('' !== username){
        sessionStorage.setItem('usernameSession', username);
        document.getElementById('sessionUserLogged').innerHTML = `<b>${username}</b>`;
        document.getElementById('sessionUser').value = '';
    }
}

function checkSessionUser(){
    if(username = sessionStorage.getItem('usernameSession')){
        document.getElementById('sessionUserLogged').innerHTML = `<b>${username}</b>`;
    }
}

function sessionUserNameDelete(){
    sessionStorage.removeItem('usernameSession');
    document.getElementById('sessionUserLogged').innerHTML = '';
}

function sessionClear(){
    sessionStorage.clear();
    document.getElementById('sessionUserLogged').innerHTML = '';
}

/* local storage */
/* localstorage utilise les mêmes méthodes de manipulation que sessionstorage */

function localUserNamelogged(){
    const username = document.getElementById('localUser').value;
    console.log(username);
    if('' !== username){
        localStorage.setItem('usernameLocal', username);
        document.getElementById('localUserLogged').innerHTML = `<b>${username}</b>`;
        document.getElementById('localUser').value = '';
    }
}

function checkLocalUser(){
    if(username = localStorage.getItem('usernameLocal')){
        document.getElementById('localUserLogged').innerHTML = `<b>${username}</b>`;
    }
}

function localUserNameDelete(){
    localStorage.removeItem('usernameLocal');
    document.getElementById('localUserLogged').innerHTML = '';
}

function localClear(){
    localStorage.clear();
    document.getElementById('localUserLogged').innerHTML = '';
}

/*
'nom=valeur; max-age=secondes; path="/storage.html"; Samesite=Strict; secure'
document.cookie = 'username=toto; max-age=2500000; path=/storage.html; Samesite=Strict; secure';
document.cookie = 'titi=toto; max-age=2500000; path=/storage.html; Samesite=Strict; secure';

*/

const dateNow = new Date();
console.log(dateNow);
console.log(dateNow.getDate());
console.log(dateNow.getMonth());
console.log(dateNow.toLocaleDateString());
console.log(dateNow.toUTCString());
console.log(dateNow.toLocaleString());
console.log(dateNow.setTime(dateNow.getTime() + (24 * 60 * 60 * 1000)));
console.log(dateNow.toLocaleString());

/*
On utilisera max-age pour la durée de vie d'un cookie plutôt qu'une date générée en js
*/

/**
 * 
 * @param {String} name - nom du cookie
 * @param {String} value - valeur du cookie
 * @param {Int} days - durée de vie en jour du cookie
 * @returns {Bool}
 * 
 */
function setCookie(name, value = '', days = -1){
    const maxAge = days * 24 * 60 * 60;
    const chaineCookie = `${name}=${value}; max-age=${maxAge}; path=/storage.html; Samesite=Strict; secure`;
    document.cookie = chaineCookie;
    return true;
}

/* récupérer un cookie */
function getCookie(name){
    const tabCookie = document.cookie.split('; ');
    /*console.log(tabCookie);*/
    for(cookie of tabCookie){
        const cookieValue = cookie.split('=');
        /*console.log(cookieValue);*/
        if(cookieValue[0] === name){
            return cookieValue[1];
        }
    }
    return '';
}

/* enregistrer un cookie */
function cookieUserLogged(){
    const username = document.getElementById('cookieUser').value;
    if('' !== username){
        setCookie('username', username, 1);
        document.getElementById('cookieUserLogged').innerHTML = `<b>${username}</b>`;
        document.getElementById('cookieUser').value = '';
    }
}

/* cookie */
console.log(document.cookie);

console.log(getCookie('username'));

function cookieUsernameDelete(name){
    setCookie(name);
    document.getElementById('cookieUserLogged').innerHTML = '';
}

function checkUnsernameCookie(){
    document.getElementById('cookieUserLogged').innerHTML = `<b>${getCookie('username')}</b>`;
}