loaded(function(){
    /* pour créer un objet, on peut le créer via une classe ou un objet litéral */
    const arrayCollection = {
        /*
        Si on veux créer un Itérator, il faut OBLIGATOIREMENT q'un des attribut de l'objet soit un tableau.
        */

        elements : [],
        add(...valeurs){
            for(let value of valeurs){
                this.elements.push(value);
            }
        },
        count(search){
            let cpt = 0;
            for(let value of this.elements){
                cpt = cpt + ((value.toString().toLowerCase() === search.toString().toLowerCase())? 1 : 0);
            }
            return cpt;
        },
        /*
        Pour pouvoir itérer sur un objet, il faut définir quelle propriété de l'objet est itérable
        En utilisant le mot clefs Symbol, cela va permettre de créer des méthodes et des attributs uniques
        */
        [Symbol.iterator](){
            let index = 0;
            let elements = this.elements;
            return {
                next() {
                    /*
                    next est un générator, il va renvoyer les données qu'il reçoit de l'attribut itérable l'une après.
                    Il attend des propriétés : 
                        value (ce qui est la valeur suivante dans l'attribut itérable)
                        done (la condition pour arrêter d'explorer l'attribut itérable)
                    */
                    return {
                        value: elements[index++],
                        done: elements.length < index
                    }
                }
            }
        }
    };

    arrayCollection.add('Aria', 'ok', 12, 'aria', 'ok', 'ok', 'ok', 'ok', 12);
    console.log(arrayCollection);
    for(let value of arrayCollection){
        console.log(value);
    }

    console.log(`Compter aria :${arrayCollection.count('aria')}`);
    console.log(`Compter ok :${arrayCollection.count('ok')}`);

    /* Generator */
    function* valeurPaire(min, max){
        for(let i = min; i < max; i = i + 1 ){
            if( 0 === (i % 2) ){
                yield i;
            }
        }
    }

    console.log('--------- valeurs paires entre min et max -----------------');
    

    for(let value of valeurPaire(3, 25)){
        console.log(value);        
    }

    function* xDy(xD, yF){
        for(let i = 0; i < xD; i++){
            yield Math.floor(Math.random() * yF + 1);
        }
    }

    console.log('-------- X dé à y faces -----------------');
    
    for(let res of xDy(3, 10)){
        console.log(res);
    }

});