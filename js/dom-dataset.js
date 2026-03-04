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

loaded(function(){
    console.log(q('#coord'));
    console.log(q('p'));
    q('p').map(function(para){
        console.log(para);
    });

    q('p[data-module]').map(function(p){
        const module = p.dataset.module;
        /*console.log(module);*/
        /*
        switch classique
        switch (variable){
            case x :
                // instructions
            break;
            case  y:
            case  z:
                // les instructions valent pour les deux valeur
            break;
            case a:
            default:
                    // instruction par défaut si aucuns cas précédent ne correspond
        }

        remplace :
        if(variable === x){
            // instructions
        }else if(variable === y || variable === z){
            // instructions
        }else{
            // instructions a ou défaut
        }

        switch true

        switch(true){
            case a > b :
                // instructions
            break;
            case a === b :
                // instructions
            break;
            case a < b :
                // instructions
            break;
            default:
                // instructions
        }

        remplace :
        if(a > b){
            // instructions
        }else if(a === b){
            // instructions
        }else if(a < b){
            // instructions
        }else{
            // instructions
        }
        
        */

        switch(module){
            case 'color':
                const color = p.dataset.color || 'red';
                p.addEventListener('mouseenter', function(){
                    this.style.setProperty('color', color);
                });
                p.addEventListener('mouseleave', function(){
                    this.style.removeProperty('color');
                });
            break;
            case 'font':
            case 'magie':
                const weight = p.dataset.weight || '900';
                p.addEventListener('mouseenter', function(){
                    this.style.setProperty('font-weight', weight);
                });
                p.addEventListener('mouseleave', function(){
                    this.style.removeProperty('font-weight');
                });
            break;
            case 'after':
            default:
                const style = p.dataset.style || 'italic';
                p.addEventListener('mouseenter', function(){
                    this.style.setProperty('font-style', style);
                });
                p.addEventListener('mouseleave', function(){
                    this.style.removeProperty('font-style');
                });
        }

    });

    /*
    mini exo : 
    implémenter le menu glissant
    ajout de la classe toggle-element dans la nav
    faire les deux boutons
    /!\ ATTENTION /!\
    Le bouton 1 doit action le menu 1 et le bouton 2 le menu 2
    */


});