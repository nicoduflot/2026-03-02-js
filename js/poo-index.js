/*
un objet est composée d'au moins un attribut ou clef, qui contient une valeur ou une méthode
    méthode : c'est une fonction qui est utilisable seulement depuis une instance de classe 
        => donc d'un objet créé à partir de cette classe ou d'un objet litéral
*/

/* Objet litéral : objet créé "sur le pouce", pour un fonctionnement précis ne nécessitant pas forcément la création d'une classe */

const monObjet = {
    attribut: 'valeur',
    attributNum: 12,
    attributObj: {
        nom: 'Duflot'
    },
    methode: function(parametreExt = 0){
        return `La ${this.attribut} existe ${parametreExt} fois`;
    },
};

console.log(monObjet);
console.log(monObjet.attribut);
console.log(monObjet.methode);
console.log(monObjet.methode());
console.log(monObjet.methode(25));

/*  
les objets sont prototypés => ils possèdent un constructeur qui crée l'instance (l'objet qui résulte de l'appel de la classe)

Pour créer un prototype, il faut un constructeur

Avant la possibilité d'écrire de sclasse pour créer des objets, on procédait comme ceci en JS
*/

/* Le constructeur */
function Guerrier(nom, prenom, age){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.esperanceDeVie = this.age + Math.floor( Math.random() * 30 + 10 );
}


/* L'objet est utilisable, mais si on veut qu'il puisse faire des actions, il faut lui créer des méthodes */
Guerrier.prototype.monNom = function(){
    return `Je suis ${this.prenom} ${this.nom}`;
};

/* On créer un objet en invocant une instance du constructeur de l'objet */
const monPremierGuerrier = new Guerrier('LeBarbare', 'Conan', 15);

console.log(monPremierGuerrier);
console.log(monPremierGuerrier.esperanceDeVie);
console.log(monPremierGuerrier.monNom());
monPremierGuerrier.esperanceDeVie = 55
console.log(monPremierGuerrier.esperanceDeVie);

/*
EN JSON
Il est possible de créer un objet Litéral en JSON
*/

const monUser = {
    'id': 1,
    'login': 'Toto',
    'action': function(){
        return 'TAPER !';
    }
};

/* Si l'objet JSON est créé en script js, il est possible de lui créer des méthodes et de les utiliser */

console.log(monUser);
console.log(monUser.id);
console.log(monUser.login);
console.log(monUser.action());

fetch('./ressources/user.json')
.then(function(reponse){return reponse.json()})
.then(function(data){
    /*console.log(data);    */
});

/* Si le JSON est récupéré via une requête AJAX, si une méthode est décrite dans un des objet JSON renvoyé, elle n'est pas utilisable. */

/* 
utiliser class 
création de classes avec class est apparue en ES6
Il existe la possibilité d'utiliser des attribut et des méthode de façon privée (comme sur PHP par exemple) en utilisant le croisillon # (Hash names)?
Comme pour le PHP, il faut des accesseurs (getter) et des mutateurs (setter) pour accéder et modifier ces attribut et classes
*/

/* Créons un classe qui regroupe les éléments de création d'objet vu précédent */
class Voiture{
    /*
    Les attributs privé sont des attributs qui ne doivent pas être manipulé par les utilisateurs de l'objet, le seul moyen de les manipuler est de créer des méthodes dans l'objet pour cela
    Les attributs privés sont déclarés comme privés à l'extérieur du constructeur, avant sa déclaration
    */
    #marque;
    /*
    Le constructeur de la classe
    */
    constructor(marque, modele, couleur){
        /* on crée les attributs de l'objet */
        this.#marque = marque;
        this.modele = modele;
        this.couleur = couleur;
    }

    /*
    Si un attribut est privé, on ne peut ni récupérer sa valeur ni la changer directement comme les attributs publics.
    Pour accéder à sa valeur, il faut écrire une méthode qu'on nomme accesseur
    Pour modifier sa valeur, il faut écrire une méthode qu'on nomme mutateur
    */

    /* Assesseur ou Getter */
    static getMarque(obj){
        if(#marque in obj){
            return obj.#marque;
        }else{
            return 'L\'objet doit être une instance de voiture';
        }
    }

    /* Mutateur ou Setter */
    static setMarque(obj, newMarque){
        if(#marque in obj){
            obj.#marque = newMarque;
            return obj.#marque;
        }else{
            return 'L\'objet doit être une instance de voiture';
        }
    }

    /* Méthodes de la voiture */
    demarrer(){
        return `La ${this.constructor.name} démarre`;
    }
    
    avancer(){
        return `La ${this.constructor.name} avance`;
    }

    /* méthode statique : ne peut être utiliser que depuis la classe, pas depuis une instance (un objet) de la classe */
    static klaxonner(){
        return 'POUEEEET POUEEET !';
    }

};

const maVoiture = new Voiture('Chevrolet', 'Chevelle 1972', 'Fiery Red');

console.log(maVoiture);
console.log(maVoiture.modele);
console.log(maVoiture.marque); /* undefined car attribut privé */
console.log(Voiture.getMarque(maVoiture));
console.log(Voiture.setMarque(maVoiture, 'Honda'));
console.log(maVoiture);
console.log(maVoiture.demarrer());
console.log(maVoiture.avancer());
console.log(Voiture.klaxonner());

/*
Je dois créer une ambulance pour un hopital
Un ambulance est une voiture, mais une voiture n'est pas forcément une ambulance
Une ambulance, c'est une voiture modifiée pour accueillir des blessés, des malades et équipées d'une sirène.
On ne va pas mettre ces options possibles dans la classe voiture, on va créer une classe "fille", qui héritera de tous les éléments communs avec toutes les voitures mais les spécificités de l'ambulance y seront intégrées
*/

class Ambulance extends Voiture{
    /*
    Bien qu'une ambulance est la classe enfant de Voiture, elle nécéssite quand même un constructeur
    */
    constructor(marque, modele, couleur, porteLaterale = false){
        /*
        On n'a pas besoin de redéclarer tous les attributs et méthodes de la classe parente dans la classe enfant, on va les "récupérer" grace à la méthode super()
        */
        super(marque, modele, couleur);
        this.couleur = (this.couleur !== 'Blanc')? 'Blanc' : this.couleur;
        this.sirene = false;
        this.porteLaterale = porteLaterale;
    }

    /*
    Si une méthode de la classe mère ne correspond pas tout à fait à l'utilisation possible de la classe fille, il est possibe de surcharger ou de complètement réécrire une méthode de la classe mère dans la classe fille
    */
    demarrer(){
        let bruit = '';
        bruit = (this.sirene)? 'PIN PON PIN PON PIN PON PIN PON !' : 'Vrrr rrr rrrrrr';
        return `${super.demarrer()} ${bruit}`;
    }
}

const monAmbulance = new Ambulance('Renault', 'Master XDD', 'bleu', true);
console.log(monAmbulance);
console.log(Ambulance.getMarque(monAmbulance));
console.log(monAmbulance.demarrer());
console.log(monAmbulance.avancer());
console.log(monAmbulance.sirene = true);
console.log(monAmbulance.demarrer());
