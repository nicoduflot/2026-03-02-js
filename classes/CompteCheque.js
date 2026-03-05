import Compte from "./Compte.js";

export default class CompteCheque extends Compte{
    constructor(nom, prenom, solde, decouvertAutorise = 0){
        super(nom, prenom, solde);
        this.decouvertAutorise = decouvertAutorise;
    }

    retirerDeLargent(montant){
        if((this.solde + this.decouvertAutorise) - montant >= 0){
            this.solde = this.solde - montant;
            console.log(`${this.constructor.name} : 
                ${montant} € débité, Solde restant : ${(this.solde >= 0)? 'créditeur' : 'Débiteur'} : ${this.solde} €`);
            return true;
        }else{
            console.log(`${this.constructor.name} : 
                Le montant ${montant} € dépasse le solde autorisé du compte : ${this.solde} € + découvert autorisé de ${this.decouvertAutorise} €`);
            return false;
        }
    }
}