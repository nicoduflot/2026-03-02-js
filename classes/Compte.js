export default class Compte{
    constructor(nom, prenom, solde){
        this.nom = nom;
        this.prenom = prenom;
        this.solde = solde;
    }

    retirerDeLargent(montant){
        if(this.solde - montant >= 0){
            this.solde = this.solde - montant;
            console.log(`${this.constructor.name} : 
                ${montant} € débité, Solde restant : ${(this.solde >= 0)? 'créditeur' : 'Débiteur'} : ${this.solde} €`);
            return true;
        }else{
            console.log(`${this.constructor.name} : 
                Le montant ${montant} € dépasse le solde autorisé du compte : ${this.solde} €`);
            return false;
        }
    }
    
    ajouterDeLargent(montant){
        this.solde = this.solde + montant;
        console.log(`${this.constructor.name} : 
            ${montant} € crédité, Solde : ${(this.solde >= 0)? 'créditeur' : 'Débiteur'} : ${this.solde} €`);
        return true;
    }

    virement(montant, beneficiaire){
        if(this.retirerDeLargent(montant)){
            beneficiaire.ajouterDeLargent(montant);
            return true;
        }else{
            return false;
        }
    }
}