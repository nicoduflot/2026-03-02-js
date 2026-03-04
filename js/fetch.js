loaded(function(){
    fetch('./ressources/users.json')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
      .finally(function(){
        console.log('c\'est fini !');
    });

    console.log(q('button.read'));
    

    q('button.read').map(function(button){
        button.addEventListener('click', function(){
            const url = this.dataset.url;
            fetch(url)
            .then(function(reponse){
                return reponse.json();
            })
            .then(function(data){
                if(data.length > 1){
                    data.forEach(function(user){
                        console.log(user);
                    });
                }else{
                    console.log(data);
                }
            })
            .catch(function(error){
                console.error(error);
            })
            .finally(function(){
                console.log('Appel terminé');
            });
        });
    });
    
});