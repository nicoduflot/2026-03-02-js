function jsonToTable(data, searchTerm = ''){
    if(!(data.length > 1)){
        data = [data];
    }
    const table = cE('table');
    table.classList.add('table', 'table-striped', 'table-bordered');
    const thead = cE('thead');
    const trHead = cE('tr');
    const tbody = cE('tbody');
    table.append(thead);
    thead.append(trHead);
    table.append(tbody);
    let firstLine = true;
    let foundTerm = false;
    data.map(function(entree){
        /*console.log(entree);*/
        const tr = cE('tr');
        for(key in entree){
            if(firstLine){
                const th = cE('th');
                th.append(cTN(key))
                trHead.append(th);
            }
            const td = cE('td');
            tr.append(td);
            if(typeof entree[key] !== 'object'){
                /*console.log(key, entree[key]);*/
                td.append(cTN(entree[key]));
            }else{
                /*console.log(typeof entree[key], key);*/
                let tdData = `<b>${key}</b><br />`;
                for(subkey in entree[key]){
                    if(typeof entree[key][subkey] !== 'object'){
                        /*console.log(`---- ${subkey} ${entree[key][subkey]}`);*/
                        tdData = tdData + `
                            ${subkey} : <i>${entree[key][subkey]}</i><br />
                        `;
                    }
                }
                td.innerHTML = tdData;
            }
            /*console.log(td.innerText.toLowerCase());            */
            if( td.innerText.toLowerCase().indexOf(searchTerm) > -1 && '' !== searchTerm){
                foundTerm = true;
            }
        }
        firstLine = false;
        if('' === searchTerm || foundTerm){
            tbody.append(tr);
            foundTerm = false;
        }else{
            erase_childs(tr);
            tr.remove();
        }
    });
    
    console.log(table);
    return table;
}

loaded(function(){
    fetch('./ressources/users.json')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
      .finally(function(){
        console.log('c\'est fini !');
    });

    /*console.log(q('button.read'));*/
    

    q('button.read').map(function(button){
        button.addEventListener('click', function(){
            const url = this.dataset.url;
            fetch(url)
            .then(function(reponse){
                return reponse.json();
            })
            .then(function(data){
                erase_childs(q('#result'));
                q('#result').append(jsonToTable(data));
            })
            .catch(function(error){
                console.error(error);
            })
            .finally(function(){
                console.log('Appel terminé');
            });
        });
    });

    q('#clearResult').addEventListener('click', function(){
        erase_childs(q('#result'));
    });
    
    q('button.search').addEventListener('click', function(){
        const term = q('input[name="search"').value.toLowerCase();
        if('' !== term){
            fetch(this.dataset.url)
            .then(function(reponse){
                return reponse.json();
            })
            .then(function(data){
                erase_childs(q('#result'));
                q('#result').append(jsonToTable(data, term));
            })
            .catch(function(error){
                console.error(error);
            })
            .finally(function(){
                console.log('Appel terminé');
            });
        }
    });

});