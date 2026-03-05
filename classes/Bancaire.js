import CompteInteret from "./CompteInteret.js";
import CompteCheque from "./CompteCheque.js";
import loaded, {q, cE, cTN, erase_childs} from "./Tools.js";

loaded(function(){
    const compteInteret = new CompteInteret('Duflot', 'Nicolas', 2000, 1.015);
    const compteCheque = new CompteCheque('Duflot', 'Nicolas', 2000, 400);
    
    console.log(compteInteret);
    console.log(compteCheque);

    console.log(compteInteret.calculerInteret());
    compteInteret.crediterInterets();
    compteInteret.retirerDeLargent(2100);

    compteCheque.retirerDeLargent(200);
    compteCheque.retirerDeLargent(2400);
    compteCheque.retirerDeLargent(2200);
    compteCheque.ajouterDeLargent(2200);

    compteCheque.virement(400, compteInteret);
    compteCheque.virement(2400, compteInteret);
});

