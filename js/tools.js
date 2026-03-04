function loaded(callback){
    window.addEventListener('DOMContentLoaded', callback);
}

function q(selector){
    const list = document.querySelectorAll(selector);
    if(list.length > 1){
        return Array.from(list);
    }else{
        /* ajouter si pas de réponse alors return false */
        return Array.from(list)[0];
    }
}