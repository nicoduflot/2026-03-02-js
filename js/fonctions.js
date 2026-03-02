console.log('Au lieu d\'écrire à chaque fois que l\'on a besoin des calculs suivant : ');
console.log(`La circonférence d'un cercle de 2 cm de rayon est ${2 * Math.PI * 2}`);
console.log(`La circonférence d'un cercle de 4 cm de rayon est ${2 * Math.PI * 4}`);
console.log(`La circonférence d'un cercle de 3 cm de rayon est ${2 * Math.PI * 3}`);
console.log('On crée une fonction réutilisable');

function circo(rayon = 0){
    let circonference = 0;
    circonference = 2 * Math.PI * rayon;
    return circonference;
}

console.log(`La circonférence d'un cercle de 2 cm de rayon est ${circo(2)}`);
console.log(`La circonférence d'un cercle de 4 cm de rayon est ${circo(4)}`);
console.log(`La circonférence d'un cercle de 3 cm de rayon est ${circo(3)}`);
console.log(circo());

/*
Opérateur variadique ( ou  rest parameter ou spread parameter )

function test(...valeurs){
    // les '...' devant valeur indiquent que valeurs doit être renseigné comme un tableau et traité comme tel
    for( let  indice in valeurs){
        console.log(valeurs[indice]);
    }
}

test();
valeurs => [];

test(12, 56, 42);
valeurs => [12, 56, 42];

function test2(x, choix = 'toto', ...valeurs){
    // les '...' devant valeur indiquent que valeurs doit être renseigné comme un tableau et traité comme tel
    for( let  indice in valeurs){
        console.log(valeurs[indice]);
    }
}

test(3);
x => 3;
choix = 'toto';
valeurs => [];

test(12, 56, 42);
x = 12
choix => 56;
valeurs => [42];

*/

function addition(...valeurs){
    let res = 0;
    for(let nombre of valeurs){
        if(!isNaN(nombre)){
            res = res + parseFloat(nombre);
        }
    }
    return res;
}

console.log(addition(0, 1, 1, 2, 3, 5, 8, 13));
console.log(addition(0, 1, 1, 2, '3', 5, 'toto',8, 13));

/* Fonction de rappel ou callback function ou fonction anonyme */
/*
const maFonctionAnonyme = function(name = null){
    let phraseDAccueil = 'Hello, my name is ';
    if(name === null){
        phraseDAccueil = phraseDAccueil + 'Kitty';
    }else{
        phraseDAccueil = phraseDAccueil + name;
    }
    return phraseDAccueil;
}
*/
/*
ternaire : un if en une ligne
(condition a vérifier)? résultat si la condition est vérifiée (vrai) : résultat si la condition n'est pas vérifiée (fausse);
*/

const maFonctionAnonyme = function(name = null){
    return `Hello, my name is ${(name === null)? 'Kitty' : name}`;
}

console.log(maFonctionAnonyme());
console.log(maFonctionAnonyme('Nicolas'));

/*
il est possible de lancer automatiquement un fonction de rappel sans passer par une constante ou une méthode qui utilise une fonction de rappel

Il faut utiliser la forme suivante : 

(la fonction anonyme a éxécuter)(les paramètres de la fonctions si besoin)
*/
(
    function(){
        console.log('Toto');
    }
)();

(
    function(name){
        console.log(`Coucou ${name}`);
    }
)('Nicolas');