/*
C'est dans ce fichier où l'on va importer les différentes fonctions des bibliothèques qu'on va utiliser sur la page
*/
/* le script appliqué sur la page */
import test, {m} from "./Others.js";
console.log(test());
console.log(m);

import * as another from "./Anothers.js";
console.log(another.test());
console.log(another.m);
another.loaded(function(){
    console.log('page chargée');
});

import Company, {Toto} from "./Company.js";
const monEntreprise = new Company('Acme');
console.log(monEntreprise);
console.log(monEntreprise.showName());

const entrepriseConcurente = new Toto('Alchmex');
console.log(entrepriseConcurente);
console.log(entrepriseConcurente.showName());
