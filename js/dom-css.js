window.addEventListener('DOMContentLoaded', function(){
    const myDiv = document.getElementById('myDiv');
    myDiv.style.setProperty('border', '1px solid black');
    myDiv.style.height = '100px';
    myDiv.style.marginTop = '10px';
    myDiv.style.marginBottom = '10px';
    console.log(myDiv.style);
    console.log(myDiv.style.getPropertyValue('border'));
    
    /*
    exercice : 
    quand on clique sur le bouton id btn, l'apparence du paragraphe id cible change

    si il y a une bordure, elle disparaît, sinon, la bordure doit avoir comme propriétés : 
    border-style: dashed
    border-color: black
    border-width: 2px
    */

});