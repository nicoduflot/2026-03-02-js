import loaded, {q} from "../classes/Tools.js";
import De from "./classes/De.js";

loaded(function(){
    
    const de1 = new De(6);
    const de2 = new De(6);
    const de3 = new De(6);
    const de4 = new De(6);
    const de5 = new De(6);
    
    const gobelet = [de1, de2, de3, de4, de5];

    let nbLancer = 1;
    let nbTour = 1;
    const blocked = q('#plateau [type="checkbox"]');
    const combinaisons = q('#listeCombi [type="checkbox"]');
    let combiChoisie = null;

    function reinit(){
        blocked.forEach(function(check){
            q(check.dataset.target).innerText = 0;
        });
        nbLancer = 1;
        nbTour = nbTour + 1;
    }

    /* 
    lancer les dés [X]
    gérer les dés bloqués[X]
    gérer le nombre max de lancés (3) [X]
    */
    q('#lancer').addEventListener('click', function(){
        if(nbLancer < 4){
            let cptGob = 0;
            blocked.forEach(function(check){
                if(!check.checked){
                    const deRes = gobelet[cptGob].lancerDe();
                    q(check.dataset.target).innerText = deRes;
                }
                cptGob = cptGob + 1;
            });
            nbLancer = nbLancer + 1;            
        }
    });

    /* 
    réinitialiser les dés [X]
    compter le nb de tours [X]
    */
    q('#reinit').addEventListener('click', function(){
        /*
        reinit();
        */
    });

    /*
    Choisir une combinaison [X]
    Débloquer le bouton de validation[X]
    */
    combinaisons.forEach(function(combi){
        combi.addEventListener('change', function(){
            if(combi.checked){
                q(combi.dataset.target).style.textDecoration = 'line-through';
                q('#valid').classList.remove('disabled');
                combiChoisie = combi.id;
                
            }else{
                q(combi.dataset.target).style.textDecoration = 'none';
                q('#valid').classList.add('disabled');
                combiChoisie = null;
            }
        });
    });

    /*
    valider une combinaison []
    calculer le score []
    */

    q('#valid').addEventListener('click', function(){
        this.classList.add('disabled');
        blocked.forEach(function(check){
            check.checked = false;
        });

        q(`#${combiChoisie}`).setAttribute('disabled', 'disabled');
        reinit();
    });

});