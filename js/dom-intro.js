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
});