function loaded(callback){
    window.addEventListener('DOMContentLoaded', callback);
}

function q(selector){
    const list = document.querySelectorAll(selector);
    if(list.length > 1){
        return Array.from(list);
    }else{
        return Array.from(list)[0];
    }
}

loaded(function(){
    console.log(q('#coord'));
    console.log(q('p'));
    q('p').map(function(para){
        console.log(para);
    });

    
});