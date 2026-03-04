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

    /*
    Menu glissant
    Il s'agit simplement d'ajouter une classe à un élément qui est situé hors affichage (en dehors du viewport)

    On repère le clic sur les boutons avec la classe toggle-menu
    Le bouton cliqué nous donne le menu ciblé grâce au dataset target
    on ajoute à la cible la classe qui déclenche l'action du menu
    quand on clique à nouveau sur le bouton on enlève la classe et le menu sort de l'écran
    */

    q('button.toggle-menu').map(function(button){
        button.addEventListener('click', function(){
            q(this.dataset.target).classList.toggle('toggle-element');
        });
    });

    /*
    On ajoute un bouton pour fermer le menu dans le menu

    On clic sur ce bouton close contenu dans une nav ayant la classe slide-menu
    on reprère l'élément parent du bouton
    on remove la classe toggle-element du parent
    */

    q('.slide-menu .btn-close').map(function(button){
        button.addEventListener('click', function(){
            this.parentElement.classList.remove('toggle-element');
        });
    });

    /* 
    Interactivité sur un tableau
    parcourir toutes les td du tableau id coord, abonner chaque td aux événements mouseenter et mouseleave
        - mouseenter : on récupère les dataset de la td column et line
        on applique à chaque td ayant la même colonne un background color rgba(255,0,0,0.5)
        on applique à la tr parent le même background color

        - mouseleave :  on récupère les dataset de la td column et line
        on retire le background color des td avec le meme dataset column
        on retire le background de la tr parente
    */

    q('#coord td').map(function(td){
        td.addEventListener('mouseenter', function(){
            const column = this.dataset.column;
            const line = this.dataset.line;
            q('#xy').innerHTML = `x : ${column} - y : ${line}`;
            q('#xValue').value = column;
            q('#yValue').value = line;
            q(`#coord td[data-column="${column}"]`).map(function(tdy){
                tdy.style.setProperty('background-color', 'rgba(255, 0, 0, 0.5');
            });
            q(`#coord td[data-line="${line}"]`).map(function(tdx){
                tdx.style.setProperty('background-color', 'rgba(255, 0, 0, 0.5');
            });
        });
        td.addEventListener('mouseleave', function(){
            const column = this.dataset.column;
            const line = this.dataset.line;
            q('#xy').innerHTML = `x : &nbsp; - y : &nbsp;`;
            q('#xValue').value = 0;
            q('#yValue').value = 0;
            q(`#coord td[data-column="${column}"]`).map(function(tdy){
                tdy.style.removeProperty('background-color');
            });
            q(`#coord td[data-line="${line}"]`).map(function(tdx){
                tdx.style.removeProperty('background-color');
            });
        });
    });

});