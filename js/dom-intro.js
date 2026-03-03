console.log('chargement des éléments html');
window.addEventListener('DOMContentLoaded', function(){
    console.log('la page est chargée, on peut agir sur le DOM');
    console.log(window);
    const titrePrincipal = document.getElementById('titre-principal');
    console.log(titrePrincipal.innerHTML);
    console.log(titrePrincipal.innerText);
    titrePrincipal.addEventListener('click', function(event){
        /* this représente l'ojet sur lequel on a guetté un événement */
        console.log(this);
        console.log(titrePrincipal);
        console.log(event);
    });

    /*
    sélecteurs CSS résumés
    p                   => sélecteur balise, on utilise le nom de la balise, ici <p></p>
    .titreDeChapitre    => un élément ayant au moins la classe 'titreDeChapitre'
    #titre-principal    => un élément ayant l'id 'titre-principal'

    les sélecteurs CSS permettent d'utiliser deux méthodes de récupération d'élément
    querySelector(sélecteur css) => récupère la première occurence correspondant au sélecteur
    querySelectorAll(sélecteur css) => récupère une collection déléments correspondants au sélecteur
    */

    console.log(document.querySelector('p'));
    console.log(document.querySelector('header > div.container'));
    console.log(document.querySelectorAll('div.container'));
    console.log(document.querySelectorAll('p'));

    /* Repérer le clic sur le bouton */
    const buttonTest = document.querySelector('.test');
    buttonTest.addEventListener('click', function(event){
        event.stopPropagation();
        console.log('coucou bouton');
    });

    buttonTest.parentElement.addEventListener('click', function(event){
        event.stopPropagation();
        console.log('coucou paragraphe');
    });

    /*
    il est possible d'éviter de sélection des élément qui correspondent à minima au sélecteur du querySelector ou querySelectorAll
    p => tous les paragraphes
    p:not(.special) => tout les paragraphes qui ne contiennent la classe 'special'
    */

    document.querySelectorAll('p:not(.special)').forEach(function(para){
        /*console.log(para);*/
        para.addEventListener('click', function(){
            this.classList.toggle('fondGris');
            document.getElementById('showP').innerHTML = this.innerText;
        });
    });

    /*
    repérer quand le pointeur de la souris arrive et ressort du "périmètre" d'une image pour déclencher deux actions différentes
    */

    const imgOver = document.getElementById('img-over');

    imgOver.addEventListener('mouseenter', function(){
        this.setAttribute('src', './images/pip-boy-thumb-up.png');
        this.setAttribute('data-toto', './images/pip-boy-thumb-up.png');
    });
    
    imgOver.addEventListener('mouseleave', function(){
        this.setAttribute('src', './images/pip-boy-thumb-down.png');        
        this.removeAttribute('data-toto');
    });

});