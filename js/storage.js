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