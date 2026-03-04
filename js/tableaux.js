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

/* Extraire des valeurs du tableau */
/* .pop() extraire la dernière valeur d'un tableau */
/* .shift() extraire la première valeur d'un tableau */
/* .splice() extraire x valeur d'un tableau depuis un indice x sur y valeur */

console.log('-------------- .pop() ------------------------');

const lastEntry = cars.pop();
console.log(lastEntry);
console.log(cars);

console.log('-------------- .shift() ------------------------');

const firstEntry = cars.shift();
console.log(firstEntry);
console.log(cars);

console.log('-------------- .splice() (1) --------------------');

const removed = cars.splice(1,3);
console.log(removed);
console.log(cars);

console.log('-------------- .splice() (2) --------------------');
const replaced = cars.splice(0,1, 'Alpine', 'Mazda');
console.log(replaced);
console.log(cars);

console.log('-------------- .splice() (3) --------------------');
cars.splice(1,0, firstEntry, lastEntry, removed[0], removed[1], removed[2], replaced[0]);
console.log(cars);

/* Comment créer une copie d'une tableau */
/*
Faire le script suivant ne copie pas le contenu du tableau dans un autre, mais crée une nouvelle référence du même tableau
(on lui donne un autre nom mais c'est toujours les mêmes données)

const carsClone = cars;
*/

/* Pour créer une nouvelle donnée, pour tableau, il faut utiliser la méthode .slice() */
console.log('-------------- .slice() () --------------------');

const carsClone = cars.slice();

console.log(carsClone);
carsClone.pop();
console.log(carsClone);
console.log(cars);

console.log(cars.slice(2, 4));

/* En JS, les tableauà deux dimension natifs n'existent pas */

const carsYears = [
    ['Fiat', 1996],
    ['Kya',  1995],
    ['Kya',  1990],
    ['Ford', 1950],
    [12, 25, 33],
];

console.log(carsYears);

console.table(cars);
console.table(carsYears);
console.log(carsYears[2][1]);

carsClone.sort();
console.log(carsClone);
carsClone.reverse();
console.log(carsClone);

const carsTest = carsYears.slice();
carsTest.sort();
console.table(carsTest);

/* parcourir un tableau de tableaux */
for(let i = 0; i < carsTest.length; i = i + 1 ){
    console.log(carsTest[i]);
    for(let j = 0; j < carsTest[i].length; j = j + 1){
        console.log(carsTest[i][j]);
    }
}

console.log('-------------- trouver la première occurence --');
/* trouver la première occurence d'un tableau selon un modèle */

const arrayNum =  [5, 8, 12, 33, 8, 130, 44]; /* trouver l'indice de la première occurence de la valeur 8 */
for(let indice in arrayNum){
    if(arrayNum[indice] > 20){
        console.log(arrayNum[indice]);
        break;
    }
}

console.log('-------------- .find() --------------------------');
const found = arrayNum.find(function(element){
    return element > 20;
});

console.log(found);
console.log('-------------- trouver ltoutes les occurences --');
console.log('-------------- .filter() --------------------------');

const filtered = arrayNum.filter(function(element){
    return element > 20;
});

console.log(filtered);

console.log('-------------- .indexOf() ---------------------------');
console.log(arrayNum.indexOf(12));


console.log('Le rapide renard saute par dessus le chien feignant'.indexOf('ien'));
console.log('Le rapide renard saute par dessus le chien feignant'.indexOf('Ien'));

const phraseTest = 'Le rapide renard saute par dessus le chien feignant'.toLowerCase();
console.log(phraseTest);
const chaineRecherche = 'IEN'.toLowerCase();

console.log(phraseTest.indexOf(chaineRecherche));
