// Commentaire en une ligne
/* 
Commentaire en bloc
Plusieurs lignes
...
*/

/* Déclaration de variable */
let prenom = 'Jean';
console.log(prenom);
console.log(typeof prenom);
/* Une variable n'est déclarée que seulement si la donnée doit changer */
let nom = 'Neige';

console.log(prenom, nom);
console.log(typeof prenom, prenom, typeof nom, nom);

let phrase = 'L\'annonce est lancée  /!\\';
console.log(phrase);

nom = 35;
console.log(typeof prenom, prenom, typeof nom, nom);

nom = '35';
console.log(typeof prenom, prenom, typeof nom, nom);

nom = 35;
console.log(typeof prenom, prenom, typeof nom, nom);

nom = nom + 1;
console.log(typeof prenom, prenom, typeof nom, nom);

nom = nom + '2.5';
console.log(typeof prenom, prenom, typeof nom, nom);

nom = 35;
console.log('ça fait longtemps que je n\'ai plus ' + nom + ' ans' );

console.log(`ça fait longtemps que je n'ai plus ${nom} ans` );
console.log(`j'ai ${nom + 11} ans` );

const LANGFR = 'fr-FR';
const LANGUK = 'en-UK';
const LANGES = 'es-ES';

/**
 * 
 * types
 * [Primitif]
 * number       => nombre (entier, flottant)
 * bool         => Booléen true ou false
 * 
 * [Référence]
 * String       => chaîne de caractère
 * Array        => tableau de données
 * Object       => objet
 * JSon         => Javascript Object Notation
 * 
 */

const unObj = {
    age: 46, /* un attribut de l'objet nommé age contenant le chiffre 46 */
    nom: 'Duflot', /* un autre attribut, nommé nom contenant la chaîne de caractèr 'Duflot' */
    toto: function(){
        console.log(this.age); /* La méthode toto de l'objet unObj affiche en console un attribut de l'objet dans lequel eslle est déclarée 'this' */
    }, /* Méthode de l'objet, appelée 'toto' */
};
/* type object */

console.log(unObj);
console.log(typeof unObj);
console.log(unObj.age);
unObj.toto();

/* JSON */

const unObjJson = {
    'age': 45,
    'nom': 'Duflot',
};

console.log(unObjJson);
console.log(typeof unObjJson);
console.log(unObjJson.age);

/**
 * 
 * Opérateurs
 * 
 * Mathématiques
 * 
 * +    =>  Addition (on ne l'utilise plus pour la concaténation de variables et de chaine)
 *              'toto' + 'tata' => 'tototata'
 * -    =>  Soustraction
 * *    =>  Multiplication
 * **   =>  Puissance (2**3 => avant Math.pow(2,3))
 * /    =>  Division avec virgule
 * %    =>  Modulo : donne le reste d'une division
 *              3%2 => 1
 * ++   =>  Incrémentation
 * --   =>  Décrémentation
 */

let cpt = 0;
cpt = cpt + 1;

console.log(cpt);
console.log(cpt++); /* Affiche cpt (1) puis ajoute 1 à cpt */
console.log(cpt);   /* Affiche 2 */
console.log(++cpt); /* Ajoute 1 à cpt puis l'affiche (3) */

/* même comportement pour le -- */

 /** 
 * Logiques
 * 
 *  && (ET) (tous les éléments doivent être vrai pour que la comparaison soit vraie)
 *      a && b => a est vrai et b est vrai alors la comparaison est vraie
 *      a && b => a est vrai et b est faux alors la comparaison est fausse
 *      a && b => a est faux et b est vrai alors la comparaison est fausse
 *      a && b => a est faux et b est faux alors la comparaison est fausse
 * 
 *  || (OU) (Au moins un des éléments doit être vrae pour que la comparaison soit vraie)
 *      a || b => a est vrai et b est vrai alors la comparaison est vraie
 *      a || b => a est vrai et b est faux alors la comparaison est vraie
 *      a || b => a est faux et b est vrai alors la comparaison est vraie
 *      a || b => a est faux et b est faux alors la comparaison est fausse
 * 
 *  ! (NON) (renvoie l'inverse de l'état)
 *      !a => a est vrai alors !a est faux
 *      !a => a est faux alors !a est vrai
 * 
 *  ^ (NON OU ou XOR) : OU EXCLUSIF BINAIRE (Seulement un des éléments doit être vrai pour que la comparaison soit vraie)
 *      a ^ b => a est vrai et b est vrai alors la comparaison est faux
 *      a ^ b => a est vrai et b est faux alors la comparaison est vrai
 *      a ^ b => a est faux et b est vrai alors la comparaison est vrai
 *      a ^ b => a est faux et b est faux alors la comparaison est faux
 * 
 */

 /** 
 * De Comparaisons
 * 
*/