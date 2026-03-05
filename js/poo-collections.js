/*
Collection : Dictionnaires (ou tableau associatifs)
les "index" de la collection sont des clefs
*/

/****************
 /!\ ILLÉGAL /!\
*****************/

const tabAssoPirate = [];
tabAssoPirate['toto'] = 23;
tabAssoPirate['titi'] = 43;
console.log(tabAssoPirate);

/*
la m"thode .map() des tableau ne peux pas fonctionner car elle utilise l'index nombre
tabAssoPirate.map(function(donnee, indice, tab){
    console.log(donnee, indice, tab);    
});
*/
/*
le for in fonctionne car il se base sur le parcours des clefs
for(key in tabAssoPirate){
    console.log(key, tabAssoPirate[key]);
}
*/

/*
On utilisera pour un fonctionnement clef => valeur un objet itérable instance de la classe Map()
*/

const map = new Map();

console.log(map);
map.set('lastname', 'Doe');
map.set('firstname', 'john')
    .set('email', 'j.doe@missing.com')
    .set('phone', '0123456789')
    .set('city', 'Santa Monica');
console.log(map);
map.set('phone', '9876543210');

console.log(map);
console.log(map.size);
console.log(map.get('lastname'));

map.forEach(function(valeur, clef, map){
    console.log(valeur, clef);
    console.log(map);
});

console.log(map.has('mail'));
console.log(map.has('email'));

/*
la classe Map() produit un objet itérable, il est conçut avec design pattern nommé iterator
*/

/*
.entries()
.keys()
.values()
*/

console.log(`|${''.padEnd(20, '-')}|${''.padStart(20, '-')}|`);
console.log(`|${'KEY'.padEnd(20, ' ')}|${'VALUE'.padStart(20, ' ')}|`);
console.log(`|${''.padEnd(20, '-')}|${''.padStart(20, '-')}|`);
for(let [key, value] of map.entries()){
    console.log(`|${key.padEnd(20, ' ')}|${value.padStart(20, ' ')}|`);
}
console.log(`|${''.padEnd(20, '-')}|${''.padStart(20, '-')}|`);
console.log(`|${'KEY'.padEnd(20, ' ')}|${'VALUE'.padStart(20, ' ')}|`);
console.log(`|${''.padEnd(20, '-')}|${''.padStart(20, '-')}|`);
for(let key of map.keys()){
    console.log(`|${key.padEnd(20, ' ')}|${'****'.padStart(20, ' ')}|`);
}
console.log(`|${''.padEnd(20, '-')}|${''.padStart(20, '-')}|`);
console.log(`|${'KEY'.padEnd(20, ' ')}|${'VALUE'.padStart(20, ' ')}|`);
console.log(`|${''.padEnd(20, '-')}|${''.padStart(20, '-')}|`);
for(let value of map.values()){
    console.log(`|${'****'.padEnd(20, ' ')}|${value.padStart(20, ' ')}|`);
}

map.delete('phone');

console.log(map);


/*
Set();
Tableau a valeurs uniques : la clef est la valeur
*/

const set = new Set();
console.log(set);

set.add('Sansa')
    .add('Rob')
    .add('Joffrey')
    .add('Sansa')
    .add('Hodor')
    .add('Oona');

console.log(set);

console.log(`|${''.padEnd(20, '-')}|${''.padStart(20, '-')}|`);
console.log(`|${'KEY'.padEnd(20, ' ')}|${'VALUE'.padStart(20, ' ')}|`);
console.log(`|${''.padEnd(20, '-')}|${''.padStart(20, '-')}|`);
for(let [key, value] of set.entries()){
    console.log(`|${key.padEnd(20, ' ')}|${value.padStart(20, ' ')}|`);
}
console.log(`|${''.padEnd(20, '-')}|${''.padStart(20, '-')}|`);
console.log(`|${'KEY'.padEnd(20, ' ')}|${'VALUE'.padStart(20, ' ')}|`);
console.log(`|${''.padEnd(20, '-')}|${''.padStart(20, '-')}|`);
for(let key of set.keys()){
    console.log(`|${key.padEnd(20, ' ')}|${'****'.padStart(20, ' ')}|`);
}
console.log(`|${''.padEnd(20, '-')}|${''.padStart(20, '-')}|`);
console.log(`|${'KEY'.padEnd(20, ' ')}|${'VALUE'.padStart(20, ' ')}|`);
console.log(`|${''.padEnd(20, '-')}|${''.padStart(20, '-')}|`);
for(let value of set.values()){
    console.log(`|${'****'.padEnd(20, ' ')}|${value.padStart(20, ' ')}|`);
}

set.delete('Joffrey');
if(!set.has('Joffrey')){
    console.log('Youpi, il est mort !');
}