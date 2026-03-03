const list = [1, 2, 3, 4];
/*
assigner les trois premère valeurs de la liste aux constantes a, b et c
const a = list[0];
const b = list[1];
const c = list[2];
*/

const [a, b, c] = list;
console.log(`a : ${a}, b : ${b}, c : ${c}`);

const [d, , f, g] = list;
console.log(`d : ${d}, f : ${f}, g : ${g}`);

const [h, i, j, k = 0, l = 5] = list;
console.log(`h : ${h}, i : ${i}, j : ${j}, k : ${k}, l : ${l}`);

function truc(unTruc = 12, uneOption = false, ...valeurs){
    const [a = 0, b = false, c = 'Compta'] = valeurs;
    console.log(unTruc, uneOption, a, b, c);
    console.log(valeurs);
}

truc();
truc(13);
truc(13, true);
truc(13, true, 123.3);
truc(13, true, 123.3, 'dweeb');
truc(13, true, 123.3, 'dweeb', 101, 23, 'mom');

/* échanger les valeurs de deux variables */
/* sans la destructuration */
let var01 = 12;
let var02 = 58;
let temp = var01;
var01 = var02;
var02 = temp;
/* avec la destructuration */

let v01 = 12;
let v02 = 58;
[v01, v02] = [v02, v01];
console.log(v01, v02);
