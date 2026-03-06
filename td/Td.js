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
    let scoreN1 = 0
    let scoreN2 = 0;
    let bonus = 0;
    let scoreTotal = 0;
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

    const desPlateau = [];

    function sommePlateau(desPlateau){
        let totalPlateau = 0;
        desPlateau.map(function(valeur){
            totalPlateau = totalPlateau + valeur;
        });
        return totalPlateau;
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
                    desPlateau[cptGob] = deRes;
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

        const choixPoints = q(`#${combiChoisie}`);
        
        let score = 0;
        desPlateau.sort();
        switch(combiChoisie){
            case 'c01':
            case 'c02':
            case 'c03':
            case 'c04':
            case 'c05':
            case 'c06':
                /* Éléments de la partie basse */
                
                desPlateau.map(function(valeur){
                    if(choixPoints.value == valeur){
                        score = score + valeur;
                    }
                });
                scoreN1 = scoreN1 + score;
            break;
            case 'c07':
            case 'c08':
                /* brelan ou carré */
                
                let cpt = 1;
                desPlateau.map(function(valeur, index, tab){
                    if(valeur == tab[index+1]){
                        cpt = cpt + 1;
                        if(cpt == choixPoints.value){
                            scoreN2 = scoreN2 + sommePlateau(desPlateau);
                        }
                    }else{
                        cpt = 1;
                    }

                });
            break;
            case 'c09':
                /* full */

            break;
            case 'c12':
                let scoreYam = desPlateau[0] * 5;
                if(scoreYam === sommePlateau(desPlateau)){
                    scoreN2 = scoreN2 + 50;
                }
            break;
            case 'c13':
                scoreN2 = scoreN2 + sommePlateau(desPlateau);
        }

        choixPoints.setAttribute('disabled', 'disabled');
        if(scoreN1 >= 63){
            bonus = 35;
        }
        scoreTotal = scoreN1 + scoreN2 + bonus;
        q('#scoreN1').innerText = scoreN1;
        q('#bonus').innerText = bonus;
        q('#scoreN2').innerText = scoreN2;
        q('#scoreTotal').innerText = scoreTotal;
        reinit();
    });

});