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

function cE(element, options = {}){
    const newElement = document.createElement(element);
    return newElement;
}

function cTN(text){
    const textNode = document.createTextNode(text);
    return textNode;
}

function erase_childs(node){
    if(node.childNodes){
        let childs = node.childNodes;
        while(childs.length > 0){
            node.removeChild(node.lastChild);
        }
    }
}