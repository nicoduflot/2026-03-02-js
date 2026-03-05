import Compte from "./Compte.js";

export default class CompteInteret extends Compte{
    constructor(nom, prenom, solde, tauxInteret){
        super(nom, prenom, solde);
        this.tauxInteret =tauxInteret;
    }

    /*
    x +20% de x = x*1.2;
    (1.2 - 1) * x = 20% de x
    */

    calculerInteret(){
        return parseFloat(((this.tauxInteret - 1) * this.solde).toFixed(2));
    }

    crediterInterets(){
        super.ajouterDeLargent(this.calculerInteret());
    }
}