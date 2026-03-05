export default function loaded(callback){
    window.addEventListener('DOMContentLoaded', callback);
}

export function q(selector){
    const list = document.querySelectorAll(selector);
    if(list.length > 1){
        return Array.from(list);
    }else{
        /* ajouter si pas de réponse alors return false */
        return Array.from(list)[0];
    }
}

export function cE(element, options = {}){
    
    const newElement = document.createElement(element);
    return newElement;
}

export function cTN(text){
    const textNode = document.createTextNode(text);
    return textNode;
}

export function erase_childs(node){
    if(node.childNodes){
        let childs = node.childNodes;
        while(childs.length > 0){
            node.removeChild(node.lastChild);
        }
    }
}