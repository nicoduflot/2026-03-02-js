/*
Un tableau contient des données indexées, c'et à dire qu'elle possède un index, un numéro pour savoir dans quelle ordre elles apparaissent dans le tableau.
L'index des tableaux est toujours numérique et commence à 0
*/

/* Avant ES6 */
/*
var tableau = new Array('valeur', 1, 13.5, {toto: 'tata'});

console.log(tableau);
console.log(typeof tableau);
*/

/* Depuis ES6 */
const tableau = ['valeur', 1, 13.5, {toto: 'tata'}];

console.log(tableau);
console.log(typeof tableau);

/* 
En PHP il existe des tableaux "associatif" : l'index est remplacé par une clef unique, cette clef est généralement une chaîne de caractère

$infoUser = [
    'nom' => 'Duflot,
    'prénom' => 'Nicolas',
    'age' => 46
]

$infoUser['nom'];

Il est possible de créer la même chose en JS, mais le résultat est bancal et totalement illégal
*/

const tabAsso = [];
/*tabAsso.push('toto');*/
tabAsso['tata'] = 'toto';
tabAsso['manger'] = 'cailloux';
console.log(tabAsso);
console.log(tabAsso['tata']);
console.log(tabAsso['manger']);

/*
A NE JAMAIS FAIRE

On utilisera des classes créants des objets de collection

*/

const cars = ['Peugeot', 'Citroën', 'Renault'];
cars[cars.length] = 'Ford';
/* ça marche mais c'est moche */
cars.push('Fiat'); /* .push() permet d'ajouter des élément À LA FIN DU TABLEAU */
cars.push('BMW', 'Mercedes', 'Audi');
console.log(cars);

/* Les tableaux sont des objets ITÉRABLES */
console.log('-------------- Boucles -----------------------------');
console.log('----------------------------------------------------');
console.log('-------------- Boucles for -------------------------');
/* la boucle for basique nécessite une variable d'itération */

for( let i = 0; i < cars.length; i = i + 1 ){
    console.log(`À l'indice ${i}, valeur ${cars[i]}`);
}
console.log('-------------- Boucles for in ----------------------');
for (let index in cars){
    console.log(`À l'indice ${index}, valeur ${cars[index]}`);
}

/* Le for in permet de "parcourir" les clefs d'un objet */

/* Créons un objet litéral */

let obj = {
    nom: 'Duflot',
    prenom: 'Nicolas',
    presentation : function(){
        return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`;
    }
};

console.log(obj);
console.log(obj.nom);
console.log(obj.prenom);
console.log(obj.presentation());

for (let key in obj){
    console.log(`À la clef ${key}, valeur ${obj[key]}`);
}

console.log('-------------- Boucles for of ----------------------');
/* Existe seulement depuis ES6 */
for(let car of cars){
    console.log(`La valeur actuellement vue du tableau est ${car}`);
}
console.log('----------------------------------------------------');
console.log('-------------- Boucles tant que & faire tant que----');
console.log('-------------- Boucles tant que --------------------');
/* tant qu'une condition décrite dans le lancement de la boucle n'est pas atteinte, le contenu de la boucle s'éxécute */
let cpt = 0;
while(cpt < cars.length){
    console.log(`À l'indice' ${cpt}, valeur ${cars[cpt]}`);
    cpt = cpt + 1;
}

console.log('-------------- Boucles faire tant que --------------');
/* le contenu de la boucle s'éxécute tant qu'une condition décrite dans les conditions de fin de la boucle n'est pas atteinte */
cpt = 0;
do{
    console.log(`À l'indice' ${cpt}, valeur ${cars[cpt]}`);
    cpt = cpt + 1;
}while(cpt < cars.length);

console.log('----------------------------------------------------');
console.log('-------------- Méthodes de parcours de tableau -----');
console.log('-------------- .map() ------------------------------');
cars.map( function(car, index, tab){
    console.log(car, index, tab);
} );

const prix = [23, 255.5, 45, 22];

function TTC(listePrix, tva){
    listePrix.map(function(prixUnique, index, tab){
        tab[index] =  parseFloat((prixUnique * tva).toFixed(2));
    });
}
console.log(prix);
TTC(prix, 1.055);
console.log(prix);

/* Le .map() remplace pour les tableau la méthode .forEach() qui est applicables aux tableaux ET aux autres objets Itérable */
/* Quand on manipule un tableau, on utilisera de préférence .map() */

console.log('-------------- .forEach() ------------------------');
cars.forEach( function(car, index, tab){
    console.log(car, index, tab);
} );